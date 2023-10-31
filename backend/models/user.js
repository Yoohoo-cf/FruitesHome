const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
    }
});

userSchema.pre("save", async function (next) {
    const saltRounds = 10

    const salt = bcrypt.genSaltSync(saltRounds)
    this.password = await bcrypt.hash(this.password, salt)

})

userSchema.methods.isPasswordMatched = async function (typedPassword) {
    return await bcrypt.compare(typedPassword, this.password)
}

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User