import Input from "./Input";

export default function Form(manyInputs) {
    return (<>
        <form onSubmit={"#"}>
            {
                [
                    { className:"form-control", type: "text", name: "Name", placeholder: "Name" },
                    { className:"form-control", type: "text", name: "LastName", placeholder: "Last Name" },
                    { className:"form-control", type: "number", name: "age", placeholder: "00" },
                ].map((toIn, index) => <Input
                    key={index}
                    type={toIn.type}
                    name={toIn.name}
                    className={toIn.className}
                    placeholder={toIn.placeholder}
                />)
            }
            {/* children of component called */}
            {manyInputs.children}
        </form>
    </>);
};