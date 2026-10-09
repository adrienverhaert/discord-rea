/* Recovered shipped factory. Module 540168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5851123..5851830
 * Raw property SHA-256: e7fa6262e8d07cb7e83b394f1c7061fcb6f006376e1fc9d10a46b93726889aab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(268218),
    l = n(586172),
    o = n(969490);
  function d(e) {
    let { text: t, language: r, className: d } = e,
      c = a()(o.kw, "hljs", d);
    function u() {
      return (0, i.jsx)("code", { className: c, children: t });
    }
    return (0, i.jsx)("pre", {
      children: (0, i.jsx)(l.l, {
        location: "PlaintextFilePreview",
        code: t,
        lang: r,
        className: c,
        children: (0, i.jsx)(s.c2, {
          createPromise: () => Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
          webpackId: 981776,
          renderFallback: u,
          render: (e) => {
            if (null == r || !e.hasLanguage(r)) return u();
            let n = e.highlight(r, t, !0);
            return null == n
              ? u()
              : (0, i.jsx)("code", {
                  className: a()(c, n.language),
                  dangerouslySetInnerHTML: { __html: n.value },
                });
          },
        }),
      }),
    });
  }
}
