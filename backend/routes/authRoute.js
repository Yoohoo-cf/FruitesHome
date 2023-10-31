const express = require("express")
const router = express.Router()
const { createUser, loginUser, getUsers, getSingleUser, deleteUser, updateUser } = require("../controllers/users")

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getUsers)
router.get('/:id', getSingleUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router