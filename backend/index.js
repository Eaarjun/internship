const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const BlogModel = require("./schemas/BlogModel");
const { log } = require("console");
const app = express();
const port = 3000;
const cors = require("cors");
const EmailModel = require("./schemas/EmailModel");
const ContactModel = require("./schemas/ContactModel");
const AboutModel = require("./schemas/AboutModel");
//middleware express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://akashgames26:p95WvWqaznxw7fqw@cluster0.dw1qll0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  BlogModel.find({}).then((docs) => res.send(docs));
});

app.post("/", (req, res) => {
  new BlogModel(req.body).save();
  res.send();
});

app.get("/email", (req, res) => {
  EmailModel.find({}).then((docs) => res.send(docs));
});

app.post("/email", (req, res) => {
  new EmailModel(req.body).save();
  res.send();
});

// Define schema and model
const ContinentSchema = new mongoose.Schema({
  continent: String,
  countrieslist: Array
});

const Continent = mongoose.model("Continent", ContinentSchema, "continents");

// Define API route
app.get("/continents", async (req, res) => {
  try {
    const data = await Continent.find();
    res.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch continents" });
  }
});



app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Form submission failed" });
  }
});


app.post("/about", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newAbout = new Contact({ name, email, subject, message });
    await newAbout.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Form submission failed" });
  }
});


app.get("/contact", async (req, res) => {
  try {
    const contactMessages = await Contact.find({ source: "contact" }).sort({
      createdAt: -1,
    });
    res.json(contactMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contact messages" });
  }
});


app.get("/about", async (req, res) => {
  try {
    const aboutMessages = await Contact.find({ source: "about" }).sort({
      createdAt: -1,
    });
    res.json(aboutMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching about messages" });
  }
});
