const express = require("express");
const app = express();

const port = process.env.PORT ||8080;
app.get("/test/", async (req,res) =>{
    return res.status(200).send("server_hit")
})

app.listen(port,() =>{
    console.log(`Server running at http://test/${port}/`);
})