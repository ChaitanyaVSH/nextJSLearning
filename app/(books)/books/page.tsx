import { Book } from "@/app/api/database";

/**
 * Server component that fetches data from the self hosted API by this app.
 * @returns
 */
const page = async () => {
    const response = await fetch("http://localhost:3000/api");

    if(!response.ok) throw new Error("Data not available");

    const { books } = await response.json();

    return (
      <>
        <h3>List of books</h3>
        {books.map((book: Book) => (
          <div
            key={book.title}
            className="bg-white shadow-md rounded-lg p-4 mb-2"
            >
            <h3 className="text-lg font-bold mb-2">Title: {book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Rating: {book.rating}*</p>
          </div>
        ))}
      </>
    )
}

export default page;
