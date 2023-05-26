import express, { Router } from 'express';
import User from '../controller/user';

const router: Router = express.Router();

router.get("/refresh/:id", User.refreshUser)
router.get("/getAll", User.getAll)

router.post("/signup", User.signup)
router.post("/login",User.login)


export default router;