import React from 'react'
import backgroundStyle from "../assets/bgLanding.jpg";

const Detail = () => {
    return (
        <>
            <div
                className="h-screen bg-cover font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-[32px] text-center font-bold text-[#EE333D] mt-9">
                        ABSENSI RAPAT KE-1
                    </h1>
                    <div className="bg-white backdrop-blur-lg bg-opacity-30 px-10 py-2 border-[1px] border-white rounded-xl mt-5">
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
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[1px] border-white rounded-xl mt-10">
                        <div className="">
                            <h1 className="font-bold text-white text-[20px] py-2">
                                NO.
                            </h1>
                            <h1 className="text-white text-[20px] py-2">1.</h1>
                            <h1 className="text-white text-[20px] py-2">2.</h1>
                            <h1 className="text-white text-[20px] py-2">3.</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px] py-2">
                                NAMA
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Firza Aurellia Iskandar
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Rafie R. Al Aziz Zein
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Akbar Fikri Abdillah
                            </h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px] py-2">
                                ROLE
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Staf Muda
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Staf Muda
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                Staf Muda
                            </h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px] py-2">
                                STATUS
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                HADIR
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                HADIR
                            </h1>
                            <h1 className="text-white text-[20px] py-2">
                                HADIR
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
