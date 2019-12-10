import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const coinvalueSchema = new mongoose.Schema(
    {
        coinname: {
            type: String,
            index: false,
        },
        coinvalue: {
            type: Number,
            required: false
        },
        coinvolume: {
            type: Number,
            required: false
        },
        time: { type: Date, default: Date.now }
    }, { strict: true }
);
coinvalueSchema.plugin(autoIncrement.plugin, {
    model: 'coinvalue',
    field: 'id',
    startAt: 1
});

export default coinvalueSchema;
