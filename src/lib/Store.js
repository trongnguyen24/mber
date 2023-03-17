import { writable } from 'svelte/store';

const data = await fetch('https://lazy-traffic.pockethost.io/api/collections/club/records');
const club = await data.json();

const clubs = writable(club);

export default clubs;
