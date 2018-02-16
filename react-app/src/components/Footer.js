import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
    <div>
        <hr />

        <ul className="list-inline">
            <li>
                <NavLink exact to={"/"} activeClassName="bg-success">
                    Home
                </NavLink>
            </li>


        </ul>
    </div>
);

export default Footer;