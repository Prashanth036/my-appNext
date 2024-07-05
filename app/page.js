'use client'

import Image from "next/image";
import { Header } from "./component/Header";
import { Main } from "./component/Main";
import { useState } from "react";


export default function Home() {
  const [list,setList]=useState({
    title:"",
    topic:""
  })
  return (
   <>
   <div className=" bg-[#323233] w-[1280px] text-white">
    <div className="w-[1280px] h-[99px]"><Header /></div>
   <div className="w-full"> <Main list={list} setList={setList}/></div>
   </div>
   </>
  );
}
