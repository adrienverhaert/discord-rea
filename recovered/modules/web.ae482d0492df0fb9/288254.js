/* Recovered shipped factory. Module 288254.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7603526..7604264
 * Raw property SHA-256: e75da7e3e54b68bf3b3eb06db0a07c4259f17775a1df72f7dfe361094b3ba424
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BV: () => o, IL: () => d, Uf: () => l });
  var i = n(17928),
    r = n(734057),
    a = n(824492);
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    if (null == e) return null;
    if (e.isSpoilerChannel()) return t.didAgree(e.id) ? null : e.id;
    if (null != e.parent_id) {
      let i = n.getChannel(e.parent_id);
      if (null != i && i.isSpoilerChannel() && !t.didAgree(i.id)) return i.id;
    }
    return null;
  }
  function l(e) {
    return (0, i.bG)([a.A, r.A], () => s(e, a.A, r.A), [e]);
  }
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    return null != s(e, t, n);
  }
  function d(e) {
    return (0, i.bG)([a.A, r.A], () => o(e, a.A, r.A), [e]);
  }
}
