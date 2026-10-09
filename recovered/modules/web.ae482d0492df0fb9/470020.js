/* Recovered shipped factory. Module 470020.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6847482..6848002
 * Raw property SHA-256: 70650efb5b2d835e00b5ab15c23e8b31ef376f504cd4f3aa24272f5c5e708a51
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(762230),
    r = n(807348),
    a = n(232835);
  function s(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
  }
  function l(e, t, n, l) {
    let o = s(l, n);
    if (null != o) return (0, r.N0)(o, o.guild_id ?? "0");
    let d = a.A.getMessage(e, t);
    if (
      null != d &&
      null !=
        (o =
          d?.messageReference?.type === i.S.FORWARD
            ? (function (e, t) {
                let n;
                for (let i of e) {
                  let e = s(i.message?.soundboardSounds, t);
                  if (null != e) {
                    n = e;
                    break;
                  }
                }
                return n;
              })(d?.messageSnapshots ?? [], n)
            : s(d?.soundboardSounds, n))
    )
      return (0, r.N0)(o, o.guild_id ?? "0");
  }
  n(980504);
}
