import Axios from "axios";

export function getCourses() {
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve([{ name: "web全栈" }, { name: "web高级" }]);
    //   }, 0);
    // });
    return Axios.get('/api/courses').then((res)=>res.data)
  }