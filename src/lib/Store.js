import { writable } from 'svelte/store';
// import club from '$lib/data.json';

const data = await fetch('http://127.0.0.1:8090/api/collections/club/records');
const data2 = await fetch('http://127.0.0.1:8090/api/collections/club/records?sort=name');

const club = await data.json();
const club2 = await data2.json();

const clubs = writable(club.items);
const club2s = writable(club2.items);

export { clubs, club2s };
