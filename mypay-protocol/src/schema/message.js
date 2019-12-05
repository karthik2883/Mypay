import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const messageSchema = new mongoose.Schema(
    {
        messagename: {
            type: String,
            index: false,
        },
        messagejson: {
            type: String,
            index: false,
        },       
        time: { type: Date, default: Date.now }
    }, { strict: true }
);
messageSchema.plugin(autoIncrement.plugin, 'id');
export default messageSchema;
