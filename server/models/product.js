const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 10000
    },
    price: {
        type: Number,
        maxlength: 255
    },
    shiping: {
        required: true,
        type: Boolean 
    },
    available: {
        required: true,
        type: Boolean
    },
    frets: {
        required: true,
        type: Number
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish: {
        type: Boolean,
        required: true
    },
    images: {
        type: Array,
        default: []
    },
    brand: {
        type: schema.Types.ObjectId,
        ref: "Brand"
    },
    wood: {
        type: schema.Types.ObjectId,
        ref: "Wood"
    }
}, {timestamps: true});

const Products = mongoose.model("Products", productSchema);

module.exports = {Products}