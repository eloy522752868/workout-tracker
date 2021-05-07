const router = require("express").Router();
const path = require("path");

// This is the 'get' route
router.get("/", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.resolve("public/exercise.html"));
  //res.sendFile("/public/exercise.html");
});
module.exports = router;
