import {Request, Response} from "express"
import {prisma} from "@repo/db"
import { CreateContentSchema } from "@repo/common"
import { AsyncHandler } from "../utils/AsyncHandler"
import { ApiError } from "../utils/ApiError"
import { ApiResponse } from "../utils/ApiResponse"

export const addContent = AsyncHandler(async(req: Request, res: Response) => {
    const parseData = CreateContentSchema.safeParse(req.body);

    if(!parseData.success) {
        throw new ApiError(400, "Validation Error", parseData.error.issues)
    }

    const {link, type, title, tags} = parseData.data;

    const content = await prisma.content.create({
        data: {
            link,
            type,
            title,
            userId: Number(req.userId),
            tags: {
                connectOrCreate : tags.map((tag) => ({
                    where: {title: tag},
                    create: {title: tag}
                }))
            }
        },
        include : {
            tags: true,
        }
    })

    return res.status(201).json(
        new ApiResponse(201, content, "Content added successfully")
    )
})

export const getContent =  AsyncHandler(async(req: Request, res: Response) => {
    const content = await prisma.content.findMany({
        where : {
            userId: Number(req.userId)
        }, 
        include : {
            tags: true
        }
    })

    return res.status(200).json(
        new ApiResponse(200, content, "User content fetched successfully")
    )
})

export const deleteContent = AsyncHandler(async(req:Request, res: Response) => {
    const contentId = Number(req.body.contentId)

    if(!contentId) {
        throw new ApiError(400, "Content ID is required")
    }

    const result = await prisma.content.deleteMany({
        where: {
            id: contentId,
            userId: Number(req.userId)
        }
    })

    if(result.count === 0) {
        throw new ApiError(404, "Content not found or unauthorized")
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Content deleted successfully")
    )
})