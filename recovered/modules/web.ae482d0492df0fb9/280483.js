/* Recovered shipped factory. Module 280483.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3765765..3766187
 * Raw property SHA-256: ed0f31ce2541039b92d01b44aee1ec229adbddea18ec68617ddd694c3e86617b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(451988),
    a = n(192820),
    s = n(696016);
  let l = 0,
    o = new r.Ep();
  function d(e) {
    try {
      a.Ay.getMediaEngine().setClipsUIActive(e);
    } catch (e) {
      s.nx.error("Failed to push clips UI active state to native:", e);
    }
  }
  function c() {
    i.useEffect(
      () => (
        !(function () {
          if (1 === (l += 1)) {
            if (o.isStarted()) return o.stop();
            d(!0);
          }
        })(),
        () =>
          void (
            0 === (l = Math.max(0, l - 1)) &&
            o.start(250, () => {
              0 === l && d(!1);
            })
          )
      ),
      [],
    );
  }
}
