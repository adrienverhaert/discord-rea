/* Recovered shipped factory. Module 657048.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7244745..7245563
 * Raw property SHA-256: f09dc439b71c02bc6285b0f416f910dff819e812466a35835399eb708c643a84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(559106),
    l = n(939249),
    o = n(866665),
    d = n(660183),
    c = n(408968);
  function u(e) {
    let t,
      {
        className: n,
        src: r,
        unicodeEmoji: u,
        name: _,
        size: E = 20,
        enableTooltip: A = !0,
        enableHeight: h = !0,
        onClick: f,
        ref: I,
      } = e;
    return null == r && null == u
      ? null
      : (0, i.jsx)(o.m, {
          asContainer: !0,
          text: _,
          "aria-label": !1,
          shouldShow: A,
          tag: "span",
          children:
            ((t = (0, i.jsx)("img", {
              ref: I,
              alt: d.intl.formatToPlainString(d.t["9+YWrE"], { name: _ }),
              className: a()(c.U, n, { [c.v]: null != f }),
              height: h ? E : void 0,
              src: r,
              width: E,
            })),
            (null != u &&
              (t = (0, i.jsx)("img", {
                ref: I,
                alt: u.allNamesString,
                className: a()(c.U, n, { [c.v]: null != f }),
                height: h ? E : void 0,
                src: u.url,
                width: E,
              })),
            null == f)
              ? (0, i.jsx)(s.vN, { offset: { left: 5 }, children: t })
              : (0, i.jsx)(l.D, {
                  onClick: f,
                  tag: "span",
                  focusProps: { offset: { left: 5 } },
                  children: t,
                })),
        });
  }
}
