
import Section from "./tagsComponents/Section";
import Div from "./tagsComponents/Div";
import Article from "./tagsComponents/Article";
import Span from "./tagsComponents/Span";
import Img from "./tagsComponents/Img";
import H from "./tagsComponents/H";
import P from "./tagsComponents/P";
import I from "./tagsComponents/I";

import ParaphsGenerator from "./componentsTools/ParaphsGenerator";

export default function Tours({ }) {

    const imgTour1 =  require("../imgs/tour-1.jpeg");
    const imgTour2 =  require("../imgs/tour-2.jpeg");
    const imgTour3 =  require("../imgs/tour-3.jpeg");
    const imgTour4 =  require("../imgs/tour-4.jpeg");
    
    let tours = [
        { img:imgTour1, days:6, cost:2100, date:"august 26th, 2020", title:"Tibet Adventure", place:"China"},
        { img:imgTour2, days:11, cost:1400, date:"october 1th, 2020", title:"Best of java", place:"Indonesia"},
        { img:imgTour3, days:8, cost:5000, date:"september 15th, 2020", title:"Explore hong kong", place:"Hong kong"},
        { img:imgTour4, days:20, cost:3300, date:"December 5th, 2019", title:"Kenya Highlights", place:"Kenya"},
    ];

    return <Section className="section" id="tours">
        <Div className="section-title">
            <H level={2}>featured <Span>tours</Span></H>
        </Div>

        <Div className="section-center featured-center">
            {tours.map((tour,index) => <Article className="tour-card">
                    <Div className="tour-img-container">
                        <Img src={ tour.img } className="tour-img" alt="" />
                        <P className="tour-date">{ tour.date }</P>
                    </Div>
                    <Div className="tour-info">
                        <Div className="tour-title">
                            <H level={4}>{ tour.title }</H>
                        </Div>
                        { ParaphsGenerator({number:1}) }
                        <Div className="tour-footer">
                            <P><Span><I className="fas fa-map"></I></Span> { tour.place }</P>
                            <P>{ tour.days } days</P>
                            <P>from ${ tour.cost }</P>
                        </Div>
                    </Div>
                </Article>
            )}
        </Div>
    </Section>
};