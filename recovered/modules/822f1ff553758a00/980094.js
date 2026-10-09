/* Recovered shipped factory. Module 980094.
 * Source: recovered/web/assets/822f1ff553758a00.js
 * UTF-16 property offsets: 24356..24687
 * Raw property SHA-256: 118a004ce4154c9b64effc441161470073810bb3b50e227ea5a357ee98011ba5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Q: () => s });
  var r = n(477900);
  n(582128);
  var i = n(834730),
    a = n(665711),
    l = n(307810);
  function s(e) {
    let { application: t, iconSize: n = 20 } = e;
    return null == t
      ? null
      : (0, r.jsxs)("div", {
          className: l.k,
          children: [
            (0, r.jsx)(a.W, { application: t, iconSize: n }),
            (0, r.jsx)(i.E, { variant: "text-sm/medium", color: "text-muted", children: t.name }),
          ],
        });
  }
}
