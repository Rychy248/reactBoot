import Input from "../elements/Input";

function formHandler(e) {
    alert("Form subbmit pressed");
    e.preventDefault();
};

export default function Form(otherNameForProps) {
    return (<>
        <form onSubmit={formHandler}>
            {
                [
                    { className:"form-control", type: "text", name: "Name", placeholder: "Name" },
                    { className:"form-control", type: "text", name: "LastName", placeholder: "Last Name" },
                    { className:"form-control", type: "number", name: "age", placeholder: "00" },
                ].map((toIn, index) => <Input
                    key={index}
                    // type={toIn.type}
                    // name={toIn.name}
                    // className={toIn.className}
                    // placeholder={toIn.placeholder}
                    {...toIn}
                />)
            }
            {/* children of component called */}
            {otherNameForProps.children}
        </form>
    </>);
};


