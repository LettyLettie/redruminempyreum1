export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();

    const input = [body.a, body.b, body.c].map(Number);
    const answer = (env.ARG_PASSCODE || "").split(",").map(Number);

    const ok =
      input.length === 3 &&
      answer.length === 3 &&
      input.every((v, i) => v === answer[i]);

    return Response.json({ ok });
  } catch (error) {
    return Response.json({ ok: false }, { status: 400 });
  }
}
