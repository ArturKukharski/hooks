import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <Subtitle>{isAuth || "Войдите в систему"}</Subtitle>
            <button
                className="btn btn-primary"
                onClick={isAuth ? onLogOut : onLogin}
            >
                {isAuth ? "Log Out" : " Log In"}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
