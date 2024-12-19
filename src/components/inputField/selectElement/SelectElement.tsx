import { useEffect, useRef, useState } from "react";
import CarretDownIcon from "../../../assets/images/icon-caret-down.svg?react";
import "../inputField.scss";

interface selectProps {
    dropdownOpened: boolean;
    selectDecorator:string | undefined;
}
const colorTags = [
    "green", "yellow", "cyan", "navy", "red", "purple", "turquoise", "brown", "magenta", "blue", "navy-grey", "army-green", "gold", "orange" 
]
const transactionCategories = [
    "All Transactions", "Entertainment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care", "Education", "Lifestyle", "Shopping", "General"
]

export default function SelectElement({dropdownOpened, selectDecorator}:selectProps){
    const [tagColor, setTagColor] = useState(colorTags[0]);
    const [category, setCategory] = useState(transactionCategories[0]);
    const [dropdownStyle, setDropdownStyle] = useState({});
    const selectRef = useRef<null | HTMLDivElement>(null); 
    const dropdownRef = useRef<null | HTMLDivElement>(null); 

    function transformColorName(color:string){
        // to change color name (ex: from 'navy-grey' to 'Navy grey')
        return color.replace("-", ' ').replace(color.charAt(0), color.charAt(0).toUpperCase());
    }
    //to reposition dropdown if not in view when opening
    function handlePosition(){
        if(!selectRef.current || !dropdownRef.current) return; 
        
        const triggerRect = selectRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        // Calculate available space
        const spaceBelow = window.innerHeight - triggerRect.bottom;
        const spaceAbove = triggerRect.top;
        const dropdownHeight = dropdownRect.height;
        // Position dropdown
        const newStyle = {
            top: spaceBelow < dropdownHeight && spaceAbove > dropdownHeight 
            ? `calc(-${dropdownHeight}px - 8px)` // Position above
            : '3.5rem'// Default position below
        };
        setDropdownStyle(newStyle);
    }

    useEffect(() => {
        if (dropdownOpened) {
          handlePosition();
        }
        const handleScrollOrResize = () => {
            if (dropdownOpened) {
            handlePosition();
            }
        };
        window.addEventListener('scroll', handleScrollOrResize);
        window.addEventListener('resize', handleScrollOrResize);
    }, [dropdownOpened]);

    return (
        <>
            <div className="select-element" ref={selectRef}>
                {selectDecorator == 'color tag'? 
                transformColorName(tagColor) 
                : 
                category
                }
            </div>
            <span className={dropdownOpened? "icon-decorator reversed-icon-decorator" : "icon-decorator"}>
                <CarretDownIcon/>
            </span>
            <div className={dropdownOpened? "dropdown display-dropdown":"dropdown"} ref={dropdownRef}
                style={dropdownStyle}>
                <ul>
                   {selectDecorator == "color tag" ? 
                        colorTags.map((color, index) => {
                            return (
                                <li key = {index}
                                onClick={()=>setTagColor(color)}
                                >
                                    <span className="prefix-decorator select-decorator" 
                                    style={{backgroundColor: `var(--${color})`}}>

                                    </span>
                                {transformColorName(color)}</li>
                            );
                        })
                        :  
                        transactionCategories.map((category, index) => {
                            return (
                                <li key = {index}
                                onClick={()=>setCategory(category)}
                                >
                                {category}</li>
                            );
                        })
                       } 
                </ul>
            </div>
            {selectDecorator == "color tag" ? 
                <span className="prefix-decorator select-decorator" 
                style={{backgroundColor: `var(--${tagColor})`}}></span>
                :null
            }
        </>
    )
}