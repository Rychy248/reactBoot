import A from './tagsComponents/A';
import Article from "./tagsComponents/Article";
import Div from './tagsComponents/Div';
import H from "./tagsComponents/H";
import Img from './tagsComponents/Img';
import Section from './tagsComponents/Section';
import Span from './tagsComponents/Span';

import ParaphsGenerator from './componentsTools/ParaphsGenerator';

export default function About({ }) {   
    const imgAbout = require( `../imgs/about.jpeg`)
    
    return <Section className="section" id="about">
        <Div className="section-title">
            <H level={2} >about <Span>us</Span></H>
        </Div>
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
                { ParaphsGenerator({number:2}) }
                <A href="#" className="btn">read more</A>
            </Article>
        </Div>
    </Section>
};
