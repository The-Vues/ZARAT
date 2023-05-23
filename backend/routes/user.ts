import express, { Router } from 'express';
import User from '../controller/user';

const router: Router = express.Router();

router.get("/refresh/:id", User.refreshUser)
router.post("/signup", User.signup)



export default router;