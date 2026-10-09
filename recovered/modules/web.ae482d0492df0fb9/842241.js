/* Recovered shipped factory. Module 842241.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8102029..8105910
 * Raw property SHA-256: eef8ff45fffa6eac7d58f8b1b5e3c8d7d4f224c0792affe066435e3ca3343873
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => X });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(342952),
    d = n(289873),
    c = n(939249),
    u = n(834730),
    _ = n(111159),
    E = n(778712),
    A = n(140735),
    h = n(707554),
    f = n(730852),
    I = n(401843),
    p = n(475743),
    T = n(672979),
    m = n(717306),
    g = n(323073),
    S = n(597306),
    N = n(793574),
    C = n(688810),
    O = n(47167),
    R = n(402216),
    L = n(450149),
    y = n(711589),
    D = n(71393),
    v = n(576705),
    b = n(290863),
    M = n(607567),
    P = n(92240),
    U = n(257367),
    w = n(939496),
    G = n(584904),
    x = n(351638),
    k = n(316770),
    F = n(910607),
    B = n(70963),
    V = n(269587),
    H = n(652215),
    j = n(996988),
    W = n(660183),
    Y = n(260155),
    K = n(202611),
    $ = n(399162),
    z = n(181147);
  function X(e) {
    let t,
      { user: n, currentUser: a, stream: X, className: Z, onClose: q } = e,
      { themeType: Q, theme: J } = (0, w.E)(),
      ee = (0, l.bG)([D.A], () => D.A.getGuild(X?.guildId)),
      { actionString: et, actionAriaLabel: en, canWatch: ei, channel: er } = (0, y.K)(X),
      ea = (0, O.Ay)(er),
      es = (0, l.yK)([M.Ay], () =>
        null != er
          ? M.Ay.getVoiceStatesForChannel(er).map((e) => {
              let { user: t } = e;
              return t;
            })
          : [],
      ),
      el = (0, l.bG)([b.A], () => b.A.findActivity(n.id, (e) => (0, T.A)(e) && !(0, m.A)(e))),
      { analyticsLocations: eo } = (0, C.Ay)(N.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
      ed = (0, P.A)({
        display: "live",
        voiceChannelId: er?.id,
        user: n,
        stream: X,
        analyticsLocations: eo,
      }),
      ec = (0, U.A)({ userId: n.id, onAction: ed }),
      { previewUrl: eu, isLoading: e_ } = (0, L.A)(X?.guildId, X?.channelId, X?.ownerId),
      eE = (0, S.a)() && (0, g.UK)(er?.id),
      eA = (0, l.bG)([v.A], () => null != er && !eE && v.A.canBasicChannel(H.hVb.CONNECT, er)),
      eh = (0, p.Ay)(e_ ? null : eu),
      ef = e_ || null == eu ? eh : eu,
      eI = r.useId();
    if (null == ee || null == er || !1 === X.discoverable) return null;
    function ep() {
      return null == er || n.id === a.id
        ? null
        : (0, i.jsx)("div", {
            className: Y.o1,
            children: (0, i.jsx)(B.Ay, { channel: er, onAction: ed, onClose: q }),
          });
    }
    let eT =
      null != el
        ? W.intl.formatToPlainString(W.t["4CQq9Q"], { name: el.name })
        : W.intl.string(W.t["Jpkr/q"]);
    return (0, i.jsx)(C.f5, {
      value: eo,
      children: (0, i.jsxs)(G.A, {
        ref: ec,
        className: Z,
        onAction: ed,
        onClose: q,
        "aria-labelledby": eI,
        children: [
          (0, i.jsx)(x.A, {
            text: eT,
            tags: (0, i.jsx)(R.Ay, { size: R.ed.SMALL }),
            contextMenu: (0, i.jsx)(V.A, { display: "live", user: n, onClose: q }),
          }),
          (0, i.jsx)(A.A, { children: (0, i.jsx)(h.H, { id: eI, children: `${eT}, ${ea}` }) }),
          (0, i.jsxs)("div", {
            className: Y.rf,
            children: [
              (0, i.jsxs)("div", {
                className: Y.Qs,
                children: [
                  ((t = (e) => {
                    (e.stopPropagation(),
                      ei &&
                        (ed({ action: "PRESS_IMAGE" }),
                        f.default.selectVoiceChannel(X.channelId),
                        (0, I.Nl)(X),
                        q?.()));
                  }),
                  null == ef && e_
                    ? (0, i.jsx)("div", { className: K.VH, children: (0, i.jsx)(d.y, {}) })
                    : null == ef || eE
                      ? (0, i.jsxs)(c.D, {
                          className: s()(K.VH, K.Lw, ei ? K.vk : K.r9),
                          onClick: t,
                          "aria-label": en,
                          "aria-disabled": !ei,
                          children: [
                            (0, i.jsx)("img", { alt: "", src: J === H.NJ8.LIGHT ? z : $ }),
                            Q !== j.d.MODAL &&
                              Q !== j.d.MODAL_V2 &&
                              (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(u.E, {
                                    className: K.um,
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: et,
                                  }),
                                  (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    children: eA
                                      ? W.intl.string(W.t.uQZTBV)
                                      : W.intl.string(W.t.pgUTZC),
                                  }),
                                ],
                              }),
                          ],
                        })
                      : (0, i.jsxs)(c.D, {
                          className: s()(K.VH, K.Lw, ei ? K.vk : K.r9),
                          onClick: t,
                          "aria-label": en,
                          "aria-disabled": !ei,
                          children: [
                            (0, i.jsx)("img", { alt: "", src: ef, className: K.Sl }),
                            Q !== j.d.MODAL &&
                              Q !== j.d.MODAL_V2 &&
                              (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(u.E, {
                                    className: K.um,
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: et,
                                  }),
                                  (0, i.jsx)(_.p, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: K.wI,
                                  }),
                                ],
                              }),
                          ],
                        })),
                  null == ee || null == er || (Q !== j.d.MODAL && Q !== j.d.MODAL_V2)
                    ? null
                    : (0, i.jsxs)("div", {
                        className: Y.zH,
                        children: [
                          (0, i.jsx)(k.A, { channel: er, guild: ee, onAction: ed, onClose: q }),
                          (0, i.jsx)(o.A, {
                            users: es,
                            guildId: ee.id,
                            channelId: er.id,
                            maxUsers: F.k,
                            size: E._3.SIZE_16,
                            onClickOverflow: (e) => {
                              (e?.stopPropagation(),
                                ed?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                            },
                            onUserClick: (e) => e.stopPropagation(),
                            disableUserPopout: (e) => e === n.id,
                            overflowCountColor: "text-muted",
                            "aria-label": W.intl.string(W.t["jNqDh/"]),
                          }),
                          Q === j.d.MODAL_V2 && ep(),
                        ],
                      }),
                  Q === j.d.MODAL && ep(),
                ],
              }),
              null == ee || null == er || Q === j.d.MODAL || Q === j.d.MODAL_V2
                ? null
                : (0, i.jsx)(F.A, { user: n, guild: ee, channel: er, onAction: ed, onClose: q }),
            ],
          }),
          Q !== j.d.MODAL && Q !== j.d.MODAL_V2 && ep(),
        ],
      }),
    });
  }
}
