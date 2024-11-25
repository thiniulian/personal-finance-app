import { NavLink } from 'react-router-dom';
import MenuOption from '../../../types/MenuOption';

import './sidebarItem.scss';

export default function SidebarItem({icon:Icon, label, route}: MenuOption) {
    return(
        <NavLink to={route} 
        className={({isActive})=> isActive ? "sidebar-item selected":"sidebar-item"}
        >
            <span 
            className='sidebar-item-icon'
            role="img"
            aria-label={`icon for ${label}`}
            >
                <Icon/>
            </span>
            <span className='sidebar-item-label'>{label}</span>
        </NavLink>
    );
};