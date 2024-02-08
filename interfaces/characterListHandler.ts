import express from 'express';
import axios from 'axios';
const app = express();

app.get('/api/characters', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/characters');
        const data = response.data;

        const processedData = data.map((item: any) => {
            return {
                id: item.id,
                name: item.name.toUpperCase(),
                // Add more properties as needed
            };
        });

        console.log(processedData);

        res.json(processedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
