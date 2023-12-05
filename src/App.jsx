import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Detail from "./views/Detail";
import Beranda from "./views/beranda";
import Form from "./views/Form";
import Navbar from "./views/navbar";
import HideNavbar from "./views/hideNavbar";

const App = () => {
    return (
        <>
            <Router>
                <HideNavbar>
                    <Navbar />
                </HideNavbar>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/beranda" element={<Beranda />}/>
                    <Route path="/form" element={<Form />}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
