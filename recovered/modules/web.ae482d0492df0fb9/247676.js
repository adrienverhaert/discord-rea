/* Recovered shipped factory. Module 247676.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5013114..5013486
 * Raw property SHA-256: 536b92c7b03b5bdf23c7be3f85dd9c2f7d3eaa149f7a0273600682a27b55acbf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(287809),
    r = n(474090),
    a = n(727245);
  n(696101);
  var s = n(652215),
    l = n(202541);
  function o() {
    let { useNitroCapExperiment: e = !1 } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = i.default.getCurrentUser();
    return t?.isStaff()
      ? s.$aF
      : e && (0, r.ki)(t, l.PremiumTypes.TIER_2) && (0, a.J)("getGroupDMRecipientLimit").enabled
        ? 25
        : s.wLU;
  }
}
