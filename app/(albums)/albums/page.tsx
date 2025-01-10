/**
 * Server component that fetches data.
 * @returns
 */
const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if(!response.ok) throw new Error("Data not available");

  const albums = await response.json();
  return (
    <>
      <h3>List of albums</h3>
      {albums.map((album: {id: number, title: string}) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 mb-2"
          >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
        </div>
      ))}
    </>
  )
}

export default page
