import { useState } from "react";
import lock from "../assets/lock.png"
import Image from "next/image";

export const Aside=({setList,list})=>{
    const [bool,setBool]=useState(false);
    const [id,setId]=useState(0)
    const courseList=[
       { 
        title:"01. Course 1",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },
    { 
        title:"02. Course 2",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"03. Course 3",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"04. Course 4",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"05. Course 5",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"06. Course 6",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"07. Course 7",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },

    ]
    
    if(list.title===""){
        return    setList({title:"01. Course1",topic:"Topic 1"})
        }
    

    return(
        <>
        <div className="bg-[#222124] m-6"> 
            <ul>
            {
                courseList.map((e,i)=>{
             return <>
             <li key={i}>
             <button onClick={()=>{
               return setBool(!bool),setId(i)

             }} className="flex">
                    {i>2 && <Image src={lock} width="2px" heigh="1px" className="w-[10px] my-1 mx-2"/>}
                      {e.title}
                </button></li>

             {i===id &&
             <ul className={(bool&&i<3)?"mx-14":"hidden"}>
                <li>
                  <button onClick={()=>setList({title:e.title,topic:e.course1})}>  {e.course1}</button><br/>
                  <button onClick={()=>setList({title:e.title,topic:e.course2})}> {e.course2}</button><br/>
                   <button onClick={()=>setList({title:e.title,topic:e.course3})}> {e.course3}</button><br/>
                </li>
                </ul>
                }
                </>
                })
            }
            </ul>
        </div>
        </>
    )
}