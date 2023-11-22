import Section from "./tagsComponents/Section"
import Div from "./tagsComponents/Div"
import H from "./tagsComponents/H"
import Span from "./tagsComponents/Span"
import Article from "./tagsComponents/Article"
import I from "./tagsComponents/I"

import ParaphsGenerator from "./componentsTools/ParaphsGenerator"

export default function Services({ }) {
    const services = [
        { icon:"fas fa-wallet fa-fw" },
        { icon:"fas fa-tree fa-fw" },
        { icon:"fas fa-socks fa-fw", },
    ]
    return <Section className="section services" id="services">
        <Div className="section-title">
            <H level={2}>our <Span>services</Span></H>
        </Div>
        <Div className="section-center services-center">

            {services.map((service,index)=>{
                return <Article className="service" key={index}>
                    <Span className="service-icon"><I className={service.icon}></I></Span>
                    <Div className="service-info">
                        <H level={4} className="service-title">saving money</H>
                        { ParaphsGenerator({number:1, className:"service-text"}) }
                    </Div>
                </Article>
            })}

        </Div>
    </Section>
};
