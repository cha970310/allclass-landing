import Header from "./header"
import Footer from "./footer"
export default function Layout({children}){

    return(
        
        <div className="bg-white">
        
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
        </div>


    )
}