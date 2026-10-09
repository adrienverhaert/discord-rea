/* Recovered shipped factory. Module 759366.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7003404..7004130
 * Raw property SHA-256: 9ebebf925f9187a25f91e339d7f61f89ce346e1b9d9018a65a279f96347d1cec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(935208);
  let s = new Set(),
    l = !1;
  ((s = new Set()), (l = !1));
  class o extends i.Ay.PersistedStore {
    static displayName = "UnenrolledActivityQuestStore";
    static persistKey = "UnenrolledActivityQuestStore";
    initialize(e) {
      ((s = new Set(e?.dismissedQuestIds ?? [])), (l = e?.autoEnroll ?? !1));
    }
    getState() {
      return { dismissedQuestIds: [...s], autoEnroll: l };
    }
    isDismissed(e) {
      return null != e && s.has(e);
    }
    getDismissedQuestIds() {
      return s;
    }
  }
  let d = new o(r.h, {
    UNENROLLED_ACTIVITY_QUEST_DISMISS: function (e) {
      return (
        s.size >= 20 &&
          (s = new Set(
            Array.from(s)
              .sort(a.default.compare)
              .slice(Math.floor(10))
              .map((e) => e.toString()),
          )),
        s.add(e.questId),
        !0
      );
    },
    UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function (e) {
      return ((l = e.autoEnroll), !0);
    },
  });
}
