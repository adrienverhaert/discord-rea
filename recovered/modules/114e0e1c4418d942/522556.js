/* Recovered shipped factory. Module 522556.
 * Source: recovered/web/assets/114e0e1c4418d942.js
 * UTF-16 property offsets: 6849..8026
 * Raw property SHA-256: b99f27b9ff7729b6649d38ba281e7c1f3c1ceaeec50f33ab6de833f783f7531b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, l) {
  l.d(n, { A: () => x });
  var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(689175),
    c = l(66834),
    d = l(379257),
    u = l(306537),
    o = l(323073),
    A = l(506164),
    g = l(660183),
    h = l(814316);
  function m(e) {
    let { guild: n, channelId: l } = e,
      { modalType: a, emphasiseDisagree: s, ...r } = (0, o.k$)(n),
      h = i.useCallback(() => {
        null != n && c.A.nsfwReturnToSafety(n.id);
      }, [n]),
      m = i.useCallback(() => {
        null != n && c.A.nsfwAgree(n.id);
      }, [n]),
      x = i.useCallback(() => {
        d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.NSFW_GUILD });
      }, []),
      f = {
        ...r,
        guildId: n?.id,
        channelId: l,
        disagreement: g.intl.string(g.t["/g10LC"]),
        "data-testid": `age-gate-${a}`,
      };
    switch (a) {
      case u.A5.NSFW_CHANNEL_AGE_VERIFY:
      case u.A5.GUILD_LARGE_SERVER:
        return (0, t.jsx)(A.A, {
          onAgree: x,
          onDisagree: h,
          modalType: a,
          agreementButtonVariant: !0 === s ? "secondary" : "primary",
          disagreementButtonVariant: !0 === s ? "primary" : "secondary",
          ...f,
        });
      default:
        return (0, t.jsx)(A.A, { onAgree: m, onDisagree: h, modalType: a, ...f });
    }
  }
  let x = function (e) {
    let { guild: n, channelId: l, className: a } = e,
      c = i.useRef(null);
    return (
      i.useEffect(() => {
        let { current: e } = c;
        e?.scrollToBottom();
      }, []),
      (0, t.jsx)(r.Ch, {
        ref: c,
        className: h.X,
        children: (0, t.jsx)("div", {
          className: s()(a, h.i),
          children: (0, t.jsx)(m, { guild: n, channelId: l }),
        }),
      })
    );
  };
}
