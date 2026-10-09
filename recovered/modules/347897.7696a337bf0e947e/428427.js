/* Recovered shipped factory. Module 428427.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 827213..827980
 * Raw property SHA-256: 615ca7861d79fa0a491b944e055fd4a8dc15066f22e6ee989402a482fb269e5a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(854970),
    i = r(795734),
    o = r(906046)("String.prototype.replace"),
    a = /^\s$/.test("\u180E"),
    s = a
      ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
      : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
    l = a
      ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
      : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
  e.exports = function () {
    return o(o(i(n(this)), s, ""), l, "");
  };
}
