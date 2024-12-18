import InputFieldDiv from "../../types/InputField";
import './inputField.scss';

export default function InputField({selectElement, inputType, inputDecorator, inputPlaceholder, selectDecorator, fieldTitle, helperText, onChange} : InputFieldDiv) {

    return(
        <div className="input-field">
            {/* Field title if it exists */}
            {fieldTitle ? 
            <p className="field-title">{fieldTitle}</p>
            : null}

            {/* Either input or select element +/- decorators */}
            <div className="input-box">
                {selectElement ?
                    <select>
                        <option>this is a select element</option>
                    </select>
                    :
                    <input type={ inputType ? inputType : 'text'} 
                        placeholder={inputPlaceholder}
                        onChange={onChange}
                    >
                    </input>
                }
                {inputDecorator =='prefix' ? 
                    <span className='prefix-decorator'>prefix</span> 
                    : inputDecorator=='icon' ?
                    <span className="icon-decorator">icon</span> 
                    : null
                }
                {selectDecorator == 'color tag'?
                    <span className="color-tag-decorator">color tag</span>
                    : null
                }
            </div>

            {/* Helper text to be displayed when invalid input */}
            {helperText 
            // && invalid
            ? 
            <p className="helper-text">{helperText}</p>
            : null }

        </div>
    );
}