export async function onRequestPost(context) {
  const { request, env } = context;

  let body = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const input = [body.a, body.b, body.c].map(Number);
  const answer = (env.ARG_PASSCODE || "").split(",").map(Number);

  const ok =
    input.length === 3 &&
    answer.length === 3 &&
    input.every((value, index) => value === answer[index]);

  return Response.json({ ok });
}
