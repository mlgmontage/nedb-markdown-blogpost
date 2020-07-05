const express = require("express");
const router = express.Router();
const datastore = require("nedb-promise");
const DB = datastore({
  filename: "../db/database.json",
  autoload: true,
});

// get all posts
router.get("/", async (req, res) => {
  const data = await DB.find({});
  res.json(data);
});

// get individual post
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await DB.findOne({ _id });
  res.json(data);
});

// insert post
router.post("/insert", async (req, res) => {
  const text = req.body.text;
  const inserted = await DB.insert({ text });
  res.json({
    message: "Successfully added",
    inserted,
  });
});

// update post
router.post("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const text = req.body.text;
  const updated = await DB.update({ _id }, { text }, { multi: true });
  res.json({
    message: "Successfully updated",
    numberUpdated: updated,
  });
});

router.post("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  const deleted = await DB.remove({ _id });
  res.json({
    message: "Successfully deleted",
    deleted,
  });
});

module.exports = router;
