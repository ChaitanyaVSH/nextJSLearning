import books from "./database"

export async function GET() {
    return Response.json({
        books
    })
}


// BELOW alternate syntax also can be used for non network calls
// export const GET = () => {
//     return Response.json({
//         books
//     })
// }
