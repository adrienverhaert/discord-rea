/* Recovered shipped factory. Module 384015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4252025..4252808
 * Raw property SHA-256: 130b1de437e5478a5253bdd941f13b08d242a9529329f60e19795c66a0dcbe7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(59652),
    s = n(28863),
    l = n(32880),
    o = n(174459),
    d = n(652215),
    c = n(660183);
  let u = function (e) {
    let {
        href: t,
        className: n,
        iconClassName: u,
        rel: _,
        target: E,
        mimeType: A,
        fileName: h,
        focusProps: f,
        onClick: I,
        ...p
      } = e,
      T = r.useMemo(() => a.V.getDefaultLinkInterceptor(t), [t]),
      m = r.useCallback(
        (e) => {
          (o.default.track(d.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
            attachment_type: A?.[0],
            attachment_subtype: A?.[1],
          }),
            I?.(),
            T?.(e));
        },
        [T, A, I],
      );
    return null != h
      ? (0, i.jsx)(s.Anchor, {
          href: t,
          onClick: m,
          target: E,
          rel: _,
          className: n,
          focusProps: f,
          ...p,
          children: h,
        })
      : (0, i.jsx)(s.Anchor, {
          href: t,
          onClick: m,
          target: E,
          rel: _,
          className: n,
          "aria-label": c.intl.string(c.t["1WjMbC"]),
          focusProps: f,
          ...p,
          children: (0, i.jsx)(l.DownloadIcon, { size: "md", color: "currentColor", className: u }),
        });
  };
}
