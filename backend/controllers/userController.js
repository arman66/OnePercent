import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler( async(req, res)=>{

    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user &&( await user.matchPassword(password)) ){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else {
        res.status(401)
        throw new Error('invalid email or password')
    }
})

//desc REgister new users
//routre POST api/users
//access Public


const registerUser = asyncHandler( async(req, res)=>{

    const {name, email, password} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }
    const user= await User.create({
        name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid Data')
    }
 
})






export {authUser, registerUser}