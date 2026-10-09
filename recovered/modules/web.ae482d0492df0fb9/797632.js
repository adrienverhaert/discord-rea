/* Recovered shipped factory. Module 797632.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6951078..6951384
 * Raw property SHA-256: cc3aa66a0a504b4f86e71ef47949f6ce07705b77ffdafe97a337c4ebc24ad962
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = { surveys: new Map() };
  class s extends i.Ay.Store {
    static displayName = "QualtricsStore";
    getSurvey(e) {
      return a.surveys.get(e) ?? null;
    }
  }
  let l = new s(r.h, {
    QUALTRICS_SURVEY_FETCH_SUCCESS: function (e) {
      a.surveys.set(e.surveyId, e.surveyDetails);
    },
  });
}
