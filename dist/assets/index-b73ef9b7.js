(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const w="https://notifications-api.pockethost.io/api/collections/notification/records",P=async()=>{const o=await fetch(w);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()},m="https://notifications-api.pockethost.io/api/files",u="ejdwmidmo2wlcl7",p=(o,n,t,i)=>`${o}/${n}/${t}/${i}`,r=(o,n)=>n.querySelector(o),C=(o,n)=>{const t=o.content.cloneNode(!0),{id:i,notificationType:e,user:s,action:a,group:f,isRead:g,commentedPicture:y,post:_,timestamp:h,userAvatar:E,message:A}=n,x=r(".avatar__img",t),L=r(".user",t),N=r(".action",t),b=r(".timestamp",t),v=r(".notifications__spans",t),l=r(".notification__box",t),S=r(".content__row-01",t);if(x.src=p(m,u,i,E),L.textContent=s,N.textContent=a,b.textContent=h,l.dataset.isread=g?"1":"0",e==="reactions"||e==="groupActivities"){const c=document.createElement("SPAN");c.textContent=`${f}${_}`,c.classList.add(`${f!==""?"group":"post"}`),v.append(c)}if(e==="messages"){const c=document.createElement("P");c.textContent=A,l.append(c)}if(e==="comments"){const c=document.createElement("IMG");c.classList.add("commented-picture"),c.src=p(m,u,i,y),S.append(c)}return parseInt(l.dataset.isread)!==1&&(l.classList.add("notification__box--no-read"),t.querySelector(".notifications__spans").lastElementChild.classList.add("point")),t},q=async(o,n)=>{try{const{items:t}=await P();t.forEach(i=>n.append(C(o,i)))}catch(t){console.error("Error fetching data:",t)}n.click()},k=o=>{const n=o.target,t=".notification__box--no-read";if(n.closest(t)){const i=n.closest(t);i.querySelector(".notifications__spans").lastElementChild.classList.remove("point"),i.classList.remove("notification__box--no-read"),i.dataset.isread="1"}},I=(o,n)=>{const t=Array.from(document.querySelectorAll(o));n.textContent=t.length},O=(o,n)=>{Array.from(document.querySelectorAll(o)).forEach(i=>{i.click()})},d=o=>document.getElementById(o),$=d("notifications"),T=d("notification-template"),R=d("count-notifications"),j=d("mark-all-as-read");$.addEventListener("click",o=>{k(o),I(".notification__box--no-read",R)});j.addEventListener("click",()=>{console.log("click"),O(".notification__box")});q(T,$);