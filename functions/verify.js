export async function onRequestPost(context) {
 const {request,env}=context;
 const body=await request.json();
 const input=[body.a,body.b,body.c].map(Number);
 const ans=(env.ARG_PASSCODE||"").split(",").map(Number);
 return Response.json({ok:input.every((v,i)=>v===ans[i])});
}