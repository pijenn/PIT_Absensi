import backgroundStyle from "../assets/bgLanding.jpg";
import { Link, useNavigate } from "react-router-dom";
import ceklist from "../assets/ceklis.png";
import warning from "../assets/warning!!.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [ke, setKe] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [tempat, setTempat] = useState("");
    const [link, setLink] = useState("");
    const [kehadiran, setKehadiran] = useState([]);
    const navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Rapat Ke:", ke);
        console.log("Tanggal:", tanggal);
        console.log("Tempat:", tempat);
        console.log("Link:", link);
        await postData();
        document.getElementById("my_modal_1").showModal();
    };

    const getUsers = async () => {
        try {
            let response = await axios.get(
                "https://api-website-presensi-pit.vercel.app/users"
            );
            setUsers(response.data.data);
            setKehadiran(
                response.data.data.map((user) => ({
                    user_id: user.id,
                    status: "HADIR",
                }))
            );
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);
    const postData = async () => {
        try {
            console.log("Sending data:", {
                tanggal,
                ke,
                tempat,
                link,
                kehadiran,
            });
            const response = await fetch(
                "https://api-website-presensi-pit.vercel.app/absensi",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        rapat: {
                            tanggal,
                            ke,
                            tempat,
                            link,
                        },
                        anggota: kehadiran,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    useEffect(() => {
        console.log(kehadiran);
    }, [kehadiran]);

    return (
        <>
            <div
                className="bg-cover flex items-center font-poppins bg-fixed"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10 mt-16">
                    <h1 className="text-center text-[32px] font-bold text-primary mt-12 animate-fade animate-once animate-duration-500 animate-ease-in-out">
                        FORM ABSENSI
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className=" bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-8 animate-fade animate-once animate-duration-500 animate-ease-in-out z-[2]">
                            <div className="flex ">
                                <div className="text-white text-[20px] font-semibold basis-1/2 mr-3">
                                    <div>Rapat ke</div>
                                    <div className="mt-2">
                                        <form>
                                            <input
                                                name="ke"
                                                required
                                                value={ke}
                                                onChange={(e) =>
                                                    setKe(e.target.value)
                                                }
                                                type="number"
                                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold w-full  bg-white text-black focus:border-primary focus:outline-none focus:border-[2px]"
                                            ></input>
                                        </form>
                                    </div>
                                </div>
                                <div className="text-left text-white text-[20px] font-semibold basis-1/2 ml-3">
                                    <div> Tanggal</div>
                                    <div className="mt-2">
                                        <form>
                                            <input
                                                name="tanggal"
                                                required
                                                value={tanggal}
                                                onChange={(e) =>
                                                    setTanggal(e.target.value)
                                                }
                                                placeholder="date"
                                                type="date"
                                                className="rounded-full py-2 px-4 mx-auto mt-2 mb-4 font-bold w-full   bg-white text-black focus:border-primary focus:outline-none focus:border-[2px]"
                                            ></input>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white text-[20px] font-semibold mt-3">
                                Tempat
                            </div>
                            <div className="mt-2">
                                <form>
                                    <input
                                        name="tempat"
                                        required
                                        value={tempat}
                                        onChange={(e) =>
                                            setTempat(e.target.value)
                                        }
                                        type="text"
                                        className="rounded-full w-full py-2 px-4 mx-auto mt-2 mb-4 bg-white text-black font-bold text-[20px] focus:border-primary focus:outline-none focus:border-[2px]"
                                    ></input>
                                </form>
                            </div>
                            <div className="text-white text-[20px] font-semibold mt-3">
                                Link Notulensi
                                <div />
                                <div className="mt-2">
                                    <form>
                                        <input
                                            name="link"
                                            required
                                            value={link}
                                            onChange={(e) =>
                                                setLink(e.target.value)
                                            }
                                            type="text"
                                            className="rounded-full w-full py-2 px-4 mx-auto mt-2 mb-4 font-bold bg-white text-black text-[20px] focus:border-primary focus:outline-none focus:border-[2px]"
                                        ></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between h-[500px] bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[2px] border-white rounded-xl mt-10 animate-fade animate-once animate-duration-500 animate-ease-in-out  overflow-auto">
                            <div className="w-full">
                                {loading ? (
                                    <p className="text-white text-center text-xl font-bold">
                                        <div className="mt-10 justify-center items-center">
                                            Sabar dikit napa kan dah gede
                                        </div>
                                        <span className="loading loading-dots loading-lg mt-10"></span>
                                    </p>
                                ) : (
                                    <p>
                                        <div className=" flex flex-col justify-between mt-3 ">
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
                                                        <div
                                                            className="flex flex-row w-full justify-between items-center content-center align-middle mt-4"
                                                            key={index}
                                                        >
                                                            <h1 className=" text-white text-[20px] basis-1/6 flex justify-center">
                                                                {index + 1}
                                                            </h1>
                                                            <h1 className=" text-white text-[20px] basis-1/4  flex justify-start">
                                                                {user.nama}
                                                            </h1>
                                                            <h1 className=" text-white text-[20px] basis-1/4 flex justify-center">
                                                                {user.role}
                                                            </h1>
                                                            <h1 className="text-white text-[20px] basis-1/4 flex justify-center ">
                                                                <div className="flex flex-col gap-2">
                                                                    <select
                                                                        id="status"
                                                                        name="status"
                                                                        required
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const user_id =
                                                                                user.id;
                                                                            const newKehadiran =
                                                                                kehadiran.map(
                                                                                    (
                                                                                        item
                                                                                    ) => {
                                                                                        if (
                                                                                            user_id ==
                                                                                            item.user_id
                                                                                        ) {
                                                                                            return {
                                                                                                ...item,
                                                                                                status: e
                                                                                                    .target
                                                                                                    .value,
                                                                                            };
                                                                                        }
                                                                                        return item;
                                                                                    }
                                                                                );
                                                                            setKehadiran(
                                                                                newKehadiran
                                                                            );
                                                                        }}
                                                                        className="py-2 px-6 rounded-full bg-primary text-white border-1 border-black active:bg-red-700 text-center"
                                                                    >
                                                                        <option
                                                                            value="HADIR"
                                                                            className="text-center border-none rounded-full"
                                                                        >
                                                                            Hadir
                                                                        </option>
                                                                        <option
                                                                            value="ALPHA"
                                                                            className="text-center border-none rounded-full"
                                                                        >
                                                                            Alpha
                                                                        </option>
                                                                        <option
                                                                            value="IZIN"
                                                                            className="text-center border-none rounded-full"
                                                                        >
                                                                            Izin
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </h1>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="w-fit items-end flex mx-auto">
                                            <button
                                                className="btn bg-primary text-white font-bold rounded-full px-20 mr-7 text-[20px] mt-14  border-none hover:bg-red-400 mb-10"
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "my_modal_1"
                                                        )
                                                        .showModal()
                                                }
                                            >
                                                SUBMIT
                                            </button>
                                            <dialog
                                                id="my_modal_1"
                                                className="modal"
                                            >
                                                <div className="modal-box align-middle bg-white">
                                                    <div className="justify-center align-middle content-center flex">
                                                        <img
                                                            src={warning}
                                                            alt=""
                                                            className="w-3/12"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-[28px] text-black align-middle text-center mt-3">
                                                        Yakin gak nieh??
                                                    </h3>
                                                    <p className="pt-2 pb-4 text-center">
                                                        Periksa lagi yaahh
                                                        soalnya gak bisa edit
                                                        xixi
                                                    </p>
                                                    <div className="modal-action w-full justify-center mt-3 mb-3">
                                                        <form method="dialog">
                                                            <button className="btn border-1 border-slate-500 bg-transparent px-12 py-2 rounded-full text-[16px] text-slate-500 basis-1/2 mr-4 hover:bg-transparent">
                                                                Batal
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="bg-primary py-3 px-12 rounded-full font-bold text-white hover:bg-red-400 btn border-none text-[16px]"
                                                                onClick={() => {
                                                                    document
                                                                        .getElementById(
                                                                            "my_modal_2"
                                                                        )
                                                                        .showModal()(
                                                                        (window.location.href =
                                                                            "/Beranda")
                                                                    );
                                                                }}
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
                                                                            src={
                                                                                ceklist
                                                                            }
                                                                            alt=""
                                                                            className="w-3/12 "
                                                                        />
                                                                    </div>
                                                                    <h3 className="font-bold text-lg align-middle text-black text-center text-[34px] mt-5">
                                                                        Absensi
                                                                        berhasil!!!
                                                                    </h3>
                                                                    <p className="py-4 text-center mt-2">
                                                                        Yayy,
                                                                        terimakasi
                                                                        yaa
                                                                        sudah
                                                                        absen
                                                                        &lt;3
                                                                    </p>
                                                                </div>
                                                                <form
                                                                    method="dialog"
                                                                    className="modal-backdrop"
                                                                >
                                                                    <button>
                                                                        close
                                                                    </button>
                                                                </form>
                                                            </dialog>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
