/* Recovered shipped factory. Module 224536.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5592789..5593009
 * Raw property SHA-256: 9f0f6abd0678ff2f8756613308b5496da00be83e356d2e27b3aa8569286ef5d7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(976860),
    r = n(71393),
    a = n(379610),
    s = n(652215);
  let l = {
    onOpenHubInvite(e) {
      let { guild: t } = e;
      null != t && (null != r.A.getGuild(t.id) ? (0, i.pX)(s.BVt.CHANNEL(t.id)) : (0, a.A)(e.code));
    },
  };
}
