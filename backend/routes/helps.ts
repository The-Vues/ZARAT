import express , {Router} from 'express';
import helps from '../controller/helps';

const router : Router = express.Router()
router.get("/", helps.getAll)
router.get("/gethelps", helps.searchHelp)
router.post("/", helps.add)

export default router