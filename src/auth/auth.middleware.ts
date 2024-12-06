import { Request, Response, NextFunction } from 'express';

// Define the hardcoded token for testing purposes
const HARDCODED_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMzNDc2MzI2LCJleHAiOjE3MzM0Nzk5MjZ9.COtQ-fT31zqYTQMAtKMUbDJV_uIf3gLvj_f4H1b3R48';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token is missing' });
    }

    if (token !== HARDCODED_TOKEN) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    // If token matches, proceed to the next middleware or route handler
    next();
};