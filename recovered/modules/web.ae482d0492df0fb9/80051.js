/* Recovered shipped factory. Module 80051.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8410603..8411708
 * Raw property SHA-256: 03554787d1b2fb01b1411dc2ba7dbb2e1e52b8eb91c53cc07b02f3ac4c01a884
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(847374),
    o = n(177953),
    d = n(367513),
    c = n(204651),
    u = n(660183),
    _ = n(730393);
  function E(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
      className: _.zc,
      children: [
        (0, i.jsx)(l.a, { size: "md", color: "currentColor", className: s()(n ? _.pL : _.RJ, t) }),
        (0, i.jsx)(o.n, { size: "md", color: "currentColor", className: s()(_.ol, t) }),
      ],
    });
  }
  function A(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
      className: _.zc,
      children: [
        (0, i.jsx)(l.a, { size: "md", color: "currentColor", className: s()(n ? _.iy : _.Yr, t) }),
        n && (0, i.jsx)(o.n, { size: "md", color: "currentColor", className: s()(_.ol, t) }),
      ],
    });
  }
  function h(e) {
    let {
        channelId: t,
        className: n,
        isParticipantsOpen: a,
        isVertical: l = !1,
        hideTooltip: o = !1,
      } = e,
      h = r.useCallback(
        (e) => {
          let { className: t } = e;
          return a
            ? (0, i.jsx)(A, { className: t, isVertical: l })
            : (0, i.jsx)(E, { className: t, isVertical: l });
        },
        [a, l],
      );
    return (0, i.jsx)(c.A, {
      label: a ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
      className: s()(_.N9, n),
      onClick: function (e) {
        (e.stopPropagation(), d.A.toggleParticipants(t, !a));
      },
      iconComponent: h,
      shouldShowTooltip: !o,
    });
  }
}
