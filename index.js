const {Sandwich} = require("./model.js");
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/sandwiches', async function(req, res) {
	try {
		let sandwich = new Sandwich({bread: req.body.bread, layers: req.body.layers, protein: req.body.protein});
		await sandwich.save(); 
		res.status(200).send("Created");
	}

	catch (error) {
		console.log(error);
	}
})

app.get('/sandwiches', async function(req, res) {
	try {
		let data = await Sandwich.find();
		res.status(200).json(data);
	}

	catch (error) {console.log(error);}
})

app.get('/sandwiches/:id', async function(req, res) {
	let id = req.params.id;
	let sandwich = await Sandwich.findById(id).exec();
	res.status(200).json(sandwich);
})

app.put('/sandwiches/:id', async function(req, res) {
	try {
		let body = req.body;
		let id = req.params.id;
		await Sandwich.findByIdAndUpdate(id, body);
		res.status(200).send("updated");
	}
	
	catch (error) {
		res.status(404);
		console.log(error);
	}
})

app.delete('/sandwiches/:id', async function(req, res) {
	let id = req.params.id;
	await Sandwich.findByIdAndDelete(id);
	res.status(200).send("deleted");
})

app.listen(process.env.PORT || 8080);
