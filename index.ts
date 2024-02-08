import express, { Express, Request, Response , Application } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT;


app.get('/characters', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/locations', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/location');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/episodes', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});