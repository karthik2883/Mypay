import mongoose from 'mongoose';
mongoose.set('debug', false);
import coinvalueSchema from './../schema/coinvalue';

const coinvalueModel = mongoose.model('coinvalue', coinvalueSchema);
export default coinvalueModel;