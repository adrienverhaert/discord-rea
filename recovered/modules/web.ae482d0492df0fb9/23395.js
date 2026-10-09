/* Recovered shipped factory. Module 23395.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7390810..7391774
 * Raw property SHA-256: 65aeb2877ab79ae4ec017cfca5f034ef6df7da7e17f9b8974ad903a03e7954a1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => A, default: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(536637),
    s = n.n(a),
    l = n(189213),
    o = n(192308),
    d = n(151282),
    c = n(859403),
    u = n(566908),
    _ = n(388096),
    E = n(660183);
  let A = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";
  function h(e) {
    let { scheduledMessage: t, transitionState: n, onClose: a } = e,
      h = s()(t.sendAtTimestamp.substring(0, 200)),
      [f, I] = r.useState(h),
      [p, T] = r.useState(!1),
      m = (0, u.Vf)(f, t.scheduledMessageId);
    async function g() {
      T(!0);
      try {
        (await (0, d.Eg)({
          scheduledMessageId: t.scheduledMessageId,
          scheduledTimestamp: f.toISOString(),
        }),
          (0, c.kb)(),
          (0, o.closeModal)(A));
      } catch (e) {
        (0, c.xP)(e.message);
      } finally {
        T(!1);
      }
    }
    return (0, i.jsx)(l.a, {
      transitionState: n,
      size: "md",
      title: E.intl.string(E.t.jbdHj3),
      onClose: a,
      actions: [
        { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: a },
        {
          variant: "primary",
          text: E.intl.string(E.t.VZANAD),
          onClick: g,
          loading: p,
          disabled: null != m,
        },
      ],
      children: (0, i.jsx)(_.A, {
        defaultValue: h,
        onChange: I,
        scheduledMessageId: t.scheduledMessageId,
      }),
    });
  }
}
