/* Recovered shipped factory. Module 841117.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9883653..9884189
 * Raw property SHA-256: 48c8f712842917501428d987d4764ff1a424fa546521442d4b7ec9c47caa2805
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Cu: () => a, eU: () => i, sq: () => s });
  let i = (e) => new Promise((t) => setTimeout(t, e)),
    r = () => Promise.resolve();
  function a(e) {
    r = e;
  }
  async function s(e) {
    let { createPromise: t, webpackId: a, name: s } = e,
      l = 500,
      o = 0;
    for (;;)
      try {
        return (
          performance.mark("importWithRetry:start", { detail: { webpackId: a, name: s } }),
          await t()
        );
      } catch (e) {
        if ((console.log(e), a in n.c))
          throw (
            console.log(
              "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
            ),
            e
          );
        if (o >= 50) throw e;
        (await i(l), await r(), (l = Math.min(5e3, 2 * l)), o++);
      }
  }
}
