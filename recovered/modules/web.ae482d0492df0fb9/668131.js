/* Recovered shipped factory. Module 668131.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6950413..6951077
 * Raw property SHA-256: d514ec7ba1489a4c88833e80e638ead31f5aa3698f1a0c5c3d0696d12004f8db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => i });
  let i = (0, n(196765).v)((e, t) => ({
    responses: {},
    displayedQuestions: {},
    setResponse: (t, n, i) => {
      e((e) => ({ responses: { ...e.responses, [t]: { ...e.responses[t], [n]: i } } }));
    },
    getSurveyResponses: (e) => t().responses[e] ?? {},
    clearSurveyResponses: (t) => {
      e((e) => {
        let n = { ...e.responses };
        delete n[t];
        let i = { ...e.displayedQuestions };
        return (delete i[t], { responses: n, displayedQuestions: i });
      });
    },
    trackDisplayedQuestions: (t, n) => {
      e((e) => {
        let i = new Set(e.displayedQuestions[t] ?? new Set());
        return (
          n.forEach((e) => i.add(e)),
          { displayedQuestions: { ...e.displayedQuestions, [t]: i } }
        );
      });
    },
    getDisplayedQuestions: (e) => {
      let n = t().displayedQuestions[e];
      return null != n ? Array.from(n) : [];
    },
  }));
}
