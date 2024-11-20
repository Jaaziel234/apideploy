require("dotenv").config();

const express = require("express");

const port = process.env.PORT || 6000; // Asegúrate de usar un puerto por defecto en caso de que no esté definido

const app = express();

app.get("/", (req, res) => {
    res.send({
        message: "codigozoom",
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port: ${port}`);
});
