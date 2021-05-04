import mongoose  from 'mongoose'


const habitSchema = new mongoose.Schema({

   user:{
       type: mongoose.Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
    name:{
        type: String,
        required: true,

    },
    category:{
        type:String,
        required: true,
    },
    progress:{
        type: Number,
        required: true,
        default: 1

    },
   
},{
    timestamps: true
});

const Habit= mongoose.model('Habit', habitSchema)

export default Habit