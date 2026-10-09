/* Recovered shipped factory. Module 428558.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 55983..56361
 * Raw property SHA-256: 865bd1ced06f98eca22ac93a1d515e46b994166af8d9be30dc40398d9a52ee8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r });
  var i = n(582128),
    l = n(765671),
    s = n(371794);
  function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, r] = (function () {
        let { ref: e, width: t } = (0, l.Ay)(),
          [n, s] = i.useState();
        return (
          i.useEffect(() => {
            null == n && null != t && s(t);
          }, [n, t]),
          [e, n]
        );
      })();
    return [
      n,
      e?.application_id != null && null != r
        ? (0, s.YE)(e.application_id, e, r, t ? void 0 : "webp")
        : void 0,
    ];
  }
}
