/* Recovered shipped factory. Module 50268.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4173680..4174242
 * Raw property SHA-256: ea83cf01291c56e9dc455c5ab9586e6cbd068326ce99c1c6a2ab023606f1a927
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(284009),
    a = n.n(r),
    s = n(477782),
    l = n(473935),
    o = n(885386),
    d = n(957565);
  function c(e) {
    let {
        id: t,
        label: n,
        onSuccess: r,
        shiftId: c,
        showIconFirst: u,
        showWithoutDeveloperMode: _,
      } = e,
      E = o.Q_.useSetting();
    if (__OVERLAY__ || !(_ || E) || !d.p5 || null == t) return null;
    let A = `devmode-copy-id-${t}`;
    return (0, i.jsx)(
      s.Dr,
      {
        id: A,
        label: n,
        action: function (e) {
          let n = null != c && e.shiftKey ? c : t;
          (a()(null != n, "cannot copy null text"), (0, d.C)(n, r));
        },
        icon: u ? void 0 : l.L,
        iconLeft: u ? l.L : void 0,
        leadingAccessory: { type: "icon", icon: l.L },
      },
      A,
    );
  }
}
