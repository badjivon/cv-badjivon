function src_default(t){let persist=()=>{let e;let r=localStorage;return t.interceptor(((s,n,a,o,u)=>{let g=e||`_x_${o}`;let l=storageHas(g,r)?storageGet(g,r):s;a(l);t.effect((()=>{let t=n();storageSet(g,t,r);a(t)}));return l}),(t=>{t.as=r=>{e=r;return t},t.using=e=>{r=e;return t}}))};Object.defineProperty(t,"$persist",{get:()=>persist()});t.magic("persist",persist)}function storageHas(t,e){return null!==e.getItem(t)}function storageGet(t,e){return JSON.parse(e.getItem(t,e))}function storageSet(t,e,r){r.setItem(t,JSON.stringify(e))}var t=src_default;export{t as default};

