import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { MinimalLocationData } from '../interfaces/minimalLocation';

/**
 * @swagger
 * tags:
  - name: Location
    description: Locations de la serie
 */
export class LocationController {
    private readonly API_URL: string = 'https://rickandmortyapi.com/api/location';


    /**
     * @swagger
     * path:
     * /Location:
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



  

    public async getLocationByID(req: Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(`${this.API_URL}/${req.params.id}`);
            
            const location: MinimalLocationData = {
                id: response.data.id,
                name: response.data.name,
                type: response.data.type,
                dimension: response.data.dimension
            }
            res.json(location);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}
