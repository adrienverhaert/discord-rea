/* Recovered shipped factory. Module 162232.
 * Source: recovered/web/assets/e2f20241503428b6.js
 * UTF-16 property offsets: 95..929
 * Raw property SHA-256: 6f45da4881de93561bbaa59f35358a6e3d7dedaeb97f7fc3081c656955752668
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, a, i) {
  i.d(a, { A: () => c });
  var e = i(477900);
  i(582128);
  var r = i(97808),
    n = i(778712),
    s = i(854627),
    l = i(19575),
    d = i(660183);
  let u = l.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    c = function (t) {
      let {
          user: a,
          guildId: i,
          avatarOverride: r,
          avatarDecorationOverride: l,
          status: c,
          avatarSize: o = n._3.SIZE_120,
          "aria-hidden": h = !1,
          className: p,
          animateOnHover: g = !1,
          questPreviewRewardAssetUrl: _ = null,
          decorationName: b,
        } = t,
        {
          avatarDecorationSrc: f,
          avatarSrc: k,
          eventHandlers: w,
        } = (0, s.A)({
          userId: a.id,
          guildId: i,
          size: o,
          showPending: !0,
          avatarOverride: r,
          avatarDecorationOverride: l,
          animateOnHover: g,
        }),
        x = (() => {
          if (!h)
            return "string" == typeof b
              ? d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: b })
              : null === b
                ? d.intl.string(d.t["7hRBmC"])
                : d.intl.string(d.t.lqaIxI);
        })();
      return (0, e.jsx)(u, {
        avatarDecoration: f ?? _,
        src: k,
        size: o,
        status: c,
        "aria-label": x,
        "aria-hidden": h,
        className: p,
        ...w,
      });
    };
}
