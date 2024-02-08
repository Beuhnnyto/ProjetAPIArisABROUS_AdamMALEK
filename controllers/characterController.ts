import axios, { AxiosResponse } from 'axios';
import { Request, Response} from 'express';
import { MinimalCharacterData } from '../interfaces/minimalCharacterData';

export class CharacterController {
    private readonly API_URL: string = 'https://rickandmortyapi.com/api/character';

    public async getCharacters(req: Request, res: Response): Promise<void> {
        try {
            const response: AxiosResponse = await axios.get(this.API_URL);
            
            const characters: MinimalCharacterData[] = response.data.results.map((character: any) => {
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    gender: character.gender,
                    image: character.image
                }
            }
            );
            res.json(characters);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}
