import { Aside } from "./Aside"



export const Main = ({list,setList}) => {

    return (
        <>
            <div className="flex justify-around">
                <div className="">
                   <div className="w-[629px] h-[345px] px-[40%] py-[25%] my-10  bg-[#222124]">
                       <p className="text-[20px]">{list.title}</p>
                      <p className="mx-8 my-2"> {list.topic}</p>
                   </div>
                </div>
                <div className="w-[439px] h-[479px] my-10  bg-[#222124]">
                    <Aside setList={setList}  list={list}/>
                </div>
            </div>
        </>
    )
}