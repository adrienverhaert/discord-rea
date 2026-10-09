/* Recovered shipped factory. Module 175248.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7134008..7135473
 * Raw property SHA-256: 7425710eb5493ca6b38d446b8d5a654932bc027433676c1ebd0c18d203d740fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => p, QuestRewardModalUnverified: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(772707),
    l = n(289873),
    o = n(885574),
    d = n(834730),
    c = n(192308),
    u = n(830215),
    _ = n(287809),
    E = n(710969),
    A = n(660183),
    h = n(674456),
    f = n(661965);
  function I(e) {
    let { transitionState: t, onClose: n } = e,
      c = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.email),
      [I, p] = r.useState({ status: "unknown" });
    r.useEffect(() => {
      (p({ status: "loading" }),
        u.A.verifyResend().then(
          () => p({ status: "success" }),
          (e) => {
            (p({ status: "error" }),
              (0, E.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } }));
          },
        ));
    }, []);
    let T =
      "error" === I.status
        ? A.intl.string(A.t.vjying)
        : "success" === I.status
          ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
          : void 0;
    return (0, i.jsxs)(s.k, {
      transitionState: t,
      onClose: n,
      graphic: "loading" === I.status ? void 0 : { type: "image", src: f },
      title: "loading" === I.status ? void 0 : A.intl.string(A.t.c8eASM),
      subtitle: T,
      actions:
        "loading" === I.status
          ? void 0
          : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
      children: [
        "loading" === I.status && (0, i.jsx)(l.y, {}),
        "success" === I.status &&
          (0, i.jsxs)("div", {
            className: h.d,
            children: [
              (0, i.jsx)(o.CircleInformationIcon, {
                size: "xs",
                color: "currentColor",
                className: h.q,
              }),
              (0, i.jsx)(d.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: A.intl.string(A.t.yb7itQ),
              }),
            ],
          }),
      ],
    });
  }
  function p() {
    (0, c.openModalLazy)(async () => {
      let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
      return (t) => (0, i.jsx)(e, { ...t });
    });
  }
}
