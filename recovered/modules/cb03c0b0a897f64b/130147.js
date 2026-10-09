/* Recovered shipped factory. Module 130147.
 * Source: recovered/web/assets/cb03c0b0a897f64b.js
 * UTF-16 property offsets: 95..645
 * Raw property SHA-256: ad581c83567148c4a57d984d4eca350f5cab157e7d33ca16d915ef943ee0c8d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, a, l) {
  l.d(a, { _: () => n });
  var e = l(477900),
    i = l(503698),
    t = l.n(i),
    d = l(778712),
    r = l(97808),
    u = l(652215),
    c = l(878337);
  function n(s) {
    let { showStatus: a, width: l, opacity: i, size: n = "default" } = s,
      h = "small" === n ? d._3.SIZE_24 : d._3.SIZE_32;
    return (0, e.jsxs)("div", {
      className: t()(c.Os, { [c.i]: "small" === n }),
      style: { opacity: i },
      children: [
        (0, e.jsx)(r.eu, {
          src: null,
          size: h,
          status: a ? u.clD.ONLINE : void 0,
          statusColor: "var(--border-subtle)",
          "aria-hidden": !0,
          imageClassName: c.yf,
        }),
        (0, e.jsx)("div", {
          className: t()(c.aA, { [c.vX]: "small" === n }),
          style: { maxWidth: null != l ? l : "100px" },
        }),
      ],
    });
  }
}
