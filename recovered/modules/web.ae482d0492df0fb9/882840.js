/* Recovered shipped factory. Module 882840.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3230157..3230611
 * Raw property SHA-256: 1d8675ddd7fbb53e812cbe2f033f7b12b10626ad7eaab51a1a617438d86fb081
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(919638),
    s = n(52074),
    l = n(309698),
    o = n(652215);
  function d(e) {
    let t = (0, r.bG)([a.A], () => a.A.isUnavailable(e?.guild_id)),
      { hasRequestedStatuses: n, status: d } = (0, r.cf)([l.A], () => ({
        hasRequestedStatuses: null != e && l.A.hasRequestedStatuses(e.guild_id),
        status: l.A.getChannelStatus(e),
      })),
      c = e?.type === o.rbe.GUILD_VOICE;
    return (
      i.useEffect(() => {
        n || !c || t || (0, s.U)(e.guild_id);
      }, [c, e?.guild_id, n, t]),
      d
    );
  }
}
