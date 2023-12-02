import backgroundStyle from "../assets/bgLanding.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [users, setUsers] = useState([]);
    const [rapat, setRapat] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const getUsers = async (idRapat) => {
        const api = `https://api-website-presensi-pit.vercel.app/absensi/${idRapat}`;
        console.log(api);
        try {
            let response = await axios.get(api);
            setUsers(response.data.data.absensi);
            setRapat(response.data.data.rapat);
            console.log(response.data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers(params.id);
    }, []);

    return (
        <>
            <div
                className="bg-cover flex items-center font-poppins bg-fixed"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10 my-5">
                    <h1 className="text-[32px] text-center font-bold text-[#EE333D] mt-9 animate-fade animate-once animate-duration-500 animate-ease-in-out">
                        ABSENSI RAPAT KE-1
                    </h1>
                    <div className="bg-white backdrop-blur-lg bg-opacity-30 px-10 py-2  border-[1px] border-white rounded-xl mt-10 animate-fade animate-once animate-duration-500 animate-ease-in-out">
                        <div className="w-full">
                            {loading ? (
                                <p className="text-white text-center text-xl font-bold">
                                    <div className="mt-5">
                                        Katanya kalo udah gede haruss?? bener
                                        sabarr ges
                                    </div>
                                    <span className="loading loading-dots loading-lg mt-3"></span>
                                </p>
                            ) : (
                                <p>
                                    <div className="my-6">
                                        <h1 className="font-bold text-white text-[20px]">
                                            TEMPAT
                                        </h1>
                                        <h1 className="text-white text-[18px] my-2">
                                            {rapat.tempat}
                                        </h1>
                                    </div>
                                    <div className="my-6">
                                        <h1 className="font-bold text-white text-[20px]">
                                            TANGGAL
                                        </h1>
                                        <h1 className="text-white text-[18px] my-2">
                                            {rapat.tanggal}
                                        </h1>
                                    </div>
                                    <div className="my-6">
                                        <h1 className="font-bold text-white text-[20px] my-2">
                                            LINK NOTULENSI
                                        </h1>
                                        <a className="text-[18px] my-2 text-white">
                                            {rapat.link}
                                        </a>
                                    </div>
                                </p>
                            )}{" "}
                        </div>
                    </div>
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[1px] border-white rounded-xl mt-10 animate-fade animate-once animate-duration-500 animate-ease-in-out overflow-auto h-[500px]">
                        <div className="w-full ">
                            {loading ? (
                                <p className="text-white text-center text-xl font-bold">
                                    <div className="mt-10">
                                        Bang udah bangg sabar yakk
                                    </div>
                                    <span className="loading loading-dots loading-lg mt-10"></span>
                                </p>
                            ) : (
                                <div className=" flex flex-col justify-between ">
                                    <div className="flex-row justify-between ">
                                        <div className="flex flex-row w-full justify-between mt-4">
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
                                                    className="flex flex-row w-full justify-between items-center content-center align-middle py-2 mt-3 mb-3"
                                                    key={index}
                                                >
                                                    <h1 className=" text-white text-[20px] basis-1/6 flex justify-center ">
                                                        {user.user_id}
                                                    </h1>
                                                    <h1 className=" text-white text-[20px] basis-1/4  flex justify-left text-center">
                                                        {user.nama}
                                                    </h1>
                                                    <h1 className=" text-white text-[20px] basis-1/4 flex justify-center">
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
