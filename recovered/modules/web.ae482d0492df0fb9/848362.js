/* Recovered shipped factory. Module 848362.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8320138..8321804
 * Raw property SHA-256: c5229115c9b8632e494a8cea3c82f7ce40390c3b29da92f73d7c73336e574680
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => m, T: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(980707),
    l = n(477782),
    o = n(959988),
    d = n(820284),
    c = n(198052),
    u = n(74329),
    _ = n(405916),
    E = n(338771),
    A = n(616356),
    h = n(287809),
    f = n(562153),
    I = n(652215),
    p = n(660183);
  function T(e, t, n) {
    let i = (0, a.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
      s = (0, a.bG)([A.A], () => (null != i ? A.A.getActiveStreamForStreamKey(i) : null), [i]),
      l = (0, a.cf)(
        [h.default],
        () => n.reduce((e, t) => ((e[t.ownerId] = h.default.getUser(t.ownerId)), e), {}),
        [n],
      );
    return r.useMemo(() => {
      if (null == e) return [];
      let i = n.filter((e) => e.ownerId !== t?.id);
      return 1 === i.length && i[0].ownerId === s?.ownerId
        ? []
        : i.map((t) => ({ stream: t, username: f.Ay.getName(e.getGuildId(), e.id, l[t.ownerId]) }));
    }, [l, n, e, s, t?.id]);
  }
  function m(e) {
    let {
        channel: t,
        currentUser: n,
        activeStreams: r,
        hideSelfOptions: a = !1,
        showReportOption: c = !1,
        handleGoLive: A,
        onClose: h,
        onSelect: f,
        appContext: m = I.BRT.APP,
        disableChangeWindows: g = !1,
        onInteraction: S,
      } = e,
      N = r.find((e) => e.ownerId === n?.id) ?? null,
      C = T(t, n, r),
      O = (0, u.A)(N, m),
      R = (0, _.E)({
        disableChangeWindows: g,
        stream: N,
        showReportOption: c,
        handleGoLive: A,
        minimal: !0,
        appContext: m,
      });
    return (0, i.jsx)(d.A, {
      section: I.JJy.CONTEXT_MENU,
      children: (0, i.jsxs)(s.W, {
        "data-menu-migrated": !0,
        onSelect: f,
        navId: "manage-streams",
        onClose: h,
        onInteraction: S,
        "aria-label": null != N ? p.intl.string(p.t.S5anIc) : p.intl.string(p.t.fjBNo1),
        children: [
          (0, i.jsx)(l.rX, {
            children: C.map((e) => {
              let { stream: t, username: n } = e;
              return (0, i.jsx)(
                l.Dr,
                {
                  id: t.ownerId,
                  label: p.intl.formatToPlainString(p.t["7rkg+/"], { username: n }),
                  icon: o.G,
                  leadingAccessory: { type: "icon", icon: o.G },
                  action: () => (0, E.A)(t),
                },
                `manage-stream-menu${t.ownerId}`,
              );
            }),
          }),
          a ? null : R,
          a ? null : (0, i.jsx)(l.rX, { children: O }),
        ],
      }),
    });
  }
}
