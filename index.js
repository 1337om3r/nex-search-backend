const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const cors = require("cors");

const app = express(); // 

app.use(cors());       
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch(url);
    const data = await response.text();

    fs.appendFileSync("logs.txt", `${new Date()} - ${url}\n`);

    res.send(data);
  } catch (err) {
    res.status(500).send("Hata oluştu");
  }
});

app.listen(3000, () => console.log("Server çalışıyor"));