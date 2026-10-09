/* Recovered shipped factory. Module 628137.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7624716..7625322
 * Raw property SHA-256: e8d681e1d538a03c37eb934abd48fd66726b3c4ea79f8190f3c8914c129b275e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(272984),
    a = n(660183);
  let s = {
    [r.M0.TRACK]: 80,
    [r.M0.EPISODE]: 232,
    [r.M0.SHOW]: 232,
    [r.M0.ALBUM]: 352,
    [r.M0.ARTIST]: 352,
    [r.M0.PLAYLIST]: 352,
  };
  function l(e) {
    let { className: t, resourceId: n, resourceType: l } = e;
    return "" === n
      ? null
      : (0, i.jsx)("iframe", {
          className: t ?? void 0,
          src: r.RQ.EMBED(`/${l}/${n}`),
          style: { maxWidth: 400, minWidth: 300, width: "100%", height: s[l] },
          frameBorder: 0,
          sandbox:
            "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          allow: "clipboard-write",
          title: a.intl.string(a.t["0ZB/XE"]),
        });
  }
}
