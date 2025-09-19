import e from "express";
import Contact from "../models/contacts.models.js";
import mongoose from "mongoose";

//home
export const home = async (req, res) => {
  try {
    const { page = 1, limit = 4} = req.query;
    const contacts = await Contact.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const result = await Contact.paginate(
      {},
      { page: req.query.page || 1, limit: 4 }
    );
    console.log(contacts);
    res.render("home", {
      totalDocs: result.totalDocs,
      limit: result.limit,
      totalPages: result.totalPages,
      currentPage: result.page,
      Counter: result.pagingCounter,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      contacts: result.docs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching contacts");
  }
};

//show contact
export const showContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", { message: "Invalid Id" });
    return;
  }
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
      return;
    }
    res.render("show-contact", { contact });
  } catch (err) {
    res.render("500", { message: err });
  }
};

//add contact
export const addContact = (req, res) => {
  res.render("add-contact");
};

// post add contact
export const postAddContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.redirect("/");
  } catch (err) {
    res.render("500", { message: err });
  }
};

//update contact
export const updateContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!paramId) {
    res.render("404", { message: "Invalid Id" });
    return;
  }
  //try catch block
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
      return;
    }
    res.render("update-contact", { contact });
  } catch (err) {
    res.render("500", { message: err });
  }
};

// post update contact
export const postUpdateContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", { message: "Invalid Id" });
    return;
  }
  //try catch block
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
      return;
    }
    res.redirect("/");
  } catch (err) {
    res.render("500", { message: err });
  }
};

//delete contact
export const deleteContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", { message: "Invalid Id" });
    return;
  }
  //try catch block
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.render("404", { message: "Contact not found" });
      return;
    }
    // res.redirect("/", { contact });
    res.redirect("/");
  } catch (err) {
    res.render("500", { message: err });
  }
};
