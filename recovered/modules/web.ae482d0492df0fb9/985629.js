/* Recovered shipped factory. Module 985629.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8112094..8112821
 * Raw property SHA-256: 3b741520faa986538d17606433e2267012719e1af2c7a6f0e228af0fdfae791b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900),
    r = n(562708),
    a = n(866665),
    s = n(414499),
    l = n(359549),
    o = n(139286),
    d = n(939496),
    c = n(993401),
    u = n(996988),
    _ = n(660183);
  function E(e) {
    let { application: t, analyticsLocations: n, onAction: E, onClose: A } = e,
      { themeType: h } = (0, d.E)(),
      f = (0, l.Ay)({ application: t, analyticsLocations: n });
    return ((0, o.A)(
      {
        name: r.ImpressionNames.CLOUD_PLAY_CTA,
        type: r.ImpressionTypes.VIEW,
        properties: { location_stack: n },
      },
      { disableTrack: null == f },
      [f],
    ),
    null == f)
      ? null
      : (0, i.jsx)(a.m, {
          text: _.intl.string(_.t.JVwWva),
          position: "top",
          children: (0, i.jsx)(c.FD, {
            icon: s.h,
            text: _.intl.string(_.t["jaYS/h"]),
            size: "sm",
            onClick: (e) => {
              (e.stopPropagation(), E?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), f(), A?.());
            },
            fullWidth: h !== u.d.MODAL_V2,
          }),
        });
  }
}
