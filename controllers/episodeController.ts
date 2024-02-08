import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { MinimalEpisodeData } from '../interfaces/minimalEpisodeData';


export class EpisodeController {
    private readonly API_URL: string = 'https://rickandmortyapi.com/api/episode';

    public async getEpisodes(req: Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(this.API_URL);
            
            const episodes: MinimalEpisodeData[] = response.data.results.map((episode: any) => {
                return {
                    id: episode.id,
                    name: episode.name,
                    air_date: episode.air_date,
                    episode: episode.episode
                }
            }
            );
            res.json(episodes);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}
