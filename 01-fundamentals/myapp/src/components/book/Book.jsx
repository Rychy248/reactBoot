import Author from "./Author"
import Image from "./Image"
import Title from "./Title"

export default function Book({ auth: { name, lastName }, imgRef, title, number }) {
    return (
        <div className="col">
            <div className="card h-100 text-center d-flex flex-column">
            <div className="triangle"> </div>
                <div className="book-number">#{number}</div>
                <Image imgRef={imgRef} />
                <div className="mt-auto">
                    <div className="card-body">
                        <Title title={title} />
                        <Author name={name} lastName={lastName} />
                    </div>
                </div>
            </div>
        </div>
    );
}

