import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withAuthorization = (Component) => (props) => {
    const [user, setUser] = useState();
    const handleLogOut = () => {
        localStorage.removeItem("user");
        setUser(localStorage.getItem("user"));
    };

    const handleLogin = () => {
        localStorage.setItem("user", "newUser");
        setUser(localStorage.getItem("user"));
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={user}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withAuthorization;
