import backgroundStyle from "../assets/bgLanding.jpg";
import { Link } from "react-router-dom";
import ceklist from "../assets/ceklis.png";
import warning from "../assets/warning!!.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            let response = await axios.get(
                "https://api-website-presensi-pit.vercel.app/users"
            );
            setUsers(response.data.data);
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
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10 mt-24">
                    <h1 className="text-center text-[32px] font-bold text-primary mt-12 animate-fade-down animate-once animate-duration-500 animate-ease-in-out">
                        FORM ABSENSI
                    </h1>
                    <div className=" bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-8 animate-fade-right animate-once animate-duration-500 animate-ease-in-out z-[2]">
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
                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold basis-1/3 ml-0 bg-white text-black"
                            ></input>
                            <input
                                type="text"
                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold basis-1/3 ml-0 bg-white text-black"
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
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[3px] border-white rounded-xl mt-10 animate-fade-left animate-once animate-duration-500 animate-ease-in-out">
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
                                            <div className="flex flex-row w-full justify-between items-center content-center align-middle" key={index}>
                                                <h1 className="font-bold text-white text-[20px] basis-1/6 flex justify-center">
                                                    {user.id}
                                                </h1>
                                                <h1 className="font-bold text-white text-[20px] basis-1/4  flex justify-center text-center">
                                                    {user.nama}
                                                </h1>
                                                <h1 className="font-bold text-white text-[20px] basis-1/4 flex justify-center">
                                                    {user.role}
                                                </h1>
                                                <h1 className="text-white text-[20px] basis-1/4 flex justify-center ">
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
                                                            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-fit bg-white backdrop-blur-lg bg-opacity-30 content-start"
                                                        >
                                                            <li className="bg-primary rounded-full text-white font-bold px-4 py-1 text-[18px]">
                                                                <a>ALPHA</a>
                                                            </li>
                                                            <li className="bg-green-600 rounded-full text-white font-bold mt-2 px-4 py-1 text-[18px]">
                                                                <a className="ml-1">
                                                                    HADIR
                                                                </a>
                                                            </li>
                                                            <li className="bg-slate-400 rounded-full text-white font-bold mt-2 px-4 py-1 text-[18px] ">
                                                                <a className="text-center align-middle content-center ml-3">
                                                                    IZIN
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
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
                            <div className="w-full items-end flex flex-row-reverse">
                                <button
                                    className="btn bg-primary text-white font-bold rounded-full px-12 mr-7 text-[20px] mt-3 border-none hover:bg-red-400 "
                                    onClick={() =>
                                        document
                                            .getElementById("my_modal_1")
                                            .showModal()
                                    }
                                >
                                    SUBMIT
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box align-middle bg-white">
                                        <div className="justify-center align-middle content-center flex">
                                            <img
                                                src={warning}
                                                alt=""
                                                className="w-3/12"
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg align-middle text-black text-center text-[34px] mt-5">
                                            Yakin gak nieh??
                                        </h3>
                                        <p className="py-4 text-center mt-3">
                                            Periksa lagi yaahh soalnya gak bisa
                                            edit xixi
                                        </p>
                                        <div className="modal-action w-full justify-center mt-2">
                                            <form method="dialog">
                                                <button className="btn border-1 border-slate-500 bg-transparent px-10 py-2 rounded-full font-bold text-slate-500 basis-1/2 mr-4 hover:bg-transparent">
                                                    Batal
                                                </button>
                                                <button
                                                    className="btn bg-primary py-3 px-8 rounded-full font-bold text-white hover:bg-red-400 border-none"
                                                    onClick={() =>
                                                        document
                                                            .getElementById(
                                                                "my_modal_2"
                                                            )
                                                            .showModal()(
                                                            (window.location.href =
                                                                "http://localhost:5173/Beranda")
                                                        )
                                                    }
                                                >
                                                    Submit
                                                </button>
                                                <dialog
                                                    id="my_modal_2"
                                                    className="modal"
                                                >
                                                    <div className="modal-box align-middle bg-white">
                                                        <div className="justify-center align-middle content-center flex">
                                                            <img
                                                                src={ceklist}
                                                                alt=""
                                                                className="w-3/12 "
                                                            />
                                                        </div>
                                                        <h3 className="font-bold text-lg align-middle text-black text-center text-[34px] mt-5">
                                                            Absensi berhasil!!!
                                                        </h3>
                                                        <p className="py-4 text-center mt-2">
                                                            Yayy, terimakasi yaa
                                                            sudah absen &lt;3
                                                        </p>
                                                    </div>
                                                    <form
                                                        method="dialog"
                                                        className="modal-backdrop"
                                                    >
                                                        <button>close</button>
                                                    </form>
                                                </dialog>
                                            </form>
                                        </div>
                                    </div>
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
