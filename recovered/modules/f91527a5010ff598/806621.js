/* Recovered shipped factory. Module 806621.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 85686..86528
 * Raw property SHA-256: 4dcb42c4a5e0ff1357b03193024ab6359d6a68cf45d8cd587fd1b972490603b3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { r: () => h });
  var l = n(582128),
    i = n(17928),
    s = n(380335),
    a = n(74114),
    r = n(232835),
    o = n(994500),
    c = n(287809),
    d = n(652215),
    u = n(746080);
  function h(e) {
    let t = (0, l.useRef)(!1),
      n = (0, l.useRef)(e.id),
      h = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
      m = h ? e.getRecipientId() : null,
      g = (0, a.l)(e.id),
      p = e.hasFlag(u.lx.HAS_ONLY_SYSTEM_MESSAGES);
    return (0, i.bG)(
      [r.A, s.A, o.A, c.default],
      () => {
        if (
          (n.current !== e.id && ((t.current = !1), (n.current = e.id)),
          null != g ||
            !h ||
            s.A.isMessageRequest(e.id) ||
            (null != m && o.A.getRelationshipType(m) === d.eA$.BLOCKED))
        )
          return !1;
        if (null != m) {
          let e = c.default.getUser(m);
          if (null != e && e.hasFlag(d.nhx.PROVISIONAL_ACCOUNT)) return !1;
        }
        let l = r.A.getMessages(e.id),
          i = !l.hasMoreBefore && !l.hasMoreAfter && l.length < 25,
          a = r.A.hasCurrentUserSentWaveBlockingMessage(e.id),
          u = (l.ready || t.current) && (p || i) && !a;
        return ((t.current = u), u);
      },
      [g, h, e.id, m, p],
    );
  }
}
