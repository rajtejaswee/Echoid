import express from "express";

const app = express();

app.get("/", function (req:any, res:any) {
    res.send("Hello from Backend")
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})