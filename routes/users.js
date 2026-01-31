const express = require("express")
const router = express()

let users = []

router.route("/")
.get((req, res) => {
  res.render("users/users_list", {users_list: JSON.stringify(users)})
})
.post((req, res) => {
  res.send(`USER: ${req.body.username} CREATED`)
})


router.get("/new", (req, res) => {
  res.render("users/new", {inputtedUsername: ""})
})

router.post("/new", (req, res) => {
  const validUserInfo = true // Variables just to test validation scenario
  const newUserId = 68
  if (validUserInfo) {
    users.push({ username: req.body.username })
    console.log("User enter data is valid.")
    console.log(`List of users: ${JSON.stringify(users)}`)
    console.table(users)
    res.redirect(`/users/${newUserId}`)
  } else {
    console.log("Failed validation check... returning to user form.")
  res.render("users/new", {inputtedUsername: req.body.username})
  }
})

router.route("/:userId")
.get((req, res) => {
  res.render("users/user_profile", {userId: req.params.userId})
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