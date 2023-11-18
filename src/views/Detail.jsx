import backgroundStyle from "../assets/bgLanding.jpg";

const Detail = () => {
    return (
        <>
            <div className="h-screen bg-cover font-poppins" style={{ backgroundImage: `url(${backgroundStyle})` }}>
                <div className="w-9/12 mx-auto py-10">
                    <h1 className="text-[32px] text-center font-bold text-[#EE333D]">ABSENSI RAPAT KE-1</h1>
                    <div className="bg-red-600 px-10 py-2 border-[3px] border-white rounded-xl">
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">TEMPAT</h1>
                            <h1 className="text-white text-[16px]">Roketto Coffee & Co</h1>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">TANGGAL</h1>
                            <h1 className="text-white text-[16px]">20 Februari 2023</h1>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold text-white text-[20px]">LINK NOTULENSI</h1>
                            <h1 className="text-white text-[16px]">https://docs.google.com/d/1PwNo0EgDPOHdOG7xHgKTF9-/edit?usp=sharing</h1>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white backdrop-blur-lg bg-opacity-30 px-10 py-5 border-[3px] border-white rounded-xl">
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">NO.</h1>
                            <h1 className="text-white text-[20px]">1.</h1>
                            <h1 className="text-white text-[20px]">2.</h1>
                            <h1 className="text-white text-[20px]">3.</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">NAMA</h1>
                            <h1 className="text-white text-[20px]">Firza Aurellia Iskandar</h1>
                            <h1 className="text-white text-[20px]">Rafie R. Al Aziz Zein</h1>
                            <h1 className="text-white text-[20px]">Akbar Fikri Abdillah</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">ROLE</h1>
                            <h1 className="text-white text-[20px]">Staf Muda</h1>
                            <h1 className="text-white text-[20px]">Staf Muda</h1>
                            <h1 className="text-white text-[20px]">Staf Muda</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-white text-[20px]">STATUS</h1>
                            <h1 className="text-white text-[20px]">HADIR</h1>
                            <h1 className="text-white text-[20px]">HADIR</h1>
                            <h1 className="text-white text-[20px]">HADIR</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
