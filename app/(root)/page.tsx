import Hello from "../components/hello";

const page = () => {
  console.log("What am I ? -- SERVER/CLIENT ?");

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <h3 className="text-1xl">This is the very first beginning of the crash course.</h3>
      <Hello />
    </>
  )
}

export default page;
