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
                </div>

                <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl">
                    <div className="">
                        <h1 className="font-bold text-white text-[20px]">
                            NO.
                        </h1>
                        <h1 className="text-white text-[20px] text-center mt-5">
                            1.
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-white text-[20px] text-center">
                            RAPAT KE
                        </h1>
                        <h1 className="text-white text-[20px] text-center mt-5">
                            1
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-white text-[20px] text-center">
                            TANGGAL
                        </h1>
                        <h1 className="text-white text-[20px] text-center mt-5">
                            20 Februari 2023
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-white text-[20px] text-center">
                            TEMPAT
                        </h1>
                        <h1 className="text-white text-[20px] text-center mt-5">
                            tes
                        </h1>
                    </div>
                    <div className="flex items-center">
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
        </>
    );
};

export default Beranda;
