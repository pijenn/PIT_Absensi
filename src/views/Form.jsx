import backgroundStyle from "../assets/bgLanding.jpg";
import { Link } from "react-router-dom";
import ceklist from "../assets/ceklis.png";

const Form = () => {
    return (
        <>
            <div
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10 mt-24">
                    <h1 className="text-center text-[32px] font-bold text-primary mt-12">
                        FORM ABSENSI
                    </h1>
                    <div className=" bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-8">
                        <div className="flex flex-row justify-between">
                            <div className="text-white text-[20px] font-semibold basis-1/2">
                                Rapat ke
                            </div>
                            <div className="text-left text-white text-[20px] font-semibold basis-1/2">
                                Tanggal
                            </div>
                        </div>
                        <div className="mt-2 flex flex-row ">
                            <input
                                type="text"
                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold basis-1/4 ml-0 bg-white text-black"
                            ></input>
                            <input
                                type="text"
                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold basis-1/4 ml-0 bg-white text-black"
                            ></input>
                        </div>
                        <div className="text-white text-[20px] font-semibold mt-5">
                            Tempat
                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                className="rounded-full w-full py-2 px-4 mx-auto mt-2 mb-4 bg-white text-black font-bold"
                            ></input>
                        </div>
                        <div className="text-white text-[20px] font-semibold mt-5">
                            Link Notulensi
                            <input
                                type="text"
                                className="rounded-full w-full py-2 px-4 mx-auto mt-2 mb-4 font-bold bg-white text-black"
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[3px] border-white rounded-xl mt-10">
                        <div className="w-full">
                            <div className="flex-row flex justify-between">
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        NO.
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-4">
                                        1.
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-9">
                                        2.
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-10">
                                        3.
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        NAMA
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-4">
                                        Firza Aurellia Iskandar
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-9">
                                        Rafie R. Al Aziz Zein
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-10">
                                        Akbar Fikri Abdillah
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px]">
                                        ROLE
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-4">
                                        Staf Muda
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-9 ">
                                        Staf Muda
                                    </h1>
                                    <h1 className="text-white text-[20px] mt-10">
                                        Staf Muda
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-white text-[20px] ml-7">
                                        STATUS
                                    </h1>
                                    <h1 className="text-white text-[20px]">
                                        <div className="dropdown">
                                            <label
                                                tabIndex={0}
                                                className="btn m-1 bg-primary border-0 text-[18px] font-bold duration-300 text-white rounded-full hover:bg-red-700 active:bg-red-400"
                                            >
                                                STATUS
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
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
                                            >
                                                <li className="bg-primary rounded-full text-white font-bold">
                                                    <a>Alpha</a>
                                                </li>
                                                <li className="bg-green-600 rounded-full text-white font-bold mt-2">
                                                    <a>Hadir</a>
                                                </li>
                                                <li className="bg-slate-400 rounded-full text-white font-bold mt-2">
                                                    <a>Izin</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </h1>
                                    <h1 className="text-white text-[20px]">
                                        <div className="dropdown mt-3">
                                            <label
                                                tabIndex={0}
                                                className="btn m-1 bg-primary border-0 text-[18px] font-bold duration-300 text-white rounded-full hover:bg-red-700 active:bg-red-400"
                                            >
                                                STATUS
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
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
                                            >
                                                <li className="bg-primary rounded-full text-white font-bold">
                                                    <a>Alpha</a>
                                                </li>
                                                <li className="bg-green-600 rounded-full text-white font-bold mt-2">
                                                    <a>Hadir</a>
                                                </li>
                                                <li className="bg-slate-400 rounded-full text-white font-bold mt-2">
                                                    <a>Izin</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </h1>
                                    <h1 className="text-white text-[20px]">
                                        <div className="dropdown mt-3">
                                            <label
                                                tabIndex={0}
                                                className="btn m-1 bg-primary border-0 text-[18px] font-bold duration-300 text-white rounded-full hover:bg-red-700 active:bg-red-400"
                                            >
                                                STATUS
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
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
                                            >
                                                <li className="bg-primary rounded-full text-white font-bold">
                                                    <a>Alpha</a>
                                                </li>
                                                <li className="bg-green-600 rounded-full text-white font-bold mt-2">
                                                    <a>Hadir</a>
                                                </li>
                                                <li className="bg-slate-400 rounded-full text-white font-bold mt-2">
                                                    <a>Izin</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </h1>

                                    <div></div>
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
                            <div className="w-full items-end flex flex-row-reverse">
                                <button
                                    className="btn bg-primary text-white font-bold rounded-full px-12 mr-7 text-[20px] mt-3 border-none hover:bg-red-400 "
                                    onClick={() =>
                                        document
                                            .getElementById("my_modal_2")
                                            .showModal()
                                    }
                                >
                                    SUBMIT
                                </button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box align-middle bg-white">
                                        <div className="justify-center align-middle content-center flex">
                                            <img
                                                src={ceklist}
                                                alt=""
                                                className="w-3/12 "
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg align-middle text-black text-center text-[36px] mt-5">
                                            Absensi berhasil!!!
                                        </h3>
                                        <p className="py-4 text-center">
                                            Yayy, terimakasi yaa sudah absen
                                            &lt;3
                                        </p>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
