import { Link } from "react-router-dom";
import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Beranda = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get(
                "https://api-website-presensi-pit.vercel.app/rapat"
            );
            setUsers(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <div
                className="h-screen bg-cover font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-center text-[32px] font-bold text-primary mt-12 animate-fade animate-once animate-duration-500 animate-ease-in-out">
                        REKAP ABSENSI PIT
                    </h1>
                    <div className=" bg-gray-400 blur(4px)  bg-opacity-30 px-10 py-6 border-[2px] border-white rounded-xl mt-10 animate-fade animate-once animate-duration-500 animate-ease-in-out">
                        <div className="w-full">
                            <div className=" flex flex-col justify-between mt-3 ">
                                <div className="flex-row justify-between ">
                                    <div className="flex flex-row w-full justify-between">
                                        <h1 className="font-bold text-white text-[20px] basis-1/6 flex justify-center">
                                            RAPAT KE
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            TANGGAL
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            TEMPAT
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            DETAIL
                                        </h1>
                                    </div>

                                    {users.map((user, index) => {
                                        return (
                                            <div
                                                className="flex flex-row w-full justify-between items-center content-center align-middle mt-4"
                                                key={index}
                                            >
                                                <h1 className=" text-white text-[20px] basis-1/6 flex justify-center">
                                                    {user.ke}
                                                </h1>
                                                <h1 className=" text-white text-[20px] basis-1/4  flex justify-center">
                                                    {user.tanggal}
                                                </h1>
                                                <h1 className=" text-white text-[20px] basis-1/4 flex justify-center">
                                                    {user.tempat}
                                                </h1>
                                                <h1 className="text-white text-[20px] basis-1/4 flex justify-center ">
                                                    <h1 className="text-white text-[20px] mt-2 ml-4 ">
                                                        <Link
                                                            to={`/detail/${user.id}`}
                                                        >
                                                            <button className="bg-primary border-none rounded-full px-1 py-1 items-center active:bg-red-600 hover:bg-red-500">
                                                                <svg
                                                                    fill="#ffffff"
                                                                    width="25px"
                                                                    height="25px"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    stroke="#ffffff"
                                                                >
                                                                    <g
                                                                        id="SVGRepo_bgCarrier"
                                                                        stroke-width="0"
                                                                    />

                                                                    <g
                                                                        id="SVGRepo_tracerCarrier"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />

                                                                    <g id="SVGRepo_iconCarrier">
                                                                        {" "}
                                                                        <g data-name="Layer 2">
                                                                            {" "}
                                                                            <g data-name="arrow-ios-forward">
                                                                                {" "}
                                                                                <rect
                                                                                    width="24"
                                                                                    height="24"
                                                                                    transform="rotate(-90 12 12)"
                                                                                    opacity="0"
                                                                                />{" "}
                                                                                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />{" "}
                                                                            </g>{" "}
                                                                        </g>{" "}
                                                                    </g>
                                                                </svg>
                                                            </button>
                                                        </Link>
                                                    </h1>
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Beranda;
