import { people } from "../../../data";

export default function Api(url = "http://some-url", signal) {
  
  return new Promise((res, rej) => {
    const controller = new AbortController();
    const combinedSignal = signal || controller.signal;

    setTimeout(() => {
      if (combinedSignal.aborted) {
        rej(new Error("Solicitud abortada"));
      } else {
        res(people);
      }
    }, 1000);
  });
}
