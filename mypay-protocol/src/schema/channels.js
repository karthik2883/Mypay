import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const channelsSchema = new mongoose.Schema(
    {
        channelsname: {
            type: String,
            index: false,
        },        
        time: { type: Date, default: Date.now }
    }, { strict: true }
);
channelsSchema.plugin(autoIncrement.plugin, 'id');
export default channelsSchema;
