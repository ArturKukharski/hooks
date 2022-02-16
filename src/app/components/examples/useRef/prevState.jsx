import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const toggleOtherState = () =>
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    return (
        <CardWrapper>
            <SmallTitle>ППредыдущее состояние</SmallTitle>
            <p>prev state: {prevState.current}</p>
            <p>current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
