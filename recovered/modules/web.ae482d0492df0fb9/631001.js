/* Recovered shipped factory. Module 631001.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7002500..7002985
 * Raw property SHA-256: a301f37980b8d15b244fa71cf44406502a7a2e7ab0157ea11f095a3ff5526784
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => o }), n(323874), n(14289), n(35956));
  var i = n(877227),
    r = n(839214),
    a = n(866157),
    s = n(652215);
  let l = Object.freeze({ tab: a.NC.ALL }),
    o = (0, r.D)((e) => ({
      ...l,
      initializeFromUrl: (t, n) => {
        let i = new URLSearchParams(t).get(a.L1.TAB);
        (i !== a.NC.PREVIEW_TOOL || n) && null != i && Object.values(a.NC).includes(i)
          ? e({ tab: i })
          : e({ tab: a.NC.ALL });
      },
      setTab: (t) => {
        e({ tab: t });
        let n = new URLSearchParams();
        n.set(a.L1.TAB, t);
        let r = `${s.BVt.QUEST_HOME}?${n.toString()}`;
        (0, i.pX)(r.toString());
      },
    }));
}
