/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);

// google;
const portalDiv = document.getElementById("map")!;
function initMap() {
  const map = new google.maps.Map(portalDiv, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });
  return map;
}
initMap();

//directionsDisplay.setMap(map);
//AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
