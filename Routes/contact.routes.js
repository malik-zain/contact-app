import express from "express";
import Contact from "../models/contacts.models.js";

const router = express.Router();

// Routes

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    res.render("home", { contacts });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching contacts");
  }
});

router.get("/show-contact/:id",async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact", { contact });
});

router.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

router.post("/add-contact", async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.redirect("/");

});

router.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
});

router.post("/update-contact/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

router.get("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

export default router;