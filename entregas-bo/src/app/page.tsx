
import Carousel from "./itemscarousel";
import NavBar from "./NavBar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      
      <div className="p-4">
        <h1 className="text-xl font-bold">Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
        
        <Carousel/>
        
      </div>
    </>
  );
}
