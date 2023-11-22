import P from "../tagsComponents/P";

export default function ParaphsGenerator({ number, className, ...otherProps } ) {
    let paragraphs = [];
    for (let i = 0; i < number; i++) {
        paragraphs.push(
        <P key={i} className={className} {...otherProps}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
        </P>)
    };
    return paragraphs;
};