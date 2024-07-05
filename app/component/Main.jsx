import { Aside } from "./Aside"



export const Main = ({list,setList}) => {

    return (
        <>
            <div className="flex justify-around">
                <div className="">
                   <div className="w-[629px] h-[345px] px-[45%] py-[25%] my-10  bg-[#222124]">
                       {list.title}
                       {list.topic}
                   </div>
                </div>
                <div className="w-[439px] h-[479px] my-10  bg-[#222124]">
                    <Aside setList={setList} />
                </div>
            </div>
        </>
    )
}