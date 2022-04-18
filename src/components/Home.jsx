import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        user.isAuthenticated = false;
        localStorage.setItem("loginUser", JSON.stringify(user));
        navigate("/");
    };

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        if (!user.isAuthenticated) {
            navigate("/");
        }
    }, []);

    return <button onClick={() => logoutUser()} className="logout-button">Logout</button>;
};

export default Home;
