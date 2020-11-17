const { Router } = require("express");
const router = Router();
const DB = require("../connection");

router.get("/", async (req, res) => {
  const data = await DB.find({});
  res.status(200).json(data);
});

router.post("/create", async (req, res) => {
  const text = req.body.text;
  if (text.trim() == "")
    return res.status(400).json({ message: "Body is empty" });
  const inserted = await DB.insert({
    text,
    created_at: new Date().toISOString(),
    updated_at: null,
  });
  res.status(200).json({
    message: "Successfully added",
  });
});

router.put("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const text = req.body.text;
  const updated = await DB.update(
    { _id },
    { text, updated_at: new Date().toISOString() },
    { multi: true }
  );
  res.json({
    message: "Successfully updated",
  });
});

router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  const deleted = await DB.remove({ _id });
  res.status(200).json({
    message: "Successfully deleted",
  });
});

module.exports = router;
