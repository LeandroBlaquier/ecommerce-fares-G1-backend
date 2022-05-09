import { Router } from "express";
import borrarpost from "../controllers/deleteCategory";
const router = Router();

const funcion = ()=> {
    router.delete('/category1', borrarpost);

}


router.use('/category1' , funcion)

export default router;