/**
 * @file This file defines a Cloud Function that
 * adds a message to a Firestore database.
 * @author Dagmawi Negatu
 * @version 1.0.0
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Import the required Firebase modules
const {logger} = functions;

/**
 * Adds a message to the Firestore database.
 * @param {Object} data - The data containing the message text and user ID.
 * @param {Object} context -
 * The context object containing information about the request.
 * @returns {Promise<Object>}
 * Resolves with an object containing the ID of the added message.
 */
exports.addMessage = functions.https.onCall(async (data, context) => {
  try {
    // Log the received message request data
    logger.log("Received message request data:", data);

    // Check if required fields (text or userId) are missing
    if (!data.text || !data.userId) {
      logger.log("Required fields (text or userId) are missing");
      throw new functions.https.HttpsError(
          "invalid-argument",
          "Required fields (text or userId) are missing",
      );
    }

    // Extract text and userId from the data
    const {text, userId} = data;

    // Construct the message data object with timestamp
    const messageData = {
      text,
      userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add the message to the Firestore database
    const messageRef = await admin
        .firestore()
        .collection("chats")
        .doc(userId)
        .collection("messages")
        .add(messageData);

    // Log successful message addition
    logger.log("Message added successfully, message ID:", messageRef.id);

    // Return Message Data
    return {messageId: messageRef.id};
  } catch (error) {
    // Log error while adding the message
    logger.error("Error adding message:", error);

    // Throw an HTTP error with the error message
    throw new functions.https.HttpsError(
        "unknown",
        "An error occurred while adding the message",
        error.message,
    );
  }
});
