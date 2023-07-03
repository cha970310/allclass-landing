
import Link from "next/link";
import Image from "next/image";
import logo_small from "../public/images/allclass_logo.jpg"

export default function Header(){
    return(
        
  
      <div className="box">
      <div className="image-wrapper">
        <Image className="image" alt="image" src={logo_small}/>
        
      </div>
    </div>
        
    );
}