const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const PORT = process.env.PORT || 8000;

const app = express();


const corsOptions = {
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    headers: [
        "Origin",
        "X-Api-Key",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "Authorization",
    ],
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})