import React from "react";
import Button from "../../UI/Button/Button";
import NavigationItem from "./navigationItem/navigationItem";

interface IItemsLIst {
    top: boolean;
}

interface INavitems {
    id: string;
    text: string;
    link: string;
    top: boolean;
}

const navItems: INavitems[] = [
    {
        id: "cart",
        text: "my cart",
        link: "/cart",
        top: true,
    },
    {
        id: "account",
        text: "my account",
        link: "/account",
        top: true,
    },
    {
        id: "login",
        text: "log in",
        link: "/login",
        top: true,
    },
    {
        id: "home",
        text: "home",
        link: "/home",
        top: false,
    },
    {
        id: "guitars",
        text: "guitars",
        link: "/guitars",
        top: false,
    },
];

const navigationItems: React.FC<IItemsLIst> = (props) => (
    <ul className="navigation">
        {navItems.map(
            (item) =>
                item.top === props.top && (
                    <NavigationItem
                        to={item.link}
                        activeClass="navigation__link--active"
                        linkStyle="navigation__link"
                        itemStyle="navigation__item"
                        key={item.id}
                    >
                        {item.text}
                    </NavigationItem>
                )
        )}
        {props.top && (
            <li className="navigation__item" key="logout">
                <Button>
                    <span>logout</span>
                </Button>
            </li>
        )}
    </ul>
);

export default navigationItems;
