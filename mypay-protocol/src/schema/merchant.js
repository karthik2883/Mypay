import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const merchantSchema = new mongoose.Schema(
    {
        merchantname: {
            type: String,
            index: false,
        },
        merchantkey: {
            type: Number,
            required: false
        },
        merchantvolume: {
            type: Number,
            required: false
        },
        time: { type: Date, default: Date.now }
    }, { strict: true }
);
coinvalueSchema.plugin(autoIncrement.plugin, 'id');

export default coinvalueSchema;
