import Form from "./Form";

export default function Gretting({OtherComponent}) {
    return <>
        <h1>¡Welcome!</h1>
        <Form>
            <p>This is child for Form component, passed by the call, its need to be reached by children property inside the Form Component</p>
        </Form>
    </>;
};
