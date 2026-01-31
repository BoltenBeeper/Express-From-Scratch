const express = require("express")
const router = express()
const fs = require('fs').promises
const path = require('path')

router.use(getUsers)

router.route("/")
.get(getUsers, async (req, res) => {
  res.render("users/users_list", {users_list: JSON.stringify(JSON.parse(req.users))})
})
.post((req, res) => {
  res.send(`USER: ${req.body.username} CREATED`)
})

router.get("/new", (req, res) => {
  res.render("users/new", {inputtedUsername: ""})
})

router.post("/new", async (req, res) => {
  const validUserInfo = true // Variables just to test validation scenario
  if (validUserInfo) {
    users = JSON.parse(req.users)
    newUserId = users.length
    users.push({ id: newUserId, username: req.body.username })
    console.table(users)
    try {
      await fs.writeFile(path.join(__dirname, "..", "private", "users.json"), JSON.stringify(users))
    } catch (err) {
      console.log(err)
      res.status(500).send("Error reading data")
    }
    res.redirect(`/users/${newUserId}`)
  } else {
    console.log("Failed validation check... returning to user form.")
  res.render("/new", {inputtedUsername: req.body.username})
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

async function getUsers(req, res, next) {
  try {
      req.users = await fs.readFile(path.join(__dirname, "..", "private", "users.json"), "utf8")
      next()
  } catch (err) {
      console.error(err)
      res.status(500).send("Error reading data")
      next()
  }
}

module.exports = router