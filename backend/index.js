import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import joinTrainingRoutes from './routes/joinTrainingRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


app.use(cors({
  origin: "https://fitness-trainerr-frontend.onrender.com/",
  credentials: true,
}));

app.use(express.json());


app.use('/api', joinTrainingRoutes);


app.get('/', (req, res) => {
  res.send('API is running ');
});

/* ================= SERVER ================= */
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

