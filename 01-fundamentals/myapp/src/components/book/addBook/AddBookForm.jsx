import { useState } from "react";
import FormGen from "../../elements/FormGen";

export default function AddBookForm({setBookList}) {
    const 
        [title,setTitle] = useState(""),
        [imgRef,setImgRef] = useState(""),
        [authName,setAuthName] = useState(""),
        [authLastName,setAuthLastName] = useState("")
    ;
    const formInputs = {
        single:[
            { state:title,setState:setTitle, className:null, type: "text", name: "title", placeholder: "Book title"},
            { state:imgRef,setState:setImgRef, className:null, type: "text", name: "img-ref", placeholder: "https://image-url.com" }
        ],
        groups:[
            {
                groupTitle:"Author",
                groupId:"auth-data",
                propertiesForInputs:{"aria-describedby":"auth-data"},
                inputs:[
                    { state:authName, setState:setAuthName, className:null, type: "text", name: "auth-name", placeholder: "name"},
                    { state:authLastName, setState:setAuthLastName, className:null, type: "text", name: "auth-last-name", placeholder: "last name"}
                ]
            }
        ]
    };


    function formHandler(e) {
        e.preventDefault();

        const newBook = {
            title: title,
            imgRef: imgRef,
            auth: {
                name: authName,
                lastName: authLastName,
            }
        };
    
        setTitle("");
        setImgRef("");
        setAuthName("");
        setAuthLastName("");

        setBookList((preBookList) => [...preBookList, newBook]);

        alert("Form subbmit pressed");
    };
    
    return (<>
        <FormGen
            formHandler={formHandler}
            formInputs={formInputs}
        />
    </>);
};