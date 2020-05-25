import React from "react";

import { NavLink } from "react-router-dom";

interface INavItems {
    to: string;
    activeClass?: string;
    itemStyle?: string;
    linkStyle?: string;
}

const NavigationItem: React.FC<INavItems> = (props) => {
    return (
        <li className={props.itemStyle}>
            <NavLink
                activeClassName={props.activeClass}
                to={props.to}
                className={props.linkStyle}
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
