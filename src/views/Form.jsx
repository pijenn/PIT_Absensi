import backgroundStyle from "../assets/bgLanding.jpg";

const Form = () => {
    return (
        <>
            <div
                className="h-screen bg-cover flex items-center font-poppins"
                style={{ backgroundImage: `url(${backgroundStyle})` }}
            >
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-center text-[32px] font-bold text-primary">
                        FORM ABSENSI
                    </h1>
                    <div className=" bg-white backdrop-blur-lg bg-opacity-30 px-10 py-10 border-[2px] border-white rounded-xl mt-8"></div>
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[3px] border-white rounded-xl mt-10">
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">
                                NO.
                            </h1>
                            <h1 className="text-white text-[20px]">1.</h1>
                            <h1 className="text-white text-[20px]">2.</h1>
                            <h1 className="text-white text-[20px]">3.</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">
                                NAMA
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Firza Aurellia Iskandar
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Rafie R. Al Aziz Zein
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Akbar Fikri Abdillah
                            </h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">
                                ROLE
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Staf Muda
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Staf Muda
                            </h1>
                            <h1 className="text-white text-[20px]">
                                Staf Muda
                            </h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">
                                STATUS
                            </h1>
                            <h1 className="text-white text-[20px]">
                                <button className="bg-primary border-none rounded-full px-3 py-2 items-center inline-flex active:bg-red-600 hover:bg-red-500">
                                    <span className="mr-3 font-bold">
                                        ALPHA
                                    </span>
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
                                </button>
                            </h1>
                            <h1 className="text-white text-[20px]">
                                {" "}
                                <button className="bg-primary border-none rounded-full px-3 py-2 items-center inline-flex active:bg-red-600 hover:bg-red-500">
                                    <span className="mr-3 font-bold">
                                        ALPHA
                                    </span>
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
                                </button>
                            </h1>
                            <h1 className="text-white text-[20px]">
                                {" "}
                                <button className="bg-primary border-none rounded-full px-3 py-2 items-center inline-flex active:bg-red-600 hover:bg-red-500">
                                    <span className="mr-3 font-bold">
                                        ALPHA
                                    </span>
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
                                </button>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;