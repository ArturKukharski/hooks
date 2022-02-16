import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => inputRef.current.focus;
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                name="email"
                id="email"
                className="form-control"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Button
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
