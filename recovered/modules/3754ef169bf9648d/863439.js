/* Recovered shipped factory. Module 863439.
 * Source: recovered/web/assets/3754ef169bf9648d.js
 * UTF-16 property offsets: 2023..2342
 * Raw property SHA-256: f4bd378d60fa553e2c919610efdb01a7c68017a03211de1ce0298512d469e223
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => O, z: () => u });
  var c = n(702841),
    r = n(885386),
    i = n(576705),
    E = n(652215);
  function O(e, t) {
    switch (e) {
      case E.P6Q.ALWAYS:
        return !0;
      case E.P6Q.IF_MODERATOR:
        return t;
      case E.P6Q.ON_CLICK:
      default:
        return !1;
    }
  }
  function u(e) {
    let t = (0, c.bG)([i.A], () => i.A.can(E.xBc.MANAGE_MESSAGES, e));
    return !O(r.gs.useSetting(), t);
  }
}
