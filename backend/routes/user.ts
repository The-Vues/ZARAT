import express, { Router } from 'express';
import User from '../controller/user';
import authenticate from '../middleware/authenticate';

const router: Router = express.Router();

router.get("/refresh/:id", User.refreshUser)
router.get("/getAll", User.getAll)
router.get("/makeAdmin/:id", authenticate, User.makeAdmin)
router.get("/searchUsers", User.searchUsers)

router.post("/add", User.addToCart)

router.post("/signup", User.signup)
router.post("/login",User.login)

router.delete("/removeUser/:id", authenticate, User.removeUser)



export default router;