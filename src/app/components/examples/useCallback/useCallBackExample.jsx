import React, { useCallback, useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={data.email || ""}
                className="form-control"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
