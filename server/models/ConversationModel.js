const mongoose = require("mongoose");

const converstionSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    message: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ConversationModel = mongoose.model("Conversation", converstionSchema);
module.exports = ConversationModel;
