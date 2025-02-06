import { users } from "../route";

export async function GET(request: Request, { params } : { params : { id : string}}){
    const { id } = await params; 
    const user = users.find(user=> user.id === parseInt(id))
    if(typeof user === 'undefined') return Response.json({message: `user ${id} doesn't exist`})
    return Response.json(user)
}