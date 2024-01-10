import { data as singlePeople, people } from "../data";

/**
 * 
 * @param {{ }} dataReturn Data to return by the API
 * @param { Number } time the supossed time taked by the API
 * @returns { Promise }
 */
function Caller({ dataReturn={}, time=1000, signal=undefined }) {
  // Api Timer Simulation
  return new Promise ((res, rej)=>{
    const controller = new AbortController();
    const combinedSignal = signal || controller.signal;
    
    const abortErrorResponse = {
      name:"AbortError",
      error: new Error("Request aborted"),
      aborted:true
    };

    const timeOutId = setTimeout(() => {
      if (combinedSignal.aborted) {
        rej(abortErrorResponse);
      } else {
        res(dataReturn);
      };
    }, time);

    // Clean: cancel the setTimeout if the abortSignal, is triggered 
    combinedSignal.addEventListener("abort", () => {
      clearTimeout(timeOutId);
      rej(abortErrorResponse);
    });

  });
};

function FetchDataFromGitUsers(time =1000, signal=undefined) {
  return Caller({
    dataReturn:require("../02-useEffect/04-fetch-data"),
    time:time,
    signal:signal
  });
};

function FetchPeople(time =1000, signal=undefined) {
  return Caller({
    dataReturn:people,
    time:time,
    signal:signal
  });
};

function SinglePeople(time =1000, signal=undefined) {
  return Caller({
    dataReturn:singlePeople,
    time:time,
    signal:signal
  });
};



function Api(endpoint, method="Get", time=1000, signal=undefined, headers={}, body={} ) {
  const avaibleEndpoints = {
    "/FetchDataFromGitUsers-part2-useEffect":{
      Get:FetchDataFromGitUsers,
    },
    "/FetchPeople-part5-components":{
      Get:FetchPeople,
    },
    "/FetchSinglePeople-part6-forms":{
      Get:SinglePeople,
    },
  };
  
  return avaibleEndpoints[endpoint][method](time, signal);
};

export default Api;