/* Recovered shipped factory. Module 448767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5971378..5971921
 * Raw property SHA-256: 2db5ff27db7d84b625f325036861edfc43c750bd55c77e7ec910054dc54cff9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c_: () => c, dn: () => l, iz: () => d, k5: () => o, tq: () => s });
  var i = n(721779),
    r = n(659674),
    a = n(581619);
  let s = { linkCount: 0, onlyLinks: !1 };
  function l(e, t) {
    let n = 0;
    for (let i of e) {
      if (!t(i)) return { linkCount: n, onlyLinks: !1 };
      n += 1;
    }
    return { linkCount: n, onlyLinks: !0 };
  }
  function o(e) {
    if (1 !== e.length) return !1;
    let t = e[0];
    return a.h5.has(t.type) && (0, r.NV)(t);
  }
  function d(e) {
    let { linkCount: t, onlyLinks: n } = e;
    return n && 1 === t;
  }
  function c(e, t) {
    let { onlyLinkContent: n, stripGameServerShareLinks: r } = t;
    return (!!n && null != (0, i.ts)(e)) || (r && null != (0, i.$9)(e));
  }
}
