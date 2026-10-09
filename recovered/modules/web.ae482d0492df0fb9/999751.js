/* Recovered shipped factory. Module 999751.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7324374..7326514
 * Raw property SHA-256: 17377481fbb0b5a8aa15df26447af3501a1eb1a545535e5dec761df4226f4b4f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => v, e: () => R });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(200192),
    o = n(526701),
    d = n(522937),
    c = n(653766),
    u = n(922016),
    _ = n(866665),
    E = n(939249),
    A = n(657043),
    h = n(793574),
    f = n(384059),
    I = n(917592),
    p = n(978171),
    T = n(834730),
    m = n(29160),
    g = n(660183),
    S = n(177129);
  let N = function (e) {
    let {
        className: t,
        hasVideo: n,
        text: r,
        hasConnectedChannel: a,
        textVariant: l = "text-md/medium",
      } = e,
      o = n ? g.intl.string(g.t.IlHdW8) : g.intl.string(g.t.WsOisp);
    return (0, i.jsx)(m.A, {
      className: s()(t, S.H),
      hoverText: a
        ? (0, i.jsx)(T.E, { variant: l, color: "currentColor", className: S.Q, children: o })
        : null,
      children: (0, i.jsx)(T.E, { variant: l, color: "currentColor", className: S.Q, children: r }),
    });
  };
  var C = n(652215),
    O = n(473718);
  let R = { [C.vkP.CONNECTED]: O.nf, [C.vkP.CONNECTING]: O._6, [C.vkP.ERROR]: O.Il },
    L = { [C.bFR.FINE]: O.LP, [C.bFR.AVERAGE]: O.mq, [C.bFR.BAD]: O.yA, [C.bFR.UNKNOWN]: null },
    y = { [C.bFR.FINE]: l.Q, [C.bFR.AVERAGE]: o.j, [C.bFR.BAD]: d.R, [C.bFR.UNKNOWN]: c.e };
  function D(e) {
    let { quality: t, largePing: n, ...r } = e,
      a = y[t];
    return (0, i.jsx)(a, { className: s()(O.hU, { [O.kV]: n }), ...r });
  }
  function v(e) {
    let {
        quality: t,
        lastPing: n,
        state: a,
        className: l,
        children: o,
        channelId: d,
        childrenAsSubtitle: c,
        connectionStatusTextVariant: T,
        hasVideo: m,
      } = e,
      g = r.useRef(null),
      S = a === C.S7L.RTC_CONNECTED,
      y = r.useCallback((e) => (0, i.jsx)(p.A, { ...e, channelId: d }), [d]),
      { connectionStatus: v, connectionStatusText: b } = I.A.getStatus(a, m),
      M = (0, A.KN)("RTCConnectionStatus");
    return (0, i.jsxs)("div", {
      className: O.pe,
      children: [
        (0, i.jsx)("div", {
          className: s()(O.yH, L[t], l),
          ref: g,
          children: (0, i.jsx)(u.Y, {
            targetElementRef: g,
            renderPopout: y,
            position: "top",
            children: (e) => {
              let { onClick: r } = e;
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  S &&
                    (0, i.jsx)(_.m, {
                      text: t !== C.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                      children: (0, i.jsx)(E.D, {
                        className: s()(O.xr, { [O.YJ]: c }),
                        onClick: (e) => {
                          ((0, f.X)(h.A.RTC_PANEL, f.O.CONNECTION_STATUS), r(e));
                        },
                        children: (0, i.jsx)(D, { quality: t, largePing: c }),
                      }),
                    }),
                  (0, i.jsxs)("div", {
                    className: O.ei,
                    children: [
                      c && M
                        ? null
                        : (0, i.jsx)(E.D, {
                            onClick: (e) => {
                              ((0, f.X)(h.A.RTC_PANEL, f.O.CONNECTION_STATUS), r(e));
                            },
                            children: (0, i.jsx)(N, {
                              text: b,
                              textVariant: T,
                              hasVideo: m,
                              className: R[v],
                              hasConnectedChannel: null != d,
                            }),
                          }),
                      c ? o : null,
                    ],
                  }),
                ],
              });
            },
          }),
        }),
        c ? null : o,
      ],
    });
  }
}
