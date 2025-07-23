import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="px-10 mx-auto py-5">{children}</div>
      <Footer />
    </>
  );
}
