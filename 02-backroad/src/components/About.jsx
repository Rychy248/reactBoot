// local imports
import { A, Article, Div,  H, Img, Section, } from './tagsComponents';
import { ParaphsGenerator, SectionTitle } from './componentsTools';
// --static
const imgAbout = require( `../imgs/about.jpeg`)
export default function About() {   
    return <Section className="section" id="about">
        <SectionTitle title="About" subtitle="Us" />
        <Div className="section-center about-center">
            <Div className="about-img">
                <Img
                    // src={require(`../imgs/about.jpeg`)}
                    src={ imgAbout }
                    className="about-photo"
                    alt="awesome beach"
                />
            </Div>
            <Article className="about-info">
                {/* <h3>explore the difference</h3> */}
                <H level={3}>explore the difference</H>
                {/* { ParaphsGenerator(2).map((parr,index)=> parr) } */}
                { ParaphsGenerator({number:1}) } {/* Option 1 to use a component */}
                <ParaphsGenerator number={1} />  {/* Option 2 to use a component */}
                <A href="#" className="btn">read more</A>
            </Article>
        </Div>
    </Section>
};
