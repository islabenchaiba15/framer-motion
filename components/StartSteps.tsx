import React from 'react'
interface Props{
    feature:string
    index:number
}
const StartSteps = ({feature,index}:Props) => {
  return (
    <div>
        <div className="flex flex-row gap-6 ">
                <div className="w-[70px] h-[70px] rounded-2xl bg-[#323f5d] flex flex-none  items-center justify-center">
                    <p className="text-white font-bold text-[36px] ">{index}</p>
                </div>
                <div className="">
                    <p className="text-white max-w-[350px] flex-1">{feature}</p>
                </div>
        </div>
    </div>
  )
}

export default StartSteps