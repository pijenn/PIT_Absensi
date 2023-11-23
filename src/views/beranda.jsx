import { Link } from "react-router-dom";
import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";

const Beranda = () => {
    return (
        <>
            <div
                className="h-screen bg-cover font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-center text-[32px] font-bold text-primary mt-12 animate-fade-down animate-once animate-duration-500 animate-ease-in-out">
                        REKAP ABSENSI PIT
                    </h1>
                    <div className=" bg-gray-400 blur(4px)  bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-10 animate-fade-up animate-once animate-duration-500 animate-ease-in-out">
                        <div className="">
                            <div className="flex-row flex justify-between">
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        NO.
                                    </h1>
                                    <h1 className="text-white text-[20px] text-center mt-2">
                                        1.
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        RAPAT KE
                                    </h1>
                                    <h1 className="text-white text-[20px] text-center mt-2">
                                        1
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        TANGGAL
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-2">
                                        23 Desember 2023
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        TEMPAT
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-2">
                                        Roketto
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        DETAIL
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-2 ml-4 ">
                                        <Link to="/Detail">
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
                                </div>
                            </div>
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
        </>
    );
};

export default Beranda;
