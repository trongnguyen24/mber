import { writable } from 'svelte/store';
import club from '$lib/data.json';

// const data = await fetch('https://lazy-traffic.pockethost.io/api/collections/club/records');
// const club = await data.json();

const clubs = writable(club);

export default clubs;
