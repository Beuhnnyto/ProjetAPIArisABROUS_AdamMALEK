import express, { Express, Request, Response , Application, NextFunction } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { CharacterController } from './controllers/characterController';
import { EpisodeController } from './controllers/episodeController';
import { LocationController } from './controllers/locationController';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
import { errorHandler } from './midlewares/errorHandler';

const app: Application = express();

//For Swagger
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(errorHandler);

//For env File 
dotenv.config();
const port = process.env.PORT;


const characterController = new CharacterController();
const episodeController = new EpisodeController();
const locationController = new LocationController();


app.get('/characters', async (req: Request, res: Response) => {
    await characterController.getCharacters(req, res);
    
}
);

app.get('/characters/:id', async (req: Request, res: Response) => {
    await characterController.getCharacterByID(req, res);
    
}
);
app.get('/locations', async (req: Request, res: Response) => {
    await locationController.getLocations(req, res);
    
}
);

app.get('/locations/:id', async (req: Request, res: Response) => {
    await locationController.getLocationByID(req, res);
    
}
);

app.get('/episodes', async (req: Request, res: Response) => {
    await episodeController.getEpisodes(req, res);
    
}
);

app.get('/episodes/:id', async (req: Request, res: Response) => {
    await episodeController.getEpisodeByID(req, res);
    
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});