/* Recovered shipped factory. Module 107195.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2731337..2731807
 * Raw property SHA-256: 67eb6bf0f1c698b29aab71e8504be139b01708eb052b0d540929a7bf653d4cbb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ce: () => o, I4: () => l, K2: () => a, Yz: () => s });
  var i = n(323889);
  let r = 6 * n(927813).A.Millis.HOUR;
  function a(e) {
    if (null == e) return null;
    switch (e.type) {
      case i.p.QUEST:
        return e.questId;
      case i.p.BOUNTY:
        return e.bounty.id;
      case i.p.QUEST_HOME_HERO:
        return e.questHomeHero.id;
    }
  }
  function s(e) {
    return e?.type === i.p.QUEST ? e.questId : null;
  }
  function l(e) {
    return e?.type === i.p.BOUNTY ? e.bounty : null;
  }
  function o(e) {
    if (null == e) return r;
    let t = 1e3 * e;
    return t < r && t > 0 ? t : r;
  }
}
