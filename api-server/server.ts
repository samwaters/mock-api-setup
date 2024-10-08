import express from "express"

const server = express()
server.get("/api/timestamp", (req, res) => {
    res.send({
        timestamp: new Date().getTime()
    })
    res.end()
})
server.get("*", (req, res) => {
    res.send("Not Found")
    res.status(404)
    res.end()
})

console.log("API Server on 8081")
server.listen(8081)
