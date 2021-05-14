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
    frequency:{
        type:String,
        required: true,
    },
    progress:{
        type: Number,
        required: true,
        default: 1

    },
    poshabit:{
        type: Boolean,
        required: true,
    },
    
   
},{
    timestamps: true
});

const Habit= mongoose.model('Habit', habitSchema)

export default Habit