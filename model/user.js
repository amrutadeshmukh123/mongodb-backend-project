const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{type:String,require:true},
    username:{type:String,require:true},
    mobileNo:{type:String,require:true}
})

module.exports = mongoose.model('Users',userSchema)