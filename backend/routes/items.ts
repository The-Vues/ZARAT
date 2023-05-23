import express, { Router } from 'express';
import item  from '../controller/items';

const router: Router = express.Router();


router.get("/gender/:gender", item.getByGender)

router.get("/searchWoman", item.searchWoman)
router.get("/searchMan", item.searchMan)
router.get("/searchKids", item.searchKids)

router.get("/cartItems/:id", item.getCartItems)

export default router;