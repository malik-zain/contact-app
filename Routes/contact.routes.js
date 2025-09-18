import express from "express";
import { home, addContact,postAddContact,updateContact, postUpdateContact, showContact,deleteContact } from "../controller/contact.controller.js";


const router = express.Router();

// Routes

router.get("/", home);

router.get("/show-contact/:id", showContact);

router.get("/add-contact", addContact);

router.post("/add-contact", postAddContact);

router.get("/update-contact/:id", updateContact);

router.post("/update-contact/:id", postUpdateContact);

router.get("/delete-contact/:id", deleteContact);

export default router;