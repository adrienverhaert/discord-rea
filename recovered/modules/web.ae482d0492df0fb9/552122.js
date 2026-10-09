/* Recovered shipped factory. Module 552122.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5583166..5583838
 * Raw property SHA-256: 945b9237b1d9f278bebd440e2a1da3a52e486592338c0f137c956c8dd423e6b7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(771527);
  function r() {
    let e = i.A.getIsExperimentEligible();
    return s() && e;
  }
  function a() {
    let e = i.A.useIsExperimentEligible();
    return s() && e;
  }
  function s() {
    let e = Date.now();
    return e >= i.A.startTimeMs && e <= i.A.endTimeMs;
  }
  let l = {
    isEligible: r,
    useHolidaySoundpack: function () {
      return a() && null != i.A.soundpack && null != i.A.soundpackLabel
        ? { soundpack: i.A.soundpack, soundpackLabel: i.A.soundpackLabel }
        : null;
    },
    useIsEligible: a,
    getAppSpinnerSources: function () {
      return s() ? i.A.appSpinnerSources : null;
    },
    getLoadingTips: function () {
      return s() ? i.A.getLoadingTips?.() : null;
    },
    getHolidaySoundpack: function () {
      return r() && null != i.A.soundpack ? i.A.soundpack : null;
    },
  };
}
