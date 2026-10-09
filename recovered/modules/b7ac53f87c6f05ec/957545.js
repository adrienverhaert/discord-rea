/* Recovered shipped factory. Module 957545.
 * Source: recovered/web/assets/b7ac53f87c6f05ec.js
 * UTF-16 property offsets: 16824..17105
 * Raw property SHA-256: 327ff16d3639f7bb01a8a11f62615f8da097aa795971c1667a9d33de5b91ad3b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { J: () => a, P: () => o }), n(321073));
  var i = n(136722),
    l = n(34457),
    s = n(558393),
    r = n(652215);
  function a(e) {
    return i.X8(e.permissions, r.Lti);
  }
  function o(e, t) {
    let n = [],
      i = s.A.getGuildPermissionSpecMap(e);
    for (let e of r.nfo) (0, l._m)(t, e) && n.push(i[e.toString()].title);
    return n;
  }
}
