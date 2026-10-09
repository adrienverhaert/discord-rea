/* Recovered shipped factory. Module 979766.
 * Source: recovered/web/assets/290017bbf455a3c5.js
 * UTF-16 property offsets: 2146..2749
 * Raw property SHA-256: 28649ea0be9fdf0bf9d5c025aa934b26a60e7b3568bd0be74b28dfb7f33cd94a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, i, e) {
  e.d(i, { A: () => A });
  var t = e(477900);
  e(582128);
  var c = e(477782),
    r = e(366605),
    o = e(687709),
    a = e(492841),
    s = e(145530),
    l = e(652215),
    d = e(660183);
  function A(n, i) {
    return n.state !== l.cmJ.SEND_FAILED && (0, a.A)(n, i)
      ? !1 === n.pinned
        ? (0, t.jsx)(c.Dr, {
            id: "pin",
            action: function (e) {
              e.shiftKey ? o.A.pinMessage(i, n.id) : s.A.confirmPin(i, n);
            },
            label: d.intl.string(d.t.CvQ18w),
            leadingAccessory: { type: "icon", icon: r.t },
            icon: r.t,
          })
        : (0, t.jsx)(c.Dr, {
            id: "unpin",
            action: function (e) {
              e.shiftKey ? o.A.unpinMessage(i, n.id) : s.A.confirmUnpin(i, n);
            },
            label: d.intl.string(d.t["Bse+F/"]),
            leadingAccessory: { type: "icon", icon: r.t },
            icon: r.t,
          })
      : null;
  }
}
