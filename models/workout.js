const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter",
      },
      name: {
        type: String,
        required: "Enter",
      },
      duration: {
        type: Number,
        required: "Enter",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      set: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
