import express from 'express';
import cors from 'cors';
import TravelController from './travel/travel.controller';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
 
}));

app.use("/travels", TravelController);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})