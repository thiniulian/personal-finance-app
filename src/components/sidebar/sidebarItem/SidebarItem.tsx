import { NavLink } from 'react-router-dom';
import './sidebarItem.scss';

interface SidebarItemProps {
    icon: string;
    label: string; 
    route: string;
}

export default function SidebarItem({icon, label, route}: SidebarItemProps) {
    return(
        <NavLink to={route} className={({isActive})=> isActive ? "sidebar-item selected":"sidebar-item"}>
            <span 
            className='sidebar-item-icon'
            dangerouslySetInnerHTML={{__html: icon }}
            role="img"
            aria-label={`icon for ${label}`}
            ></span>
            <span className='sidebar-item-label'>{label}</span>
        </NavLink>
    );
};