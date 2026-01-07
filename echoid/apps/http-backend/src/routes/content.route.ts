import {Router} from "express"
import { addContent, getContent, deleteContent } from "../controllers/content.controller"
import { userMiddleware } from "../middlewares/auth.middleware";

const contentRouter = Router();

contentRouter.use(userMiddleware)

contentRouter.route("/")
        .post(addContent)
        .get(getContent)
        .delete(deleteContent)

export default contentRouter

