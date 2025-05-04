// const mongoose = require("mongoose");
const sequelize = require("./sequelize");

class DataBase {
  async connect() {
    // mongoose.connect("mongodb://localhost:27017/pion_db", {});

    // const db = mongoose.connection;
    // db.on("error", console.error.bind(console, "MongoDB connection error:"));
    // db.once("open", () => {
    //   console.log("Connected to MongoDB");
    // });

    await sequelize.sync();
    console.log("DB connected");
  }
}

module.exports = new DataBase();
