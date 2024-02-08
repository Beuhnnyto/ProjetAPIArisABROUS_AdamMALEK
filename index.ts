import express, { Express, Request, Response , Application } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { CharacterController } from './controllers/characterController';
import { EpisodeController } from './controllers/episodeController';
import { LocationController } from './controllers/locationController';
import { NextFunction } from 'connect';

//For env File 
dotenv.config();

const app: Application = express();
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

app.get('/episodes', async (req: Request, res: Response, next: NextFunction) => {
    await episodeController.getEpisodes(req, res, next);
    
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});