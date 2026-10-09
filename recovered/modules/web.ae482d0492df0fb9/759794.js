/* Recovered shipped factory. Module 759794.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10536740..10537396
 * Raw property SHA-256: 1c8fb3ecce64a33f8671f97ec0fe0ed921805e0b6adf7cfd12df0d37e13d7353
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900);
  n(582128);
  var r = n(478676);
  function a(e) {
    return (
      (e.heading = r.defaultRules.heading),
      (e.lheading = r.defaultRules.lheading),
      (e.list = r.defaultRules.list),
      (e.paragraph = {
        ...e.paragraph,
        react: function (e, t, n) {
          return (0, i.jsx)("p", { children: t(e.content, n) }, n.key);
        },
      }),
      (e.link = {
        ...e.link,
        react: function (e, t, n) {
          let a = {};
          if (null != e.context) {
            let t = e.context[e.target];
            t && t.onClick
              ? ((a.onClick = t.onClick), (a.onContextMenu = t.onContextMenu))
              : (a.onClick = t);
          }
          return (
            null == a.onClick &&
              ((a.href = (0, r.sanitizeUrl)(e.target) ?? void 0), (a.target = "_blank")),
            (0, i.jsx)(
              "a",
              { title: e.title, ...a, rel: "noreferrer", children: t(e.content, n) },
              n.key,
            )
          );
        },
      }),
      e
    );
  }
}
