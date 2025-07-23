import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 items-center justify-center flex-col py-10">
      <Link href={"/dashboard"}>View Shop Owner Dashboard</Link>
      <Link href={"/create-order"}>Create an Order</Link>
    </div>
  );
}
