import{d as i,h as o,o as s,c as n,L as c,_ as l,j as u,E as p,k as _}from"./chunks/framework.b041ce83.js";const m=["src"],f=i({__name:"VideoBackground",props:{path:{}},setup(r){const t=o(),e=o(!1);return(d,a)=>(s(),n("video",{ref_key:"video",ref:t,class:"video",style:c(e.value?{animation:"fadeIn 1.5s"}:{opacity:"0"}),onCanplaythrough:a[0]||(a[0]=()=>e.value=!0),src:d.path,muted:"",autoplay:"",loop:""},null,44,m))}});const h=l(f,[["__scopeId","data-v-53fd940e"]]),k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","navbar":false,"hero":{"name":"Math Notes","text":"Some knowledge of further mathematics.","actions":[{"theme":"brand","text":"Getting Start","link":"/quick-start"},{"theme":"alt","text":"Play Music","link":"javascript:void(0)","id":"player"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),v={name:"index.md"},g=Object.assign(v,{setup(r){return u(()=>{document.querySelectorAll("a.VPButton")[1].addEventListener("click",t=>{t.preventDefault();const e=document.querySelector("#msc");e.paused?e.play():e.pause()})}),(t,e)=>(s(),n("div",null,[p(h,{path:"/math-notes/resources/chise.mp4"}),e[0]||(e[0]=_("audio",{src:"/math-notes/resources/Blooming Moon.mp3",loop:"",id:"msc"},null,-1))]))}});export{k as __pageData,g as default};