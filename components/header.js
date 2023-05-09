
import Link from "next/link";
import Image from "next/image";
import logo_small from "../public/images/logo_small.png"
import DarkModeToggleButton from "./dark-mode-toggle-button";
export default function Header(){
    return(
        <>
        <header className="text-gray-600 body-font border-b-2 border-b-allclass">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <Link href="/" legacyBehavior>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image src={logo_small}
      alt='logo'
      
      width={100}
      height={100}
      
      ></Image>
    </a>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
 {/* justify-center */}
        {/* <Link href="/" legacyBehavior>
        <a className="mr-5 hover:text-allclass">뉴스피드</a>
        </Link> */}
      
        <Link href="/projects" legacyBehavior>
        <a  className="mr-10 hover:text-allclass">About</a>
        </Link>
      
        <Link href='/notice' legacyBehavior>
        <a className="mr-10 hover:text-allclass">Notice</a>
        </Link>
      
        <Link href='/faq' legacyBehavior>
        <a className="mr-10 hover:text-allclass">FAQ</a>
        </Link>
        
    </nav>

    {/* <Link href='https://www.google.com/' legacyBehavior>
        <a className="mr-5 hover:text-allclass outline-allcalss btn-login">로그인</a>
        </Link>
        <Link href='https://www.google.com/' legacyBehavior>
        <a className="mr-5 hover:text-allclass outline-allcalss btn-signup">회원가입</a>
        </Link> */}
  {/* <DarkModeToggleButton/> */}
  </div>
</header>
        </>
    );
}