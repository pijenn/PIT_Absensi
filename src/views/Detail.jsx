
import backgroundStyle from "../assets/bgLanding.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Detail = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get(
                "https://api-website-presensi-pit.vercel.app/absensi/28"
            );
           setUsers(response.data.data.absensi);
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
                className="h-screen bg-cover font-poppins bg-fixed overflow-y-auto"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-[32px] text-center font-bold text-[#EE333D] mt-9 animate-fade-down animate-once animate-duration-500 animate-ease-in-out">
                        ABSENSI RAPAT KE-1
                    </h1>
                    <div className="bg-white backdrop-blur-lg bg-opacity-30 px-10 py-2 border-[1px] border-white rounded-xl mt-5 animate-fade-left animate-once animate-duration-500 animate-ease-in-out">
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">
                                TEMPAT
                            </h1>
                            <h1 className="text-white text-[18px]">
                                Roketto Coffee & Co
                            </h1>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">
                                TANGGAL
                            </h1>
                            <h1 className="text-white text-[18px]">
                                20 Februari 2023
                            </h1>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">
                                LINK NOTULENSI
                            </h1>
                            <a
                                className="link link-primary text-[18px]"
                                href="https://docs.google.com/d/1PwNo0EgDPOHdOG7xHgKTF9-/edit?usp=sharing"
                            >
                                https://docs.google.com/d/1PwNo0EgDPOHdOG7xHgKTF9-/edit?usp=sharing
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[1px] border-white rounded-xl mt-10 animate-fade-right animate-once animate-duration-500 animate-ease-in-out">
                        <div className="w-full ">
                            <div className=" flex flex-col justify-between ">
                                <div className="flex-row justify-between ">
                                    <div className="flex flex-row w-full justify-between">
                                        <h1 className="font-bold text-white text-[20px] basis-1/6 flex justify-center">
                                            NO.
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            NAMA
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            ROLE
                                        </h1>
                                        <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                            STATUS
                                        </h1>
                                    </div>

                                    {users.map((user, index) => {
                                        return (
                                            <div
                                                className="flex flex-row w-full justify-between items-center content-center align-middle py-2"
                                                key={index}
                                            >
                                                <h1 className="font-bold text-white text-[20px] basis-1/6 flex justify-center">
                                                    {user.user_id}
                                                </h1>
                                                <h1 className="font-bold text-white text-[20px] basis-1/4  flex justify-center text-center">
                                                    {user.nama}
                                                </h1>
                                                <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                                    {user.role}
                                                </h1>
                                                <h1 className="text-white text-[20px] basis-1/4 flex justify-center ">
                                                    {user.status}
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="">
                                <div className="flex justify-center mt-10 content-center">
                                    <button className="bg-transparent border-[2px] border-r-0 border-white text-white text-[20px] px-3 py-2 rounded-l-full hover:bg-gray-500 active:bg-gray-400">
                                        Previous
                                    </button>
                                    <button className="bg-primary border-y-2  text-white text-[20px] font-bold px-4 py-2  active:bg-red-600">
                                        1
                                    </button>
                                    <button className="bg-[#151128] border-y-2  text-white text-[20px] font-bold px-4 py-2  active:bg-primary">
                                        2
                                    </button>
                                    <button className="bg-transparent border-[2px] border-l-0 rounded-r-full text-white text-[20px] px-3 py-2 hover:bg-gray-500 active:bg-gray-400">
                                        Next
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
