/* Recovered shipped factory. Module 530134.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3310166..3310801
 * Raw property SHA-256: d487e4cc8e8688297ed20eb6716f3c8e1f31427ee0556f67fb7af74901ed75be
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(462180),
    o = n(375499),
    d = n(151271),
    c = n(698279),
    u = n(495088);
  let _ = r.memo(function (e) {
    let { disabled: t, type: n, className: a, onClick: _, channel: E, ref: A } = e,
      [h, f, I] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], l.x),
      p = r.useCallback(() => {
        ((0, d.ed)(n, E.id), _?.());
      }, [n, _, E.id]);
    return t
      ? null
      : (0, i.jsx)("div", {
          className: s()(c.VQ, u.UD),
          ref: A,
          children: (0, i.jsx)(o.A, {
            className: s()(u.Z8, a),
            onClick: p,
            active:
              (h === c.kx.GIF || h === c.kx.EMOJI || h === c.kx.STICKER) && f === n && I === E.id,
            tabIndex: 0,
            focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
          }),
        });
  });
}
