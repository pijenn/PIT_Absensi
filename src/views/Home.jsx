import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";

const Home = () => {
    return (
        <>
            <div className="h-screen bg-cover flex items-center" style={{ backgroundImage: `url(${backgroundStyle})` }}>
                <div className="w-full">
                    <div className="w-fit mx-auto text-white">Welcome to</div>
                    <div className="w-fit mx-auto text-white text-5xl">Lorem ipsum absensi tes</div>
                </div>
                {/* <div className="header">
                    <div className="font-poppins font-bold text-2xl leading-9 text-center tracking-wide text-white">
                        BEM FILKOM 2023
                    </div>
                    <div
                        className="absolute w-79 h-79 left-122 top-70"
                        style={{ logoBem }}
                    ></div>
                </div> */}
                {/* <div className="flex flex-col items-center gap-30 absolute w-full h-502 left-[calc(50%-947px/2-0.5px)] top-289">
                    <div className="w-fit mx-auto h-90 font-poppins font-extrabold text-5xl line-height-90 text-white flex-none order-0 flex-grow-0">
                        Welcome to
                    </div>

                    <div className="w-806 h-140 font-poppins font-extrabold text-7xl text-red-600 line-height-140 tracking-tighter text-primary text-shadow-blur flex-none order-1 flex-grow-0">
                        LOREM IPSUM
                    </div>

                    <div className="w-947 h-126 font-poppins font-normal text-2xl line-height-42 text-center text-white flex-none order-2 flex-grow-0">
                        Working with Nadyline has been an absolute pleasure.
                        Their ability to transform our ideas into visually
                        stunning designs is truly remarkable. From branding to
                        digital assets.
                    </div>

                    <div className="flex flex-row justify-center items-center p-10 gap-10 w-211 h-56 bg-primary rounded-full flex-none order-3 flex-grow-0">
                        {/* Lorem Ipsum */}
                {/* <div className="w-156 h-36 font-poppins font-normal text-2xl line-height-36 text-white flex-none order-0 flex-grow-0">
                            Lorem Ipsum
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};
export default Home;
