/* Recovered shipped factory. Module 70963.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8110866..8112093
 * Raw property SHA-256: 0fa1a5690aca9a98b66292aed076be188d46fcd4602268b0c50a3244e2bc8f84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => I });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(730852),
    s = n(323073),
    l = n(597306),
    o = n(378570),
    d = n(747376),
    c = n(576705),
    u = n(977997),
    _ = n(939496),
    E = n(993401),
    A = n(652215),
    h = n(996988),
    f = n(660183);
  function I(e) {
    let { channel: t, onAction: n, onClose: I } = e,
      { themeType: p } = (0, _.E)(),
      T = p === h.d.MODAL_V2,
      m = (0, r.bG)([u.A], () => u.A.isInChannel(t.id));
    if (
      !(0, r.bG)([c.A], () => {
        let e = (0, l.r)() && (0, s.UK)(t.id);
        return (t.isPrivate() || c.A.can(A.xBc.CONNECT, t)) && !e;
      })
    )
      return null;
    let g = p === h.d.MODAL || p === h.d.MODAL_V2;
    return (0, i.jsx)(E.FD, {
      text: m
        ? (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t
              ? f.intl.string(f.t["3xjX0U"])
              : e.isDM() || e.isGroupDM()
                ? f.intl.string(f.t["7hwn2A"])
                : e.isGuildStageVoice()
                  ? f.intl.string(f.t.Acqcot)
                  : f.intl.string(f.t.BXxdl7);
          })(t, g)
        : (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t
              ? f.intl.string(f.t.VJlc0S)
              : e.isDM() || e.isGroupDM()
                ? f.intl.string(f.t.ozoE2A)
                : e.isGuildStageVoice()
                  ? f.intl.string(f.t["7vb2cc"])
                  : f.intl.string(f.t["96ANUN"]);
          })(t, g),
      fullWidth: !T,
      onClick: (e) => {
        (e.stopPropagation(),
          n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
          t.isGuildStageVoice()
            ? (0, d.av)(t)
            : (a.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
          I?.());
      },
    });
  }
}
