const mongoose = require('mongoose')
const { Schema, model, models } = mongoose;

const EmailModel = new Schema(
    {
        email:{
            type:String,
            required:true,
        }
    }
)

module.exports = models.Email || model("Email", EmailModel)