/* Recovered shipped factory. Module 36412.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5462657..5463126
 * Raw property SHA-256: 4718bd508d839e86ea8cb4affb8331d68bdb1ed0a14f33909fb0e86f0c890003
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { M: () => o, y: () => l }), n(321073));
  var i = n(71393),
    r = n(403362),
    a = n(652215),
    s = n(660183);
  function l(e) {
    let t = e.children
        .map((e) => {
          let t = e.id,
            n = i.A.getGuild(t);
          return null != n ? n.name : null;
        })
        .filter(r.Vq),
      n = 2 * a.F05,
      s = [];
    for (let e of t) (e.length < n || 0 === s.length) && (s.push(e), (n -= e.length));
    return `${s.join(", ")}${s.length < t.length ? ", ..." : ""}`;
  }
  function o(e) {
    if (null != e.name && "" !== e.name) return e.name;
    let t = l(e);
    return "" !== t ? t : s.intl.string(s.t.xV9hVh);
  }
}
