import express, { Express, Request, Response , Application, NextFunction } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { CharacterController } from './controllers/characterController';
import { NextFunction } from 'connect';

//For env File 
dotenv.config();
const port = process.env.PORT;


const characterController = new CharacterController();
const episodeController = new EpisodeController();
const locationController = new LocationController();


app.get('/characters', async (req: Request, res: Response, next: NextFunction) => {
    await characterController.getCharacters(req, res, next);
    
}
);

app.get('/locations', async (req: Request, res: Response, next: NextFunction) => {
    await locationController.getLocations(req, res, next);
    
}
);

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