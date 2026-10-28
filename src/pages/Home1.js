import { BiSolidCoffee } from "react-icons/bi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { PiBusFill } from "react-icons/pi";

export function Home1(){
    return (
        <>
        <div className="container">
            <div className="row">
  
  
       <div className="col-4 mx-auto text-center"><BiSolidCoffee size={70}/></div>
       
  
       <div className="col-4"><LiaHamburgerSolid  size={70} /></div>
       
  
       <div className="col-4"><PiBusFill size={70} /></div>
            </div>
        </div>
        </>
    )
}

