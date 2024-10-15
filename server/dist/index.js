import express from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
const app = express();
const PORT = process.env.PORT || 7000;
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: [process.env.CLIENT_APP_URL, "https://admin.socket.io"],
    },
    //adapter: createAdapter(redis),
});
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
//Routes 
app.use("/api", Routes);
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
