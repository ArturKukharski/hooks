import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const OlComponent = ({ children }) => {
    console.log(children);
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            key: { index },
            value: `${index}. ${child.props.value}`
        };
        return React.cloneElement(child, config);
    });
};

OlComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <OlComponent>
                <Component value="Элемент списка" />
                <Component value="Элемент списка" />
                <Component value="Элемент списка" />
            </OlComponent>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value}</div>;
};

Component.propTypes = {
    value: PropTypes.string
};

export default ChildrenExercise;
