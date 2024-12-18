import InputField from "../../components/inputField/InputField";

export default function Transactions () {
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
    }
    return (
        <section className="transactions">
            <h1>Transactions page</h1>

            {/* div for temporary styles */}
            <div 
            style={{margin: "1rem", display: "flex", flexDirection: "column", gap:"1rem", maxWidth: 380 }}
            >
            <InputField selectElement={false} fieldTitle={'Basic Field'} inputPlaceholder={'Placeholder'} helperText={'Min 3 char'} inputDecorator={'prefix'} onChange={handleChange}/>
            <InputField selectElement={true} fieldTitle={'Name'} inputPlaceholder={'basic'} helperText={'Helper text'} selectDecorator={"color tag"}/>
            </div>
           
        </section>
    );
}