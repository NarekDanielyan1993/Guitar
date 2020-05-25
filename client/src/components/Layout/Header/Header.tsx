import React, { useEffect } from "react";
import axios from "../../../utilities/axiosInstance";
interface IHeader {}

import NavigationItems from "../../navigation/navigationItems/navigationItems";

const Header: React.FC<IHeader> = () => {
    useEffect(() => {
        axios
            .get("/api/products/get_brands")
            .then((response) => console.log(response));
    }, []);
    return (
        <header className="header">
            <div className="grid">
                <div className="header__toolbar">
                    <div className="header__logo">
                        <span>waves</span>
                    </div>
                    <nav className="header__nav-list">
                        <NavigationItems top={true} />
                        <NavigationItems top={false} />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
