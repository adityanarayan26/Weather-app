import React from 'react'
import { WiDayCloudy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";


const Container = ({ info }) => {
    const tempink = (kel) => {
        return (kel - 273).toFixed(1)
    }

    const tempincel = tempink(info.temp);
    return (
        <>

            <div className='w-[60rem] h-[35rem] border-[2px] border-blue-600'>
                <div className='w-full h-1/3 bg-zinc-100 border-b-[1px] border-zinc-900 flex justify-center items-center  flex-col'>
                    <WiDayCloudy className='h-1/2 w-1/2 text-yellow-500' />
                    <h1 className='text-zinc-900 font-semibold text-2xl'>{info.name}</h1>
                </div>
                <div className='w-full h-1/3 bg-zinc-100 border-b-[1px] border-zinc-900 flex justify-evenly items-center '>
                    <div className='flex flex-col h-full w-full justify-center items-center'>

                        <WiHumidity className='h-1/3 w-1/3 text-zinc-900' />
                        <h1>{info.humidity}</h1>
                    </div>
                    <div className='flex flex-col h-full w-full justify-center items-center'>

                        <FaWind className='h-1/3 w-1/3 text-zinc-900' />
                        <h1>{info.Windspeed}</h1>
                    </div>
                    <div className='flex flex-col h-full w-full justify-center items-center'>

                        <CiTempHigh className='h-1/3 w-1/3 text-zinc-900' />
                        <h1>{tempincel}</h1>
                    </div>
                </div>

                <div className='w-full h-1/3 bg-zinc-100 flex  justify-center items-center'>
                    <h1 className='text-2xl text-blue-600'>Climate description : {info.description} </h1>
                </div>


            </div>
        </>

    )
}

export default Container
