import express, { Router } from 'express';
import item  from '../controller/items';

const router: Router = express.Router();

router.get("/getAll", item.getAll)
// router.get("/gender/:gender", item.getByGender)

// router.get("/cartItems/:id", item.getCartItems)

export default router;