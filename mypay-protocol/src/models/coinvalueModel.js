import mongoose from 'mongoose';
import coinvalueSchema from './../schema/coinvalue';
mongoose.set('debug', false);
const coinvalueModel = mongoose.model('coinvalue', coinvalueSchema);
export default coinvalueModel;