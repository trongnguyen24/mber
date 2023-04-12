import { w as writable } from "./index2.js";
const data = await fetch("https://lazy-traffic.pockethost.io//api/collections/club/records");
const data2 = await fetch(
  "https://lazy-traffic.pockethost.io//api/collections/club/records?sort=name"
);
const club = await data.json();
const club2 = await data2.json();
const clubs = writable(club.items);
const club2s = writable(club2.items);
export {
  clubs as a,
  club2s as c
};
