/**
 * Server components accessing the dynamic path/slug path params.
 */
const UserDetail = ({params}: {params: {id: string}}) => {

  const { id } = params
  return (
    <>
      <div>User Profile :: {id}</div>
    </>
  )
}

export default UserDetail;
