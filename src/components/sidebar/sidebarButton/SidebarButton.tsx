import '../sidebarItem/sidebarItem.scss'; 
import Minimize from '../../../assets/images/icon-minimize-menu.svg?react';
// import Maximize from '../../../assets/images/icon-maximize-menu.svg?react';

export default function SidebarButton({icon} :  {icon:string}){
    if(icon) console.log(icon); // ca sa nu-mi dea eroare ca nu folosesc variabila
    return(
        <button className="sidebar-item">
            <Minimize/>
            <span>Minimize Menu</span>
        </button>
    );
}