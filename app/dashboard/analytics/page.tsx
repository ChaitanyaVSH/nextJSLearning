import Link from "next/link";

const Analytics = () => {
    return (
      <>
      <div>List of Analytics:</div>
      <ul>
        <li><Link href={"/dashboard/analytics/1"}>Analytics 1</Link></li>
        <li><Link href={"/dashboard/analytics/2"}>Analytics 2</Link></li>
        <li><Link href={"/dashboard/analytics/3"}>Analytics 3</Link></li>
      </ul>
    </>
    )
}

export default Analytics;
