import express from 'express'
import { SignUp } from '../controllers/auth.controller.js'
import { SignIn } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/SignUp',SignUp)
router.post('/SignIn',SignIn)
export default router;