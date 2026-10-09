/* Recovered shipped factory. Module 343509.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7379053..7379721
 * Raw property SHA-256: 94b1156b0d3c80589493ed0197a37c74c935f89b81e9962a2addf3e476fb9cbc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(73153),
    r = n(439372),
    a = n(927813),
    s = n(85109);
  let l = null;
  class o extends r.A {
    actions = {
      SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
      SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
      SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
    };
    handleUpdates = () => {
      !(function e() {
        null != l && clearTimeout(l);
        let t = s.A.getMessageReminders().find(
          (e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date(),
        );
        if (t?.saveData?.dueAt == null) {
          l = null;
          return;
        }
        let n = Date.now() + a.A.Millis.WEEK;
        t.saveData.dueAt.getTime() > n ||
          (l = setTimeout(() => {
            (i.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: t }), e());
          }, t.saveData.dueAt.getTime() - Date.now()));
      })();
    };
  }
  let d = new o();
}
