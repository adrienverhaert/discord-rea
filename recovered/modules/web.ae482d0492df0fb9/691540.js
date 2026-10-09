/* Recovered shipped factory. Module 691540.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 933649..934518
 * Raw property SHA-256: cf51b3f3e980d56b4d285b46dc3a58d3108c6bf13cc81e7d61048c5d21fa389b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P0: () => l, VD: () => o, WE: () => s });
  var i = n(196765),
    r = n(121894),
    a = n(652215);
  let s = (0, i.v)(() => ({ currentToastMap: new Map(), queuedToastsMap: new Map() }));
  function l(e) {
    let t = e.options?.appContext ?? a.BRT.APP;
    (0, r.r)(() => {
      s.setState((n) => {
        if (n.currentToastMap.has(t)) {
          let i = new Map(n.queuedToastsMap),
            r = i.get(t) ?? [];
          return (i.set(t, [...r, e]), { ...n, queuedToastsMap: i });
        }
        {
          let i = new Map(n.currentToastMap);
          return (i.set(t, e), { ...n, currentToastMap: i });
        }
      });
    });
  }
  function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.BRT.APP;
    (0, r.r)(() => {
      s.setState((t) => {
        if (0 === (t.queuedToastsMap.get(e) ?? []).length) {
          let n = new Map(t.currentToastMap);
          return (n.delete(e), { ...t, currentToastMap: n });
        }
        let n = new Map(t.currentToastMap),
          i = new Map(t.queuedToastsMap),
          r = i.get(e) ?? [],
          a = r[0];
        return (
          n.set(e, a),
          i.set(e, r.slice(1)),
          { ...t, currentToastMap: n, queuedToastsMap: i }
        );
      });
    });
  }
}
