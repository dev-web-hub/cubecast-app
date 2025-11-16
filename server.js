import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "cubecast-app" });
});

app.listen(process.env.PORT || 3000);
