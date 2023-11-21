import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-3/12 bg-white mx-auto px-6 py-3 rounded-xl">
                    <img src={logoBem} alt="" className="w-3/12 mx-auto m-3" />
                    <h1 className="w-fit mx-auto text-black text-[26px] font-bold">
                        PRESENSI FOR PIT
                    </h1>
                    <p className="w-fit mx-auto my-1 text-gray-400 text-[16px]">
                        Masukkan inputan dengan benar
                    </p>
                    <div className="my-2">
                        <input
                            placeholder="username"
                            type="text"
                            className="w-full bg-gray-100 border border-black py-4 px-3 mx-auto mt-2 mb-4 rounded-[10px] focus:border-[#EE333D] focus:outline-none"
                        />
                        <input
                            placeholder="password"
                            type="text"
                            className="w-full bg-gray-100 border border-black py-4 px-3 mx-auto mb-4 rounded-[10px] focus:border-[#EE333D] focus:outline-none"
                        />
                        <Link to="/Beranda">
                            <button className="w-full bg-[#EE333D] my-2 py-3 rounded-[50px] text-[18px] text-white font-bold hover:bg-red-500 active:bg-red-700 duration-300">
                                Masuk
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Login;
