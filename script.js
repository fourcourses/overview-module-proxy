import http from "k6/http";
export let options = {
  vus: 200,
  duration: "1m"
};

export default function() {
  let res = http.get("http://localhost:4001");
};