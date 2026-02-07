import getAllUserData from "./user_validate.js"

console.log("user_list_render.js script connected!")

const userListDiv = document.getElementById("user-list-container")
// let usersList = JSON.parse(userListDiv.dataset.usersList) NOTE: Old method passed JSON data as a string directly to a data attribute of one of the HTML elements.
let usersList = []

async function fillUsersOnPage() {
  usersList = await getAllUserData()
  for (let i in usersList) {
    // `<li><a href="/users/${usersList[i]}">${usersList[i]}</a></li>`
    let newListItem = document.createElement("li")
    newListItem.innerHTML = `${JSON.stringify(usersList[i].id)}. `
    let newLink = document.createElement("a")
    newLink.href = `/users/${i}`
    newLink.innerHTML = usersList[i].username
    newListItem.appendChild(newLink)
    userListDiv.appendChild(newListItem)
    // console.log(usersList[i])
  }
}

fillUsersOnPage()