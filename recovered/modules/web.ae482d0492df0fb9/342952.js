/* Recovered shipped factory. Module 342952.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 913831..918690
 * Raw property SHA-256: 71853535c46771924357f32a990f70a04dbc70aa23dafc4e89ea08a70ffc3107
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => D, I: () => y });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(866665),
    c = n(834730),
    u = n(140735),
    _ = n(364522),
    E = n(939249),
    A = n(97808),
    h = n(305866),
    f = n(922016),
    I = n(442433),
    p = n(538451),
    T = n(562153),
    m = n(427262),
    g = n(778712),
    S = n(660183),
    N = n(661248);
  function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g._3.SIZE_24;
    switch (e) {
      case g._3.SIZE_16:
        return N.nc;
      case g._3.SIZE_20:
        return N.qV;
      case g._3.SIZE_32:
        return N.Hb;
      case g._3.SIZE_24:
      default:
        return N.q1;
    }
  }
  function O(e) {
    let {
        users: t,
        maxUsers: n,
        guildId: r,
        channelId: a,
        size: l = g._3.SIZE_24,
        shouldShowOverflowCount: c,
        disableUsernameTooltip: u,
      } = e,
      _ = C(l),
      E = c ? n - 1 : Math.min(t.length, n),
      h = E - 1,
      f = o()(t)
        .take(E)
        .map((e, t) => {
          let n = T.Ay.getNickname(r, a, e) ?? m.Ay.getName(e),
            o = s()(N.my, _, t === h && !c && N.NE),
            E = (0, i.jsx)(A.eu, {
              src: e.getAvatarURL(r, (0, g.FT)(l)),
              size: l,
              "aria-hidden": !0,
            });
          return (0, i.jsx)(
            "li",
            {
              className: o,
              children: u
                ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: E })
                : (0, i.jsx)(d.m, {
                    text: n,
                    ariaHidden: !0,
                    children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: E }),
                  }),
            },
            e.id,
          );
        })
        .value();
    return (0, i.jsx)("ul", { className: N.HD, children: f });
  }
  function R(e) {
    let {
        count: t,
        textVariant: n,
        color: r = "interactive-text-default",
        size: a = g._3.SIZE_24,
        className: l,
      } = e,
      o = C(a),
      d =
        n ??
        (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g._3.SIZE_24;
          switch (e) {
            case g._3.SIZE_16:
            case g._3.SIZE_20:
              return "text-xxs/semibold";
            case g._3.SIZE_32:
              return "text-sm/medium";
            case g._3.SIZE_24:
            default:
              return "text-xs/medium";
          }
        })(a);
    return (0, i.jsxs)(c.E, {
      variant: d,
      color: r,
      className: s()(N.ju, o, l),
      children: [
        (0, i.jsx)(u.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: t }) }),
        (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
      ],
    });
  }
  function L(e) {
    let {
        users: t,
        maxUsers: n,
        guildId: r,
        channelId: a,
        size: s = g._3.SIZE_24,
        overflowCountClassName: l,
        overflowCountColor: o = "interactive-text-default",
        hideOverflowCount: d = !1,
      } = e,
      c = t.length - n,
      u = c > 0 && !d;
    return t.length <= 0
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(O, {
              users: t,
              maxUsers: n,
              guildId: r,
              channelId: a,
              size: s,
              shouldShowOverflowCount: u,
              disableUsernameTooltip: !0,
            }),
            u && (0, i.jsx)(R, { count: c + 1, color: o, size: s, className: l }),
          ],
        });
  }
  function y(e) {
    let { className: t, "aria-label": n, "aria-labelledby": r, "aria-hidden": a, ...l } = e;
    return (0, i.jsx)("div", {
      role: "group",
      className: s()(t, N.HD),
      "aria-label": n,
      "aria-labelledby": r,
      "aria-hidden": a,
      children: (0, i.jsx)(L, { ...l }),
    });
  }
  function D(e) {
    let {
        ref: t,
        users: a,
        maxUsers: l,
        guildId: o,
        channelId: d,
        className: c,
        size: u = g._3.SIZE_24,
        overflowCountVariant: A,
        overflowCountColor: m = "interactive-text-default",
        overflowCountClassName: C,
        popoutClassName: L,
        hideOverflowCount: y = !1,
        disableUsernameTooltip: D = !1,
        disableUserPopout: v = !1,
        onClickOverflow: b,
        onFocusOverflow: M,
        onUserClick: P,
        onUserListOpenChange: U,
        onUserPopoutRequestClose: w,
        "aria-label": G,
        "aria-labelledby": x,
        "aria-hidden": k,
      } = e,
      [F, B] = r.useState(!1),
      V = r.useRef(null),
      H = r.useRef(null),
      j = a.length - l,
      W = j + 1,
      Y = j > 0 && !y && !k,
      K = r.useCallback(() => {
        ((H.current = null), B(!1), U?.(!1));
      }, [U]),
      $ = r.useCallback(
        (e) => {
          ((H.current = e ?? V.current), B(!0), U?.(!0));
        },
        [U],
      );
    return (r.useImperativeHandle(t, () => ({ openUserList: $, closeUserList: K }), [$, K]),
    a.length <= 0)
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              role: "group",
              "aria-label": G,
              "aria-labelledby": x,
              className: s()(c, N.HD),
              "aria-hidden": k,
              children: [
                (0, i.jsx)(O, {
                  users: a,
                  maxUsers: l,
                  guildId: o,
                  channelId: d,
                  size: u,
                  shouldShowOverflowCount: Y,
                  disableUsernameTooltip: D,
                }),
                Y &&
                  (0, i.jsx)(E.D, {
                    innerRef: V,
                    className: N.x6,
                    onFocus: M,
                    onClick: (e) => {
                      (b?.(e), $());
                    },
                    "aria-expanded": F,
                    "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: W }),
                    children: (0, i.jsx)(R, {
                      count: W,
                      textVariant: A,
                      color: "interactive-text-default" === m ? "currentColor" : m,
                      size: u,
                      className: C,
                    }),
                  }),
              ],
            }),
            F &&
              (0, i.jsx)(f.Y, {
                targetElementRef: H,
                renderPopout: () =>
                  (0, i.jsx)(h.l, {
                    className: N.XM,
                    "aria-label": G,
                    "aria-labelledby": x,
                    children: (0, i.jsx)(_.Ip, {
                      className: s()(N.XG, L),
                      children: a.map((e) =>
                        (0, i.jsx)(
                          p.A,
                          {
                            user: e,
                            guildId: o,
                            channelId: d,
                            nick: T.Ay.getNickname(o, d, e),
                            disablePopout: "function" == typeof v ? v(e.id) : v,
                            onClick: P,
                            onPopoutRequestClose: () => {
                              w?.();
                            },
                            onContextMenu: (t) =>
                              (0, I.L3)(
                                t,
                                async () => {
                                  let { default: t } = await Promise.all([
                                    n.e("205035"),
                                    n.e("790484"),
                                    n.e("463317"),
                                    n.e("926132"),
                                    n.e("834552"),
                                    n.e("146652"),
                                    n.e("708757"),
                                    n.e("585968"),
                                    n.e("893190"),
                                    n.e("776273"),
                                    n.e("253729"),
                                    n.e("189673"),
                                    n.e("536200"),
                                    n.e("183776"),
                                    n.e("638221"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("234236"),
                                    n.e("428296"),
                                    n.e("691994"),
                                    n.e("229787"),
                                    n.e("936320"),
                                    n.e("576665"),
                                    n.e("482861"),
                                    n.e("332470"),
                                    n.e("624198"),
                                    n.e("715038"),
                                    n.e("190889"),
                                    n.e("856753"),
                                    n.e("61129"),
                                    n.e("983525"),
                                    n.e("242204"),
                                    n.e("331203"),
                                    n.e("255302"),
                                    n.e("349644"),
                                    n.e("825486"),
                                    n.e("172883"),
                                    n.e("873786"),
                                    n.e("920628"),
                                    n.e("532418"),
                                  ]).then(n.bind(n, 668569));
                                  return (n) =>
                                    (0, i.jsx)(t, { ...n, user: e, guildId: o, channelId: d });
                                },
                                { onClose: () => K() },
                              ),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  }),
                shouldShow: !0,
                position: "bottom",
                onRequestClose: K,
                children: () => null,
              }),
          ],
        });
  }
}
