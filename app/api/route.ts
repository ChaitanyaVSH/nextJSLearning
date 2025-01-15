import books, { Book } from "./database"

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

export async function POST(request: Request) {
    const book: Book = await request.json()
    console.log("chaitanya", request);
    books.push(book)

    return Response.json(books)
}
