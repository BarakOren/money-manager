const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const port = process.env.PORT || 5000
require("dotenv").config({path: "./config.env"})
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const username = process.env.USRNME
const password = process.env.PSWD
const dbURI = `mongodb+srv://${username}:${password}@cluster0.hrnyple.mongodb.net/?retryWrites=true&w=majority`

const User = require('./models/user')

app.use(cors());
app.use(express.json())

mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true})
.then((res) => {
  app.listen(port, () => console.log("Server Is :ive"))
})

app.post('/api/register', async (req, res) => {
	try {
    const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})


	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
        id: user.id
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })
		return res.json({ status: 'ok', quote: user })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/addExpense', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const id = decoded.id
		const user = await User.findOne({ id: id })

		// console.log(`${req.body.type.toLowerCase()}s`, req.body.category, req.body.amount )
    	const type = `${req.body.type.toLowerCase()}s`
		await User.updateOne(
      		{"$push":{[type]: {category: req.body.category, amount: req.body.amount}}}
		)

		return res.json({ status: "ok", user: user})
  } catch (e) {
    console.log(e)
    res.json({ status: 'error', error: 'invalid token' })
  }
  
})



app.post('/api/clearExpenses', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const id = decoded.id
		const user = await User.findOne({ id: id })

    await user.updateOne(
      {$set:{'expenses':[]}}
		)

    return res.json({ status: "ok", info: user})
  } catch (e) {
    console.log(e)
    res.json({ status: 'error', error: 'invalid token' })
  }
  
})