/* Recovered shipped factory. Module 271597.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3755394..3756275
 * Raw property SHA-256: 0aa70db671a719153364c5a65390c41651e5f623aefcab242f94e779e4ac7f61
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => l });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(792852),
    s = n(696016);
  function l() {
    let { initialEditingClipId: e, selectedGameId: t } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      { resetAll: l, setGameFacet: o } = a.P.getState();
    (l(),
      null != t && o(t),
      (0, r.openModalLazy)(
        async () => {
          let { default: t } = await Promise.all([
            n.e("459368"),
            n.e("821717"),
            n.e("269714"),
            n.e("19385"),
            n.e("718955"),
            n.e("126301"),
            n.e("123727"),
            n.e("498167"),
            n.e("895840"),
            n.e("228767"),
            n.e("323079"),
            n.e("437655"),
            n.e("430877"),
            n.e("641794"),
            n.e("914553"),
            n.e("586467"),
            n.e("875842"),
            n.e("203930"),
            n.e("903663"),
            n.e("496268"),
            n.e("466147"),
            n.e("507406"),
            n.e("501962"),
            n.e("583518"),
            n.e("974049"),
            n.e("231782"),
            n.e("352566"),
            n.e("793784"),
            n.e("689160"),
            n.e("520342"),
            n.e("650676"),
          ]).then(n.bind(n, 272351));
          return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
        },
        { modalKey: s.nm },
      ));
  }
}
