const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routes/home"));
app.use("/posts", require("./routes/posts"));

app.listen(8000, () => console.log("running"));
