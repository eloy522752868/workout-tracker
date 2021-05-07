
//Modified: Eloy Gonzalez
//Modified Date:05072021
const router = require("express").Router();
const path = require("path");
const Workout = require(path.resolve("models/workout.js"));

//get workout data and aggregate sum exercises duration
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get workout range and aggregate sum exercises duration limit to 7
router.get(`/api/workouts/range`, (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workout) => {
      reversed = workout.reverse();
      res.json(reversed);
    })
    .catch((err) => {
      res.json(err);
    });
});
//insert workout 
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
    //console.log("worked");
    //console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//update workout 
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => {
      // console.log("Working", data);
      res.json(data);
    })
    .catch((err) => {
      //console.log("Not working");
      res.json(err);
    });
});

module.exports = router;
