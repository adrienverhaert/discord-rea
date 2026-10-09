/* Recovered shipped factory. Module 492230.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5908868..5909613
 * Raw property SHA-256: 50cbd793393edffd7b950e10a608f644d2f20aeb3983cbc27879a168527a69ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { o: () => l }), n(582128));
  var i = n(621466),
    r = n(644447),
    a = n(256905),
    s = n(415097);
  function l(e, t, n) {
    let l = {},
      o = {},
      d = {};
    for (let [c, u] of e.entries()) {
      let _ = (0, r.E)({ proxyURL: u.proxyUrl, url: u.url });
      ((l[_] = (r) =>
        (function (e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 ? arguments[4] : void 0;
          (e.preventDefault(),
            (0, i.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, a.R)({
              ...r,
              items: t,
              startingIndex: n,
              location: s ?? "zoomedMediaModalHelper",
            }));
        })(r, e, c, t, n)),
        (o[_] = () => (0, s.Z)(u, e.length > 1)),
        (d[_] = (i) =>
          (0, a.R)({
            ...t,
            items: e.map((e) => (e === u ? { ...e, initialTimeSec: i / 1e3 } : e)),
            startingIndex: c,
            location: n ?? "zoomedMediaModalHelper",
          })));
    }
    return { srcToOnClickOverride: l, srcToHandlePreloadImage: o, srcToSeekOverride: d };
  }
}
