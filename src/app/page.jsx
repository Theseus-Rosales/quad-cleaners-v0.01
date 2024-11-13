import Image from "next/image";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

export default function Home() {
  return (
    <div className="">
      <h1>MainPage</h1>
      <Navbar />
      <Footer />
    </div>
  );
}