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
                    <h1 className="text-center text-[32px] font-bold text-primary">
                        REKAP ABSENSI PIT
                    </h1>
                <div className=" bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-10">
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
                                <h1 className="text-white text-[20px] mt-2 ">
                                    <button
                                        className="bg-primary border-none rounded-full px-1 py-1 items-center active:bg-red-600 hover:bg-red-500"
                                        onClick={() =>
                                            (window.location.href =
                                                "http://127.0.0.1:5173/Detail")
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </button>
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
