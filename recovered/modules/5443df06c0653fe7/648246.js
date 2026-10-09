/* Recovered shipped factory. Module 648246.
 * Source: recovered/web/assets/5443df06c0653fe7.js
 * UTF-16 property offsets: 643..1020
 * Raw property SHA-256: 79381a4edb8fa066fe4601556698615e867dbe3cff6ac899b2fcda95a62c8837
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, i) {
  i.d(t, { A: () => o });
  var e = i(477900);
  i(582128);
  var l = i(821609),
    r = i(908289),
    a = i(960076),
    s = i(660183);
  function o(n) {
    let { activity: t, onAction: i, variant: o = "secondary", size: d = "sm", ...u } = n;
    return (0, a.A)(t)
      ? (0, e.jsx)(l.$, {
          variant: o,
          size: d,
          text: s.intl.string(s.t.I6JG46),
          onClick: function () {
            i?.();
            let n = (0, r.A)(t);
            return window.open(null != n ? n : void 0);
          },
          fullWidth: !0,
          ...u,
        })
      : null;
  }
}
