import express from 'express';
import { getJobListings } from '../controllers/jobController';

const router = express.Router();

router.get('/jobs', getJobListings);

export default router;
