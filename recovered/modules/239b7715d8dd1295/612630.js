/* Recovered shipped factory. Module 612630.
 * Source: recovered/web/assets/239b7715d8dd1295.js
 * UTF-16 property offsets: 95..667
 * Raw property SHA-256: 1abef34e91905e4edd75c9e4603844b289a2b82ba0c09c3f7b2640c77a75865d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  r.d(e, { A: () => h });
  var o = r(582128),
    i = r(17928),
    s = r(636537),
    n = r(73153),
    c = r(279263),
    d = r(652215);
  function h(t) {
    let e = (0, i.bG)([c.A], () => c.A.getNote(t));
    return (
      o.useEffect(() => {
        null == e && a(t);
      }, [e, t]),
      e ?? { loading: !0, note: null }
    );
  }
  async function a(t) {
    n.h.dispatch({ type: "USER_NOTE_LOAD_START", userId: t });
    try {
      let { body: e } = await s.Bo.get({
        url: d.Rsh.NOTE(t),
        oldFormErrors: !0,
        rejectWithError: !0,
      });
      if (e.note_user_id !== t) throw Error("Invalid response from server");
      n.h.dispatch({ type: "USER_NOTE_UPDATE", id: t, note: e.note });
    } catch (e) {
      n.h.dispatch({ type: "USER_NOTE_UPDATE", id: t });
    }
  }
}
