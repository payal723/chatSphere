import express, { urlencoded } from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import bcrypt  from "bcryptjs";
import cors from "cors";
import 'dotenv/config';
import connectToSocket from "./src/controllers/socketManager.js";
import userRoutes from "./src/routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" ,(process.env.PORT || 8080));
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/zoom";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

  app.use(cors());
  app.use(express.json({limit : "40kb"}));
  app.use(express.urlencoded({extended : true , limit : "40kb"}));
  app.use("/api/v1/users" , userRoutes);

  
server.listen(app.get("port") , () => {
    console.log("server is runuuing on 8000")

})