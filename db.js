import mongoose from "mongoose";

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DBNAME}`;

export async function connect() {
  try {
    console.log(dbUrl);
    await mongoose.connect(dbUrl, { maxPoolSize: 5, minPoolSize: 2 }); //connect to mongodb
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

//export default { connect };