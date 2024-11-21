import './sidebarItem.scss';

interface SidebarItemProps {
    isSelected: boolean;
    icon: string;
    label: string; 
}

export default function SidebarItem({isSelected, icon, label}: SidebarItemProps) {
    return(
        <button className={isSelected ? "sidebar-item selected":"sidebar-item"}>
            <span 
            className='sidebar-item-icon'
            dangerouslySetInnerHTML={{__html: icon }}
            role="img"
            aria-label={`icon for ${label}`}
            ></span>
            <span className='sidebar-item-label'>{label}</span>
        </button>
    );
};