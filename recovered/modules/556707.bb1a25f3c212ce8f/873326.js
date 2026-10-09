/* Recovered shipped factory. Module 873326.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 309729..310159
 * Raw property SHA-256: 4b0ea121badda5466ce71d71a92112812f7e43ebd9e80ab53eb80887534fd9b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { AS: () => c, aj: () => u, s5: () => l });
  var r = n(780755),
    i = n(272469),
    o = n(968072);
  let a = {},
    s = {};
  function l(e, t) {
    ((a[e] = a[e] || []), a[e].push(t));
  }
  function c(e, t) {
    if (!s[e]) {
      s[e] = !0;
      try {
        t();
      } catch (t) {
        r.T && i.vF.error(`Error while instrumenting ${e}`, t);
      }
    }
  }
  function u(e, t) {
    let n = e && a[e];
    if (n)
      for (let a of n)
        try {
          a(t);
        } catch (t) {
          r.T &&
            i.vF.error(
              `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, o.qQ)(a)}
Error:`,
              t,
            );
        }
  }
}
