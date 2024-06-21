const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(`mongodb+srv://commanderdarokahn:${process.env.MONGODBPASS}@cluster0.ujubbm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

let sandwichSchema = new mongoose.Schema({
	bread: {
		type: String,
		required: [true, "Sandwich must have a bread or a wrap"]
	},
	layers: {
		type: Number,
		required: [true, "Sandwich must have specified layers"]
	},
	protein: {
		type: String,
		required: false
	}
	
});

const Sandwich = mongoose.model("Sandwich", sandwichSchema);


module.exports = {
	Sandwich: Sandwich
}
