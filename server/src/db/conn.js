
import mongoose from "mongoose";

const url =
"mongodb+srv://arnavgupta295:8NAm2Z5uK7TZ40IM@cluster0.9e3f4pu.mongodb.net/hack_this_fall?retryWrites=true&w=majority"

mongoose
  .connect(url, {
    connectTimeoutMS: 6000000, 
  })
  .then(() => console.log("Connection successful"))
  .catch((err) => console.error("Connection failed:", err));

export default mongoose.connection;

