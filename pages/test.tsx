import Head from "next/head";
// import styles from "../styles/Home.module.css";
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import { ProductCard } from "src/component/ProductCard/ProductCard";
import Carousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";
import PrimaryButton from "src/component/website/primary-button/PrimaryButton";
export default function Home() {
  return (

    <MasterPage pageName="Trang chủ">

      <main id="pHome" className="pHome">
       
          <Carousel></Carousel>

        <div>
          <PrimaryButton text="xem tất cả các dòng xe" />
        </div>

         
      </main>
    
    </MasterPage>
     
  );
}
