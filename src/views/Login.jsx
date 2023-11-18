import backgroundStyle from "../assets/bgLanding.jpg";
import logoBem from "../assets/logoBEM.png";

const Login = () => {
    return (
        <>
            <div className="h-screen bg-cover flex items-center font-poppins" style={{ backgroundImage: `url(${backgroundStyle})` }}>
                <div className="w-3/12 mx-auto bg-white rounded-xl">
                    <img src={logoBem} alt="" className="w-4/12 mx-auto" />
                    <div className="w-10/12 mx-auto">
                        <input placeholder="username " type="text" className=" w-full bg-gray-300 py-2 px-2" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
