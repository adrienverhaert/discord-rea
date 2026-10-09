/* Recovered shipped factory. Module 800772.
 * Source: recovered/web/assets/77024ddee7a8a786.js
 * UTF-16 property offsets: 95..1090
 * Raw property SHA-256: bbfc6cf538ea18a40dac82597faf1a7fe3c41b20e35c90276e5a854b8e1952d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, E, _) {
  _.d(E, { Wx: () => a, g0: () => C, qC: () => D });
  var t,
    u = _(612200),
    i = _(323073),
    c = _(398884),
    e = _(772366),
    o = _(207560),
    r = _(374063),
    A = _(521169),
    S = _(666113),
    l = _(652215),
    O = _(204925),
    a =
      (((t = {}).PROCEED = "PROCEED"),
      (t.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
      (t.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
      t);
  function D(n) {
    let { guild: E, isMember: _, onConfirm: t } = n;
    return (
      null != E &&
      !_ &&
      !!(0, i.zS)(E) &&
      !!(0, o.u0)() &&
      (function (n) {
        let { onConfirm: E } = n;
        return !!(0, A.n)(S.sR) && ((0, r.DO)({ onConfirm: E }), !0);
      })({ onConfirm: t })
    );
  }
  function G(n) {
    return null != n && (0, c.Sn)();
  }
  function s(n) {
    (0, e.A)({
      analyticsSource: { page: l.liQ.INVITE_EMBED },
      analyticsLocation: { page: l.liQ.INVITE_EMBED, section: l.JJy.GUILD_CAP_UPSELL_MODAL },
      analyticsLocations: n,
    });
  }
  function C(n) {
    let { guildId: E, guild: _, isMember: t, analyticsLocations: c, onGateConfirm: e } = n;
    return D({
      guild: _,
      isMember: t,
      onConfirm: function () {
        G(E) ? s(c) : e();
      },
    })
      ? "AGE_GATE_SHOWN"
      : null != _ && !t && (0, i.xq)() && (0, i.zS)(_)
        ? ((0, u.yO)(O.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : G(E)
          ? (s(c), "GUILD_CAP_SHOWN")
          : "PROCEED";
  }
}
