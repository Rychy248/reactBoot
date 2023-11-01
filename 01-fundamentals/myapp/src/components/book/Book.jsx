import Author from "./Author"
import Image from "./Image"
import Title from "./Title"


export default function Book({auth, lastName, imgRef, title}) {
    const inlineStyleObject = {
        border:"solid 3px black"
    };

    return <>
        <div className="col">
            <div className="card h-100 text-center d-flex flex-column">
                <Image imgRef={imgRef}/> {/*  card top */}
                <div className="mt-auto">
                    <div
                        className="card-body"
                        style={inlineStyleObject}
                    >
                        <Title title={title}/>
                        <Author name={auth.name} lastName={auth.lastName} />
                    </div>
                </div>
            </div>
        </div>

    </>
};