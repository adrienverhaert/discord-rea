/* Recovered shipped factory. Module 271456.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 2613..3421
 * Raw property SHA-256: 90e5b0ef357542f63db09f425c07fedb145b240963564e866cef338a718727a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => h });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    l = n(477782),
    a = n(177953),
    d = n(950305),
    s = n(147087),
    o = n(867455),
    u = n(780057),
    c = n(660183);
  function h(t) {
    let e = (0, r.bG)([u.A], () => u.A.isInProgress());
    return (0, s.b)() && t.isThread()
      ? (0, i.jsx)(l.Dr, {
          id: "summarize-thread",
          label: e ? c.intl.string(c.t.oKECxB) : c.intl.string(c.t.EXfguE),
          disabled: e,
          loading: e,
          action: () => o.A.summarizeThread(t),
          children: e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(l.Dr, {
                    id: "summarize_thread_for_everyone",
                    label: c.intl.string(c.t.eCzSdd),
                    action: () => o.A.summarizeThread(t, !1),
                    icon: a.n,
                    leadingAccessory: { type: "icon", icon: a.n },
                  }),
                  (0, i.jsx)(l.Dr, {
                    id: "summarize_thread_for_me",
                    label: c.intl.string(c.t["HOe+Hq"]),
                    action: () => o.A.summarizeThread(t),
                    icon: d.UserIcon,
                    leadingAccessory: { type: "icon", icon: d.UserIcon },
                  }),
                ],
              }),
        })
      : null;
  }
}
