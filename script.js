let fail=0;

for(let s of document.querySelectorAll("select")){
 for(let i=1;i<=99;i++){
  let o=document.createElement("option");
  o.value=i;
  o.text=String(i).padStart(2,"0");
  s.appendChild(o);
 }
}

unlock.onclick=async()=>{
 let res=await fetch("/verify",{method:"POST",headers:{"Content-Type":"application/json"},
 body:JSON.stringify({a:n1.value,b:n2.value,c:n3.value})});
 let d=await res.json();

 if(!d.ok){
  fail++;
  lock.classList.add("shake");
  setTimeout(()=>lock.classList.remove("shake"),300);
  if(fail>=3) unlock.disabled=true;
  return;
 }

 lock.classList.add("hidden");
 story.classList.remove("hidden");
 show();
};

let pages=[
["你想起一些許久之前沒有留意到的事。"]
];

let p=0,l=0,typing=false,full=false;

function show(){
 box.innerHTML="";
 p=0;l=0;
 nextLine();
}

async function type(el,text){
 typing=true;
 el.textContent="";
 for(let c of text){
  if(full){el.textContent=text;break;}
  el.textContent+=c;
  await new Promise(r=>setTimeout(r,20));
 }
 typing=false;
 full=false;
}

async function nextLine(){
 if(typing){full=true;return;}

 if(l>=pages[p].length){
  p++;
  l=0;
  box.innerHTML="";
  if(p>=pages.length){
    box.innerHTML="<button onclick='location.reload()'>RESTART</button>";
    return;
  }
 }

 let ptag=document.createElement("p");
 box.appendChild(ptag);
 await type(ptag,pages[p][l++]);
}

next.onclick=nextLine;
