import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-5 px-10 py-5">
      <h1 className="text-4xl font-bold text-purple-600">OMS</h1>
      <nav className="flex gap-2 justify-center items-center">
        <Link href={"/"} className="navlink">
          Home
        </Link>
        <Link href={"/dashboard"} className="navlink">
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
