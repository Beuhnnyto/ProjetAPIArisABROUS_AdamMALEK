import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { MinimalLocationData } from '../interfaces/minimalLocation';

/**
 * @swagger
 * tags:
 * name:Location
 * description:Lieux de la serie
 */

export class LocationController {
    private readonly API_URL: string = 'https://rickandmortyapi.com/api/location';
/**
 * @swagger
 * /Location/:
 * get:
 *      summary: obtient la list des lieux
 *      description: recupere la liste des lieux vue dans la serie 
 *      tags:[Location]
 *      parameters
 *        - in: path
 *          name:  
 */
    public async getLocations(req: Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(this.API_URL);
            
            const locations: MinimalLocationData[] = response.data.results.map((location: any) => {
                return {
                    id: location.id,
                    name: location.name,
                    type: location.type,
                    dimension: location.dimension
                }
            }
            );
            res.json(locations);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}
