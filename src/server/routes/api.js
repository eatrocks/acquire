import express from 'express';
import cors from 'cors';

export const router = express.Router();

router.get('/hotels', cors(), (req, res) => {
    res.send(['American', 'Continental', 'Festival', 'Imperial', 'Sackson', 'Tower', 'Worldwide' ]);
});

export default router;
