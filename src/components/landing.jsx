import React, { useEffect, useState } from 'react';
import Container from './container';
import { GoSearch } from "react-icons/go";
import axios from 'axios';
import Loader from './loader';

const Landing = () => {
    const [info, setInfo] = useState("");
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const api_key = '79b732d3ed04532e8fe96f5b160113b9';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`;

    const weatherInfo = async () => {
        try {
            setLoading(true);
            const response = await axios.get(api);
            const res = response.data;
            setInfo(res);
            const { humidity, pressure, temp } = res.main;
            const { description } = res.weather[0];
            const { name } = res;
            const { speed: Windspeed } = res.wind;
            const wholeInfo = {
                humidity,
                pressure,
                temp,
                description,
                name,
                Windspeed
            };
            setInfo(wholeInfo);
        } catch (err) {
            console.log("error  :  ", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (info !== "") {
            setLoading(false); // Hide Loader when info is not empty
        }
    }, [info]);

    return (
        <div className='bg-[#0F0F0F] h-screen w-full flex flex-col justify-around items-center'>
            {loading && <Loader />} {/* Show Loader component if loading is true */}
            <div className='w-1/5  border-[1px] border-zinc-100 bg-zinc-100 rounded flex items-center justify-evenly'>
                <input type="search" className='p-3 w-full outline-none' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className=' w-fit h-full px-4 flex justify-center items-center ' onClick={weatherInfo}>
                    <GoSearch className=' text-2xl' />
                </button>
            </div>
            <Container info={info} />
        </div>
    );
};

export default Landing;
