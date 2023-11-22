import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-full">
                    <div className="w-fit mx-auto text-white font-bold text-[48px] animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                        Selamat Datang di
                    </div>
                    <div className="w-fit mx-auto text-primary text-[100px] font-bold mt-1 shadow-lg animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                        PRESENSI FOR PIT
                    </div>
                    <div className="w-7/12 mx-auto text-white mt-4 text-[26px] text-center animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                        Website absensi yang dikhususkan untuk Kebiroan
                        Pengembangan Informasi dan Teknologi Badan Eksekutif
                        Mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya.
                        Jangan lupa absen!!
                    </div>
                    <div className="w-fit mx-auto mt-8">
                        <Link to="/Login">
                            <button className="bg-red-500 hover:bg-red-400 text-white px-20 py-2 rounded-full active:bg-red-700 text-[24px] duration-300 animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                                Mulai
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
