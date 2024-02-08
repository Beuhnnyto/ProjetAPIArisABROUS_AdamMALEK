import { NextFunction, Request, Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response, 
    next: NextFunction){
        console.log(err.stack);
        res.status(500).json({error : "Une erreur inatetendue s'est produite"})
}
    