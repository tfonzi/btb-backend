import mongoose from 'mongoose';

const boxObjSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    nickname: {
        type: String,
        default: "",
    },
})

var BoxObjData = mongoose.model('BoxObjData', boxObjSchema);

export default BoxObjData;