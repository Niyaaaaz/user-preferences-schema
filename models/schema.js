const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "fashion", "home", "books"],
    },
    price : {
        type : Number,
        required : true,
        min : 1
    },
    inStock : {
        type : Boolean,
        default : true,
    },
    releaseDate : {
        type : Date,
        required : false
    },
    reviewerName : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        min : 1,
        max : 5
    },
    comment : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',   
    required: true
  },

})
