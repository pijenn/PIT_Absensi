import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";
import { Link } from "react-router-dom";
import redBall from "../assets/redBall.png";

const Home = () => {
    return (
        <>
            <div
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-3/12 content-end flex justify-end">
                    <img
                        src={redBall}
                        alt=""
                        className="w-[150px] mr-10 flex animate-fade-right animate-once animate-duration-500 animate-delay-200 animate-ease-in animate-alternate animate-fill-both blur-sm"
                    />
                </div>
                <div className="w-6/12">
                    <div className="w-fit mx-auto text-white font-bold text-[48px] animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                        Selamat Datang di
                    </div>
                    <div className="w-fit mx-auto text-primary text-[100px] font-bold mt-1 shadow-lg animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                        PRESENSI FOR PIT
                    </div>
                    <div className="w-fit mx-auto text-white mt-4 text-[26px] text-center animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                        Website absensi yang dikhususkan untuk Kebiroan
                        Pengembangan Informasi dan Teknologi Badan Eksekutif
                        Mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya.
                        Jangan lupa absen!!
                    </div>

                    <div className="w-fit mx-auto mt-8">
                        <Link to="/Login">
                            <button className="bg-red-500 hover:bg-red-400 text-white px-20 py-2 rounded-full active:bg-red-700 text-[24px] duration-300 animate-fade-up animate-once animate-duration-500 animate-ease-linear font-bold">
                                Mulai
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-3/12 mt-20">
                    <div className="ml-12">
                        {" "}
                        <img
                            src={redBall}
                            alt=""
                            className="w-[80px] mt-0 ml-20 animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-in animate-alternate animate-fill-both blur-sm"
                        />
                    </div>
                    <img
                        src={redBall}
                        alt=""
                        className="w-[80px] mt-10 ml-20 animate-fade-left animate-once animate-duration-500 animate-delay-200 animate-ease-in animate-alternate animate-fill-both blur-sm"
                    />
                </div>
            </div>
        </>
    );
};
export default Home;
