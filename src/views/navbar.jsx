import { Link } from "react-router-dom";
import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";
import warning from "../assets/warning!!.png";
import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input }, { allowReinits: true });

const Navbar = () => {
    return (
        <>
            <div className="flex fixed w-full top-0 px-24 py-8 font-poppins flex-row justify-between z-[1] bg-transparent">
                <img
                    src={logoBem}
                    alt=""
                    className="w-[60px] ml-5 hover:cursor-pointer"
                    onClick={() =>
                        (window.location.href = "/Beranda")
                    }
                />
                <div className="font-bold text-[18px] text-white mt-3 ml-3 basis-3/4">
                    BEM FILKOM 2023
                </div>
                <div className="w-5/12 flex justify-end">
                    <Link to="/form">
                        <button className="btn btn-error bg-primary rounded-full font-bold text-white border-none mr-3 px-6">
                            TAMBAH ABSEN
                        </button>
                    </Link>
                    <button
                        className="btn font-bold text-white bg-primary rounded-full py-2 px-3"
                        onClick={() =>
                            document.getElementById("my_modal_5").showModal()
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
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            />
                        </svg>
                    </button>
                    <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                    >
                        <div className="modal-box bg-white">
                            <div className="justify-center align-middle content-center flex transition ease-in-out delay-150">
                                <img src={warning} alt="" className="w-3/12" />
                            </div>
                            <h3 className="font-bold text-[28px] text-black align-middle text-center mt-3">
                                Mau keluar?
                            </h3>
                            <p className="pt-2 pb-4 text-center">
                                Apakah kamu yakin buat ninggalin aku?
                                :&#40;&#40;&#40;
                            </p>
                            <div className="modal-action w-full justify-center mt-3 mb-3">
                                <form method="dialog">
                                    <button className="btn border-1 border-slate-500 bg-transparent px-12 py-2 rounded-full text-[16px] text-slate-500 basis-1/2 mr-4 hover:bg-transparent">
                                        Batal
                                    </button>
                                    <button
                                        className="bg-primary py-3 px-12 rounded-full font-bold text-white hover:bg-red-400 btn border-none text-[16px]"
                                        onClick={() =>
                                            (window.location.href =
                                                "/")
                                        }
                                    >
                                        Keluar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
};

export default Navbar;
