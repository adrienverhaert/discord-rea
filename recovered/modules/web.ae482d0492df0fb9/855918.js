/* Recovered shipped factory. Module 855918.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5268375..5268770
 * Raw property SHA-256: cd0037c85e4f3e255831d41e77d9d9c3f2995aa2395055d714ade46ca92bf94e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AN: () => l, Uj: () => o, iR: () => s });
  var i = n(136722),
    r = n(34457),
    a = n(652215);
  function s(e) {
    return (0, r._m)(e, a.xBc.VIEW_CHANNEL);
  }
  function l(e, t) {
    return (
      null != t &&
      (!!i.zy(t.deny, a.xBc.VIEW_CHANNEL) || (e.isGuildVocal() && i.zy(t.deny, a.xBc.CONNECT)))
    );
  }
  function o(e, t) {
    return (
      !(null == t || l(e, t)) &&
      !!i.zy(t.allow, a.xBc.VIEW_CHANNEL) &&
      (!e.isGuildVocal() || i.zy(t.allow, a.xBc.CONNECT))
    );
  }
}
