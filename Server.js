//Importing packages
import express from "express";

//Server setup
const app = express();
const port = process.env.PORT || 3001;

//Server all listener
app.all("/", (req, res) => {
  res.send("This is the discord bot");
});

//Server start function
const start = () => {
  app.listen(port, () => {
    console.log("Now running on port " + port);
  });
};

//Export Start function
export default start;
