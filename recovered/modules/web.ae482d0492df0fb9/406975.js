/* Recovered shipped factory. Module 406975.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2282295..2282821
 * Raw property SHA-256: 5f9a7d3d0075a278b9e81b7b8124bdd01e04742edee7c6c24fb4d38667659a96
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => c, O$: () => d, Ur: () => l, hU: () => o });
  var i = n(955572),
    r = n(775602),
    a = n(652215);
  function s(e) {
    return a.hH7.ZOOM_SCALES[
      Math.max(0, Math.min(a.hH7.ZOOM_SCALES.indexOf(r.Ay.zoom) + e, a.hH7.ZOOM_SCALES.length - 1))
    ];
  }
  let l = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(1)), !1) },
    o = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(-1)), !1) },
    d = {
      binds: ["mod+0"],
      comboKeysBindGlobal: !0,
      action: () => ((0, i.Qp)(a.hH7.ZOOM_DEFAULT), !1),
    },
    c = { ZOOM_IN: l, ZOOM_OUT: o, ZOOM_RESET: d };
}
