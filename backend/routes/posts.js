const { Router } = require("express");
const router = Router();
const DB = require("../connection");

// get all posts
router.get("/", async (req, res) => {
  const data = await DB.find({});
  res.json(data);
});

// create post
router.post("/create", async (req, res) => {
  const text = req.body.text;
  const inserted = await DB.insert({ text });
  res.json({
    message: "Successfully added",
    inserted,
  });
});

// update post
router.put("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const text = req.body.text;
  const updated = await DB.update({ _id }, { text }, { multi: true });
  res.json({
    message: "Successfully updated",
    numberUpdated: updated,
  });
});

router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  const deleted = await DB.remove({ _id });
  res.json({
    message: "Successfully deleted",
    deleted,
  });
});

module.exports = router;
