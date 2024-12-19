import { useState } from "react";
import InputFieldDiv from "../../types/InputField";
import SelectElement from "./selectElement/SelectElement";
import SearchIcon from "../../assets/images/icon-search.svg?react";

import './inputField.scss';

export default function InputField({selectElement, inputType, inputDecorator, inputPlaceholder, selectDecorator, fieldTitle, helperText, onChange} : InputFieldDiv) {
    const [dropdownOpened, setDropdownOpened] = useState(false); 

    function toggleDropdown(){
        setDropdownOpened(!dropdownOpened); 
    }
    function closeDropdown(){
        setDropdownOpened(false)
    }

    return(
        <div className="input-field">
            {/* Field title if it exists */}
            {fieldTitle ? 
            <p className="field-title">{fieldTitle}</p>
            : null}

            {/* Either input or select element +/- decorators */}
            <div className="input-box" 
                tabIndex={0}
                onClick={toggleDropdown}
                onBlur={closeDropdown}
            >
                {selectElement ?
                    <SelectElement dropdownOpened={dropdownOpened} selectDecorator={selectDecorator}
                    />
                    :
                    <input type={ inputType ? inputType : 'text'} 
                        placeholder={inputPlaceholder}
                        onChange={onChange}
                    >
                    </input>
                }
                {inputDecorator =='prefix' ? 
                    <span className='prefix-decorator'>$</span> 
                    : inputDecorator=='icon' ?
                    <span className="icon-decorator"><SearchIcon/></span> 
                    : null
                }
            </div>

            {/* Helper text */}
            {helperText 
            ? 
            <p className="helper-text">{helperText}</p>
            : null 
            }
        </div>
    );
}