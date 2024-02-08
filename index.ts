import express, { Express, Request, Response , Application, NextFunction } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { CharacterController } from './controllers/characterController';
// import cors from 'cors';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
import { errorHandler } from './midlewares/errorHandler';




//For cors
const app: Application = express();
// app.use(cors());




//For env File 
dotenv.config();
const port = process.env.PORT;


const characterController = new CharacterController();


app.get('/characters', async (req: Request, res: Response, next: NextFunction) => {
    await characterController.getCharacters(req, res, next);
    
}
);

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

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});