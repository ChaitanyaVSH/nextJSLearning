import Link from "next/link";

const Users = () => {
  throw new Error("Custom error for Dashboards");
  return (
    <>
      <div>List of Users:</div>
      <ul>
        <li><Link href={"/dashboard/users/1"}>User 1</Link></li>
        <li><Link href={"/dashboard/users/2"}>User 2</Link></li>
        <li><Link href={"/dashboard/users/3"}>User 3</Link></li>
      </ul>
    </>
  )
}

export default Users;
