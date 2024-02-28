const mongoose = require('mongoose')
const { Schema, model, models } = mongoose;
  

const BlogModel = new Schema(
  {
    // _id: {
    //   // Discord UID
    //   type: Number,
    //   required: false,
    // },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    author:{
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = models.Blog || model("Blog", BlogModel);
