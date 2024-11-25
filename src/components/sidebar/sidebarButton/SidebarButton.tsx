import '../sidebarItem/sidebarItem.scss'; 
import Minimize from '../../../assets/images/icon-minimize-menu.svg?react';

interface SidebarButtonProps{
    onclick:() =>void; 
}

export default function SidebarButton({onclick}:SidebarButtonProps){
    return(
        <button className="sidebar-item"
        onClick={onclick}>
            <Minimize/>
            <span>Minimize Menu</span>
        </button>
    );
}