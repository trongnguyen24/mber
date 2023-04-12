import{w as u}from"./singletons.0d3e7b8e.js";import"./index.1b571520.js";const d=await fetch("https://lazy-traffic.pockethost.io//api/collections/club/records"),b=await fetch("https://lazy-traffic.pockethost.io//api/collections/club/records?sort=name"),$=await d.json(),h=await b.json(),x=u($.items),_=u(h.items);function y(s){const t=s-1;return t*t*t+1}function j(s,{delay:t=0,duration:r=400,easing:e=y,x:i=0,y:f=0,opacity:c=0}={}){const o=getComputedStyle(s),a=+o.opacity,l=o.transform==="none"?"":o.transform,p=a*(1-c);return{delay:t,duration:r,easing:e,css:(m,n)=>`
			transform: ${l} translate(${(1-m)*i}px, ${(1-m)*f}px);
			opacity: ${a-p*n}`}}function k(s,{delay:t=0,duration:r=400,easing:e=y,start:i=0,opacity:f=0}={}){const c=getComputedStyle(s),o=+c.opacity,a=c.transform==="none"?"":c.transform,l=1-i,p=o*(1-f);return{delay:t,duration:r,easing:e,css:(m,n)=>`
			transform: ${a} scale(${1-l*n});
			opacity: ${o-p*n}
		`}}export{x as a,_ as c,j as f,k as s};
