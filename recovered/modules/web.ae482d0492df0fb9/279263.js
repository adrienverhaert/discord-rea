/* Recovered shipped factory. Module 279263.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7995980..7996569
 * Raw property SHA-256: 0dc35ebcaf85efa4abdd08fd585e2ae461b4f6100ff1018749f48be73865dcdb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(867051),
    r = n(892842),
    a = n(137903);
  let s = "Note";
  class l extends a.yW {
    static displayName = "NoteStore";
    database = this.addKVDatabase("notes");
    getNote(e) {
      return this.database.get(e);
    }
    stateWrapper() {
      return this.database;
    }
  }
  let o = new l(
    {
      LOGOUT: (e, t) => t.clear(),
      RESET_SOCKET: (e, t) => t.clear(),
      CONNECTION_OPEN: (e, t) => t.clear(),
      OVERLAY_INITIALIZE: (e, t) => t.clear(),
      USER_NOTE_UPDATE: (e, t) => {
        t.set(e.id, (0, i.yE)(s, { loading: !1, note: e.note }));
      },
      USER_NOTE_LOAD_START: (e, t) => {
        t.set(e.userId, (0, i.yE)(s, { loading: !0, note: null }));
      },
    },
    r.P4.getCachedBridgedStoreMode(),
  );
}
