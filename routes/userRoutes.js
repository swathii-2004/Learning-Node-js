const express = require("express")
const router = express.Router()

const { createUser } = require("../contollers/userControllers.js")

router.post("/", createUser)

module.exports = router