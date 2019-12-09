import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const messageSchema = new mongoose.Schema(
    {
        message_channel: {
            type: String,
            index: false,
        },
        message_identifier: {
            type: String,
            index: false,
        },
        message_from: {
            type: String,
            index: false,
        },
        message_to: {
            type: String,
            index: false,
        },
        message: {
            type: String,
            index: false,
        },       
        time: { type: Date, default: Date.now }
    }, { strict: true }
);
messageSchema.plugin(autoIncrement.plugin, 'id');
export default messageSchema;
