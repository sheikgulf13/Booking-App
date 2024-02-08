import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoute from './routes/users';
import authRoute from './routes/auth';
import cookieParser from 'cookie-parser';
import path from 'path';
 
mongoose.connect(process.env.MONGO_URI as string)

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(7000, () => {
    console.log("server listening on port 7000");
});