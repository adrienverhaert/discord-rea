/* Recovered shipped factory. Module 754433.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 302642..303147
 * Raw property SHA-256: 4b1cd1a9c9f573e6c9d10022b57893e7a12f4e3c2b14cbfea9d48715aefe5364
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  let r, i, o;
  n.d(t, { i: () => l, z: () => s });
  var a = n(978862);
  function s(e) {
    let t = a.O._sentryDebugIds;
    if (!t) return {};
    let n = Object.keys(t);
    return o && n.length === i
      ? o
      : ((i = n.length),
        (o = n.reduce((n, i) => {
          r || (r = {});
          let o = r[i];
          if (o) n[o[0]] = o[1];
          else {
            let o = e(i);
            for (let e = o.length - 1; e >= 0; e--) {
              let a = o[e],
                s = a && a.filename,
                l = t[i];
              if (s && l) {
                ((n[s] = l), (r[i] = [s, l]));
                break;
              }
            }
          }
          return n;
        }, {})));
  }
  function l(e, t) {
    let n = s(e);
    if (!n) return [];
    let r = [];
    for (let e of t) e && n[e] && r.push({ type: "sourcemap", code_file: e, debug_id: n[e] });
    return r;
  }
}
