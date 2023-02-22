import { Router } from "express";
import { deleteQuestion, deleteResult, getQestion, getResult, postQuestion, postResult } from "../controllers/controller.js";
const router = Router()

router.get('/questions',getQestion)

router.post('/questions',postQuestion)

router.delete('/questions',deleteQuestion)


router.get('/results',getResult)

router.post('/results',postResult)

router.delete('/results',deleteResult)
export default router