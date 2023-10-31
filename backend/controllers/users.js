const User = require("../models/user")
const asyncHandler = require('express-async-handler')
const { Error } = require("mongoose")
const { generateToken } = require("../jwtToken")

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const foundUser = await User.findOne({ email: email })

    if (!foundUser) {
        //Create a new user
        const newUser = User.create(req.body)
        return res.json(newUser)
    } else {
        // User already exists
        throw new Error("User Already Exists")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // check User status(Exists or not)
    const foundUser = await User.findOne({ email: email })
    if (foundUser && await foundUser.isPasswordMatched(password)) {
        return res.json({
            _id: foundUser?._id,
            firstname: foundUser?.firstname,
            lastname: foundUser?.lastname,
            email: foundUser?.email,
            mobile: foundUser?.mobile,
            token: generateToken(foundUser?._id)
        })
    } else {
        throw new Error("Invalid email or password")
    }
})

// Fetch all users
const getUsers = asyncHandler(async (req, res) => {

    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        throw new Error(error)
    }
})

// fetch a user
const getSingleUser = asyncHandler(async (req, res) => {
    console.log(req.params)
    const { id } = req.params

    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }
})

// delete a user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params

    try {
        const deletedUser = await User.findByIdAndDelete(id)
        res.json(deleteUser)
    } catch (error) {
        throw new Error(error)
    }
})

// Update a user 
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile
        }, { new: true })
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createUser, loginUser, getUsers, getSingleUser, deleteUser, updatedUser }