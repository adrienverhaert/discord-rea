/* Recovered shipped factory. Module 191424.
 * Source: recovered/web/assets/7e4c6962db41ed25.js
 * UTF-16 property offsets: 1622..1964
 * Raw property SHA-256: 43ad187ad3d78999e496a15051a397f56113193bb392bdadf4b9fdbfe059836b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => o });
  var n = i(582128),
    l = i(17928),
    s = i(280450),
    a = i(290863),
    r = i(461213),
    d = i(778383);
  let u = [];
  function o(e, t) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      o = (0, l.bG)([r.A, a.A, s.default], () =>
        i ? (s.default.getId() === e ? r.A.getActivities() : a.A.getActivities(e, t)) : u,
      );
    return n.useMemo(() => o.filter(d.A), [o]);
  }
}
