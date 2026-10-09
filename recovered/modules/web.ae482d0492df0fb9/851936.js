/* Recovered shipped factory. Module 851936.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7053067..7053521
 * Raw property SHA-256: 6051fcd84e890feaa7b86a906a0453cf3b35d91b2e928ef8e2a17c6f01cbac53
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => s });
  var i = n(626584),
    r = n(111162),
    a = n(818348);
  function s() {
    let { quest: e, location: t } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = r.default.isLoggingQuestEvents,
      s = e?.config.messages.questName,
      l = null != t ? `-${t}` : "",
      o = null != s ? `-${s})` : "",
      d = `QuestLogger${l}${o}`,
      c = new i.A(d);
    return {
      log: n ? c.log : a.tE,
      warn: n ? c.warn : a.tE,
      error: n ? c.error : a.tE,
      info: n ? c.info : a.tE,
      verbose: n ? c.verbose : a.tE,
      trace: n ? c.trace : a.tE,
    };
  }
}
