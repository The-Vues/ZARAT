import express, { Router } from 'express';
import item  from '../controller/items';
import authenticate from '../middleware/authenticate';

const router: Router = express.Router();

router.get("/getAll", item.getAll)
router.get("/search/:gender", item.searchByGender)
// router.get("/gender/:gender", item.getByGender)

router.get("/cartItems/:id", item.getCartItems)

router.post("/add", authenticate, item.add)

export default router;