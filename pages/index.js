import Head from 'next/head'
import MasterPage from "component/website/master/MasterPage";
import HeaderCustom from "component/website/elemets/HeaderCustom";
import FooterCustom from "component/website/elemets/FooterCustom";

export default function Home() {
  return (
    <MasterPage pageName="Home" >
        <HeaderCustom></HeaderCustom>
        
        <main id={"pHome"} className="homePage">
          
        </main>
        <FooterCustom></FooterCustom>
    </MasterPage>
   
  )
}
