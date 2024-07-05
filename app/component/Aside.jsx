import { useState } from "react"

export const Aside=({setList})=>{
    const [bool,setBool]=useState(false);
    const courseList=[
       { 
        title:"Course 1",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },
    { 
        title:"Course 2",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"Course 3",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"Course 4",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"Course 5",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"Course 6",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },{ 
        title:"Course 7",
        course1:'Topic 1',
        course2:'Topic 2 ',
        course3:'Topic 3'
    },

    ]
    
    

    return(
        <>
        <div className="bg-[#222124]"> 
            <ul>
            {
                courseList.map((e,i)=>{
             return <>
             <li key={i}>
             <button onClick={()=>setBool(!bool)}>
                {e.title}
                </button></li>
             
             <ul className={bool?"":"hidden"}>
                <li>
                  <button onClick={()=>setList({title:e.title,topic:e.course1})}>  {e.course1}</button><br/>
                  <button onClick={()=>setList({title:e.title,topic:e.course1})}> {e.course2}</button><br/>
                   <button onClick={()=>setList({title:e.title,topic:e.course1})}> {e.course3}</button><br/>
                </li>
                </ul>
                
                </>
                })
            }
            </ul>
        </div>
        </>
    )
}