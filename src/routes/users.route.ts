import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const usersRoute = Router()

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Vitor' }]
    res.status(StatusCodes.OK).json({ users })
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({ uuid })
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUSer = req.body
    res.status(StatusCodes.CREATED).send(newUSer)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const modifiedUser = req.body

    modifiedUser.uuid = uuid
    res.status(StatusCodes.OK).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.sendStatus(StatusCodes.OK)
})

export default usersRoute
