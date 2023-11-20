import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Detail from "./views/Detail";
import Beranda from "./views/beranda";
import Form from "./views/Form";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                    <Route path="/beranda" element={<Beranda />}></Route>
                    <Route path="/form" element={<Form />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
