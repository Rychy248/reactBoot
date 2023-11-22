import Section from './tagsComponents/Section';
import Div from './tagsComponents/Div';
import H from './tagsComponents/H';
import A from './tagsComponents/A';

import ParaphsGenerator from './componentsTools/ParaphsGenerator';

export default function Home({ }) {   

    return <Section className="hero" id="home">
        <Div className="hero-banner">
            <H level={1}>continue exploring</H>
                {ParaphsGenerator({number:1})}
            <A href="#tours" className="btn hero-btn">explore tours</A>
        </Div>
    </Section>
};
