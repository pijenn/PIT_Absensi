import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const hideNavbar = ({ children }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        setShowNavbar(location.pathname !== "/" && location.pathname !== "/Login");
    }, [location]);

    return <div>{showNavbar && children}</div>;
};

export default hideNavbar;
