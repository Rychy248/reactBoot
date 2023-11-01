import Input from "./Input";

export default function FormGen({formInputs, formHandler}) {
    function renderSingleInputs(inputs,otherProperties) {
        return inputs.map((toIn, index) => <Input
            key={index}
            // type={toIn.type} // name={toIn.name} // className={toIn.className} // placeholder={toIn.placeholder}
            {...toIn}
            otherProperties={otherProperties}
        />);
    };

    return (<>
        <form onSubmit={formHandler}  className="mb-4">
            {renderSingleInputs(formInputs.single)}
            {formInputs.groups.map( (group,index) => (
                    <div className="input-group" key={index} >
                        <span className="input-group-text" id={group.groupId}>{group.groupTitle}</span>
                        {renderSingleInputs(group.inputs,group.propertiesForInputs)}
                    </div>
                ))
            }
            <div className="col-12 mt-2">
                <button type="submit" className="btn btn-outline-primary">Add Book</button>
            </div>
        </form>
    </>);
};