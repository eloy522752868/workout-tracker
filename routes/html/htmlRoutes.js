//Modified: Eloy Gonzalez
//Modified Date:05072021
const router = require("express").Router();
const path = require("path");

// This is the 'get' route index
router.get("/", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// This is the 'get' route excercise.html
router.get("/exercise", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.resolve("public/exercise.html"));
  //res.sendFile("/public/exercise.html");
});

// This is the 'get' route stats.html
router.get("/stats", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.resolve("public/stats.html"));
  //res.sendFile("/public/exercise.html");
});

module.exports = router;
