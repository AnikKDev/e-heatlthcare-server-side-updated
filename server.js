require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// database connection
mongoose.connect(process.env.ATLAS_URI, { dbName: "ehealthcare" }).then(() => {
  console.log("Mongoose is connected");
});

// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
