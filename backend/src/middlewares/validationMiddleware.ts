// src/middlewares/validationMiddleware.ts
import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateUser = [
    check("name").isString().notEmpty(),
    check("login").isString().notEmpty(),
    check("password").isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
const validateTeam = [
    check("name").isString().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
const validateReview = [
    check("user_id").isInt().notEmpty(),
    check("team_id").isInt().notEmpty(),
    check("scores").isObject().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export { validateUser, validateTeam, validateReview };