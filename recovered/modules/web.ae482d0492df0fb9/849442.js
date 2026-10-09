/* Recovered shipped factory. Module 849442.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4113077..4113533
 * Raw property SHA-256: f00d3683b454ecb278032633a2d4997613d442dea7ef8d4bd2a1950762e0749b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $d: () => o, HZ: () => u, Hc: () => c });
  var i = n(582128);
  let r = new Set(),
    a = new Set(),
    s = [];
  function l() {
    for (let e of ((s = Array.from(r)), a)) e();
  }
  function o(e) {
    let t = !1;
    for (let n of e) r.has(n) || (r.add(n), (t = !0));
    t && l();
  }
  function d() {
    return s;
  }
  function c() {
    let [e, t] = i.useState(d);
    return (
      i.useLayoutEffect(() => {
        var e;
        return (
          (e = () => t(d())),
          a.add(e),
          () => {
            a.delete(e);
          }
        );
      }, []),
      e
    );
  }
  function u(e) {
    i.useLayoutEffect(() => {
      null != e && (r.has(e) || (r.add(e), l()));
    }, [e]);
  }
}
