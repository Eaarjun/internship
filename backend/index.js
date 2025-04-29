const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const BlogModel = require("./schemas/BlogModel");
const EmailModel = require("./schemas/EmailModel");
const ContactModel = require("./schemas/ContactModel"); // ✅ Use only this for contact + about

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://akashgames26:p95WvWqaznxw7fqw@cluster0.dw1qll0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// server start
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// homepage data (blogs)
app.get("/", (req, res) => {
  BlogModel.find({}).then((docs) => res.send(docs));
});

app.post("/", (req, res) => {
  new BlogModel(req.body).save();
  res.send();
});

// emails
app.get("/email", (req, res) => {
  EmailModel.find({}).then((docs) => res.send(docs));
});

app.post("/email", (req, res) => {
  new EmailModel(req.body).save();
  res.send();
});

// continent list (sample data)
const ContinentSchema = new mongoose.Schema({
  continent: String,
  countrieslist: Array,
});
const Continent = mongoose.model("Continent", ContinentSchema, "continents");

app.get("/continents", async (req, res) => {
  try {
    const data = await Continent.find();
    res.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch continents" });
  }
});

// ✅ CONTACT FORM
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
      source: "contact",
    });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Form submission failed" });
  }
});

app.get("/contact", async (req, res) => {
  try {
    const contactMessages = await ContactModel.find({ source: "contact" }).sort(
      { createdAt: -1 }
    );
    res.json(contactMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contact messages" });
  }
});

// ✅ ABOUT FORM
app.post("/about", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newAbout = new ContactModel({
      name,
      email,
      subject,
      message,
      source: "about",
    });
    await newAbout.save();
    res.status(201).json({ message: "About form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Form submission failed" });
  }
});

app.get("/about", async (req, res) => {
  try {
    const aboutMessages = await ContactModel.find({ source: "about" }).sort({
      createdAt: -1,
    });
    res.json(aboutMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching about messages" });
  }
});
