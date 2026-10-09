/* Recovered shipped factory. Module 707653.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 5247..5609
 * Raw property SHA-256: 7c2d895c7a14fceee961cf1b57c17a53ee7251ff638888219d3361cddc9b9bb7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    l = n(867455),
    a = n(406704),
    d = n(652215),
    s = n(660183);
  function o(t) {
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let e = t.threadMetadata?.invitable ?? !0;
    return (0, i.jsx)(r.sL, {
      id: "toggle-thread-invitable",
      label: s.intl.string(s.t.s2rpNf),
      checked: e,
      action: () => l.A.setInvitable(t, !e),
    });
  }
}
