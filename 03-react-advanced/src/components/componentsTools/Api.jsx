/**
 * 
 * @param {String} linksClassName it's the className for all the links
 * @param {[]} links they're the list of links to generate
 * @returns 
 */
function __linksListBuilder({ linksClassName, links=["home", "about", "services", "tours"]}) {
  return links.map((item)=> ({
    href:`#${item}`,
    className:linksClassName,
    children:{ textInner:item}
  }));
};

/**
 * 
 * @param {String} iconsClassName it's the className for all the icons
 * @param {[]} icons they're the list of icons to generate
 * @returns 
 */
function __IconListBuilder({
  iconsClassName,
  icons=[
    {href:"https://www.twitter.com", i:"fab fa-facebook"},
    {href:"https://www.twitter.com", i:"fab fa-twitter"},
    {href:"https://www.twitter.com", i:"fab fa-squarespace"}
  ]
}) {
  return icons.map(({href, i},index)=> ({
    href:href,
    target:"_blank",
    className:iconsClassName,
    children:{ i:{ className:i}}
  }));
};

/**
 * 
 * @param {{ }} dataReturn Data to return by the API
 * @param { Number } time the supossed time taked by the API
 * @returns { Promise }
 */
function Caller({ dataReturn={}, time=1000 }) {
  // Api Timer Simulation
  return new Promise (res =>  setTimeout(() => res(
    dataReturn
  ), time));
};

/**
 * 
 * @param { Number } time The supossed time taked by the API
 * @returns 
 */
function FetchNavData( time=1000 ) {
  // Call api simulating
  return Caller({
    dataReturn:{
      // const navData = { // eachItem of the list is an anchor
      options:{
        ulData:{ className:"nav-links", id:"nav-links" },
        items:__linksListBuilder({ linksClassName:"nav-link" }),
      },
      icons:{
        ulData:{ className:"nav-icons" },
        items:__IconListBuilder({ iconsClassName:"nav-icon" })
      }
    },
    time:time
  });
};

/**
 * 
 * @param { Number } time The supossed time taked by the API
 * @returns 
 */
function FetchFooterData( time=1000 ) {
  // Call api simulating
  return Caller({
    dataReturn: {// const navData = { // eachItem of the list is an anchor
      options:{
        ulData:{ className:"footer-links" },
        items:__linksListBuilder({ linksClassName:"footer-link" })
      },
      icons:{
        ulData:{ className:"footer-icons" },
        items:__IconListBuilder({ iconsClassName:"footer-icon" })
      }
    },
    time:time
  });
};

function GetTour(time=1000) {
    const [imgTour1, imgTour2, imgTour3, imgTour4] = [
        require("../../imgs/tour-1.jpeg"),
        require("../../imgs/tour-2.jpeg"),
        require("../../imgs/tour-3.jpeg"),
        require("../../imgs/tour-4.jpeg")
    ];
    const tours = [
        { img:imgTour1, days:6, cost:2100, date:"august 26th, 2020", title:"Tibet Adventure", place:"China"},
        { img:imgTour2, days:11, cost:1400, date:"october 1th, 2020", title:"Best of java", place:"Indonesia"},
        { img:imgTour3, days:8, cost:5000, date:"september 15th, 2020", title:"Explore hong kong", place:"Hong kong"},
        { img:imgTour4, days:20, cost:3300, date:"December 5th, 2019", title:"Kenya Highlights", place:"Kenya"},
    ];

  return Caller({
    dataReturn:{tours:tours},
    time:time
  });
};

function Api(endpoint, method="Get", headers={}, body={}, time=1000 ) {
  const avaibleEndpoints = {
    "/FetchNavData":{
      Get:FetchNavData,
    },
    "/FetchFooterData":{
      Get:FetchFooterData,
    },
    "/Tours":{
      Get:GetTour,
    },
  };
  
  return avaibleEndpoints[endpoint][method](time);
};

export default Api;