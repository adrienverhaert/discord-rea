/* Recovered shipped factory. Module 283354.
 * Source: recovered/web/assets/57c9fcff85998be9.js
 * UTF-16 property offsets: 4489..6059
 * Raw property SHA-256: d3baa861765dfeb515a9e4b0df4b5c47ab6e11e617dd6151ae20799cc777e0da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { default: () => D });
  var r = n(477900),
    i = n(582128),
    c = n(314116),
    a = n(192308),
    l = n(980707),
    o = n(477782),
    E = n(22231),
    R = n(241326),
    s = n(138134),
    _ = n(442433),
    d = n(50268),
    u = n(928658),
    h = n(208882),
    C = n(352123),
    I = n(660183);
  function D(t) {
    let { entry: e, onSelect: D, closePopout: A, hideEditButton: T = !1 } = t,
      { isEntryAdmin: y, canEdit: p, canRemove: S } = (0, C.A)(e),
      g = (0, d.A)({ id: e.guildId, label: I.intl.string(I.t["94lLD7"]), onSuccess: A });
    function Y() {
      h.ZM(e.channelId, e.guildId);
    }
    function f() {
      ((0, _.Z_)(), A?.());
    }
    return (
      i.useEffect(() => {
        p || S || null != g || (0, _.Z_)();
      }),
      (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "guild-entry-context",
        onClose: f,
        "aria-label": I.intl.string(I.t.HpQykc),
        onSelect: D,
        children: [
          (0, r.jsxs)(o.rX, {
            children: [
              p && !T
                ? (0, r.jsx)(o.Dr, {
                    id: "update-entry",
                    label: I.intl.string(I.t.XnuOvN),
                    action: function () {
                      ((0, a.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                          n.bind(n, 201700),
                        );
                        return (n) => (0, r.jsx)(t, { ...n, entry: e });
                      }),
                        f());
                    },
                    leadingAccessory: { type: "icon", icon: E.PencilIcon },
                  })
                : null,
              S
                ? (0, r.jsx)(o.Dr, {
                    id: "remove-from-hub",
                    label: I.intl.string(I.t.KUxYWH),
                    action: function () {
                      ((0, c.A)({
                        title: I.intl.string(I.t.KUxYWH),
                        subtitle: I.intl.format(I.t["/5y0uV"], { guildName: e.name }),
                        confirmText: I.intl.string(I.t.N86XcP),
                        onConfirm: Y,
                      }),
                        f());
                    },
                    color: "danger",
                    leadingAccessory: { type: "icon", icon: R.TrashIcon },
                  })
                : null,
              y
                ? null
                : (0, r.jsx)(o.Dr, {
                    id: "report-server-listing",
                    label: I.intl.string(I.t.Aen9eh),
                    action: function () {
                      null != e && ((0, u.sJ)(e), f());
                    },
                    icon: s.FlagIcon,
                    leadingAccessory: { type: "icon", icon: s.FlagIcon },
                    color: "danger",
                  }),
            ],
          }),
          (0, r.jsx)(o.rX, { children: g }),
        ],
      })
    );
  }
}
