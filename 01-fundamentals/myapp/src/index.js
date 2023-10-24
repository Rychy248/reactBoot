import React from "react";
import ReactDOM from "react-dom/client";
function Input(props) {
    return(<>
    <input type={props.type} placeholder={props.placeholder}></input>
    </>);
};

function Form(manyInputs) {
    return(<>
        <form onSubmit={"#"}>
            {
                [
                    {type:"text",name:"Name",placeholder:"Name"},
                    {type:"text",name:"LastName",placeholder:"Last Name"},
                    {type:"number",name:"age",placeholder:"00"},
                ].map(toIn => <Input
                    type={toIn.type}
                    name={toIn.name}
                    placeholder={toIn.placeholder}
                ></Input> )
            }
        </form>
    </>);
};

function Gretting(otherComponent) {
    return(
        <>
        <h1>Hello world!</h1>
        <Form></Form>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Gretting/>);