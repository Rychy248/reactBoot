// local imports
import Article from "./tagsComponents/Article"
import Div from "./tagsComponents/Div"
import H from "./tagsComponents/H"
import I from "./tagsComponents/I"
import Section from "./tagsComponents/Section"
import Span from "./tagsComponents/Span"

import { ParaphsGenerator, SectionTitle } from "./componentsTools"

export default function Services() {
    const services = [
        { icon:"fas fa-wallet fa-fw" },
        { icon:"fas fa-tree fa-fw" },
        { icon:"fas fa-socks fa-fw", },
    ]
    return <Section className="section services" id="services">
        <SectionTitle title="Ours" subtitle="services" />
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
