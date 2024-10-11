const express = require("express")
const route = express.Router()
const data = require("../../data/data")

route.get("/", (req,res) => {
    res.status(200).send(data)
})

route.get("/user/:id", (req,res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const user= data.users.find(u => u.id === id)
    console.log(user)
    !user?res.status(404).send({"id":"user not found"}):res.status(200).send(user)
})


module.exports = route;