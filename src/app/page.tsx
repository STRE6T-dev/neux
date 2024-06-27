import Image from "next/image";
import homeImg from "public/home.jpg"


export default function Home() {
  return (
  
    <div>
        Home page
      <div className="absolute -z-10 inset-0">
      <Image 
        alt="home image"
        fill

        src={homeImg}
      />
      </div>
         
      </div>

      

     );
}
