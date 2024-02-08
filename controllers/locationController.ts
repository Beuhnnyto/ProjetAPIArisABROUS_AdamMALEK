import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';
import { MinimalLocationData } from '../interfaces/minimalLocation';


export class LocationController {
    private readonly API_URL: string = 'https://rickandmortyapi.com/api/location';

    public async getLocations(req: Request, res: Response, next: NextFunction): Promise<void> {
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
