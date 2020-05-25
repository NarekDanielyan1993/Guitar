import React from "react";
import Header from "./Header/Header";

interface Props {}

const Layout: React.FC<Props> = (props) => {
    return (
        <div>
            {/* <NavBar /> */}
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
