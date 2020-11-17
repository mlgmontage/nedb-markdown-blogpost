const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/api/posts", require("./routes/posts"));

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
