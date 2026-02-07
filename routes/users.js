const express = require("express")
const router = express()
const fs = require("fs").promises
const path = require("path")

router.use(getUsers)

router.route("/")
.get(async (req, res) => {
  res.json(JSON.parse(req.users))
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

    newUser = {}
    newUser.id = users.length
    newUser.username = req.body.username
    newUser.password = req.body.password
    newUser.email = req.body.email
    newUser.phoneNumbner = req.body.phoneNumbner

    users.push(newUser)
    console.table(users)
    try {
      await fs.writeFile(path.join(__dirname, "..", "private", "users.json"), JSON.stringify(users, null, "\t"))
    } catch (err) {
      console.log(err)
      res.status(500).send("Error writing data")
    }
    res.redirect(`/users/${newUser.id}`)
  } else {
    console.log("Failed validation check... returning to user form.")
  res.render("/new", {inputtedUsername: req.body.username})
  }
})

router.route("/admin")
.get((req, res) => {
  res.render("users/admin")
})

router.route("/:userId")
.get((req, res) => {
  user = {}
  user.userId = req.params.userId
  user.userUsername = JSON.parse(req.users)[req.params.userId].username
  res.render("users/profile", user)
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