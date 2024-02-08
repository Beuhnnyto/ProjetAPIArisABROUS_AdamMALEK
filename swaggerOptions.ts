import path from "path";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
            title: "projetAPI Rick and Morty",
            version: "1.0.0",
            description: "API pour le projet Rick and Morty",
            contact: {
                name: "Adam MALEK"
            }
        },
        servers: [
            {
                url: "http://localhost:8000",
                description: "Development server"
            }
        ]
    },
    apis: [path.join(__dirname, "./controllers/*.ts")]
};
