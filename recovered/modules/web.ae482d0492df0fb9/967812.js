/* Recovered shipped factory. Module 967812.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2643709..2643939
 * Raw property SHA-256: 35dc1a1c4e1b0d723829d5d3c22e4c3d342a26f52918da34a6b87354bdf441cb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(795816),
    a = n(170148),
    s = n(641703);
  function l(e, t) {
    let n = (0, a.z)(),
      l = (0, s.A)(t),
      o = (null != e && "" !== e) || l;
    return (
      i.useEffect(() => {
        o && n && (0, r.LV)({ guildId: e });
      }, [e, n, o]),
      o && n
    );
  }
}
