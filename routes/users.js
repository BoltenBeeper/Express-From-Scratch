const express = require("express")
const router = express()

router.get("/", (req, res) => {
  res.send("List of users")
})

router.get("/new", (req, res) => {
  res.send("Create User")
})

router.route("/:userId")
.get((req, res) => {
  res.send(`Get user with ID: ${req.params.userId}`)
})
.put((req, res) => {
  res.send(`Update user with ID: ${req.params.userId}`)
})
.delete((req, res) => {
  res.send(`Delete user with ID: ${req.params.userId}`)
})

router.param("userId", (req, res, next, id) => {
  console.log(`Middleware (router.param) ran with user ID: ${id}`)
  next()
})

module.exports = router