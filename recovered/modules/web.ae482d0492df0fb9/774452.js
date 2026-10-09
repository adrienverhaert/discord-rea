/* Recovered shipped factory. Module 774452.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4552848..4553145
 * Raw property SHA-256: 0651408649b6c92d46d94348a61e7233557899411d51c93fd74d7ba43afc4f9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => r });
  var i = n(652215);
  function r(e, t, n) {
    let r = new n.constructor(n.toJS());
    return (
      (r.position_ = t.order),
      null != t.nickname && n.type !== i.rbe.DM && (r.name = t.nickname),
      null != t.parentId && t.parentId in e
        ? (r.parent_id = t.parentId)
        : void 0 === r.parent_id && (r.parent_id = null),
      r
    );
  }
}
