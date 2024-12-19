import React from "react";

export default interface InputFieldDiv{
selectElement: boolean;  
inputType?: 'text' | 'password'; 
inputDecorator?: 'basic' | 'prefix' | 'icon';
inputPlaceholder?: string;
selectDecorator?: 'basic' | 'color tag';
fieldTitle?: string;
helperText?: string;
onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void; 
};