import { useState } from "react";

import SidebarItem from "../sidebarItem/SidebarItem";
import SidebarButton from "../sidebarButton/SidebarButton";
import Logo from "../../../assets/images/logo-large.svg?react";
import SmallLogo from "../../../assets/images/logo-small.svg?react";
import MenuOption from "../../../types/MenuOption";

import "./sidebar.scss";

export default function Sidebar({menuOptions} : MenuOption[]){
    const [collapsed, setCollapsed] = useState(false); 
    function toggleMenu(){
        setCollapsed(!collapsed)
    }

    return(
        <aside className={collapsed ? "sidebar-container collapsed" : "sidebar-container"}>
            <section className="sidebar-header">
                {collapsed ? 
                    <SmallLogo/>
                    :
                    <Logo/>
                }
            </section>

            <ul className="sidebar-items">
            { 
            menuOptions.map((item : MenuOption) : JSX.Element  => {
                return (
                    <li key={item.label}>
                        <SidebarItem icon={item.icon} label={item.label} route={item.route}></SidebarItem>
                    </li>
                )})
            }
            </ul>

            <section className="toggle-sidebar">
                <SidebarButton onclick={toggleMenu}></SidebarButton>
            </section>
        </aside>
    );
}