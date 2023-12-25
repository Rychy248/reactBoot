// react imports
import { useState, useEffect } from "react";
// third apis
import {Api, Loader } from "./componentsTools";
// local imports
import { Article, Div, H, I, Img, P, Section, Span } from "./tagsComponents";
import { ParaphsGenerator, SectionTitle } from "./componentsTools";

export default function Tours() {
    const [componentState, setComponentState ] = useState("Loading");
    const [tours, setTours] = useState([])
    
    useEffect(()=>{
        Api("/Tours","Get", {},{},500)
        .then(data =>{
            setComponentState("Loaded")
            setTours(data.tours);
        })
        .catch(err => { throw err; })
        ;
    },[])

    return <Section
    className="section"
    id="tours"
    >
        <SectionTitle title="Featured" subtitle="Tours" />
        <Div className="section-center featured-center">
            {Array.from({length:3},((_,index)=>(
                <Article className={`tour-card ${ componentState !== "Loading" && "fadeOut"}`} key={index}>
                    <Loader className={`tour-loader ${ componentState !== "Loading" && "fadeOut"}`} />
                </Article>
            )))}
            { (componentState !== "Loading")
                && tours.map((tour,index) => (
                    <Article className="tour-card animate-fade" key={index}>
                        <Div className="tour-img-container">
                            <Img src={ tour.img } className="tour-img" alt="" />
                            <P className="tour-date">{ tour.date }</P>
                        </Div>
                        <Div className="tour-info">
                            <Div className="tour-title"> <H level={4}>{ tour.title }</H> </Div>
                            { ParaphsGenerator({number:1}) }
                            <Div className="tour-footer">
                                <P><Span><I className="fas fa-map"></I></Span> { tour.place }</P>
                                <P>{ tour.days } days</P>
                                <P>from ${ tour.cost }</P>
                            </Div>
                        </Div>
                    </Article>
                ))
            }
        </Div>
    </Section>
};