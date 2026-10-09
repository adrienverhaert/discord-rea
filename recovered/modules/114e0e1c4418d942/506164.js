/* Recovered shipped factory. Module 506164.
 * Source: recovered/web/assets/114e0e1c4418d942.js
 * UTF-16 property offsets: 3487..4808
 * Raw property SHA-256: d56f444c0b95f22572d0ecb0fcf76b0fee23ad5cd0616c798ba4ec9911f875c3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, l) {
  l.d(n, { A: () => o });
  var t = l(477900),
    i = l(582128),
    a = l(821609),
    s = l(331322),
    r = l(297264),
    c = l(834730),
    d = l(306537),
    u = l(349164);
  let o = function (e) {
    let {
      title: n,
      subtitle: l,
      description: o,
      agreement: A,
      agreementButtonVariant: g = "primary",
      disagreement: h,
      disagreementButtonVariant: m = "secondary",
      onAgree: x,
      onDisagree: f,
      modalType: j,
      channelId: N,
      guildId: p,
      "data-testid": C,
    } = e;
    i.useEffect(() => {
      (0, d.Bf)(j, N, p);
    }, [j, N, p]);
    let E = i.useCallback(() => {
        ((0, d.mU)(d.IY.NSFW_CHANNEL_DISAGREE_CTA, j, N, p), f?.());
      }, [f, j, N, p]),
      I = i.useCallback(() => {
        ((0, d.mU)(d.IY.NSFW_CHANNEL_AGREE_CTA, j, N, p), x?.());
      }, [x, j, N, p]),
      b =
        null != A && null != x
          ? (0, t.jsx)(a.$, { variant: g, text: A, onClick: I }, "agree")
          : null,
      _ =
        null != h && null != f
          ? (0, t.jsx)(a.$, { variant: m, text: h, onClick: E }, "disagree")
          : null;
    return (0, t.jsxs)(s.B, {
      justify: "center",
      align: "center",
      direction: "vertical",
      gap: 16,
      className: u.XG,
      "data-testid": C,
      children: [
        (0, t.jsxs)(s.B, {
          gap: 8,
          justify: "center",
          align: "center",
          direction: "vertical",
          children: [
            (0, t.jsx)(r.D, { variant: "text-lg/semibold", className: u.DD, children: n }),
            null != l
              ? (0, t.jsx)(c.E, {
                  variant: "text-md/medium",
                  className: u.VA,
                  color: "text-muted",
                  children: l,
                })
              : null,
            (0, t.jsx)(c.E, {
              variant: "text-md/medium",
              className: u.h_,
              color: "text-muted",
              children: o,
            }),
          ],
        }),
        (0, t.jsx)(s.B, {
          direction: "horizontal",
          justify: "center",
          align: "center",
          gap: 16,
          children: "primary" === m ? [b, _] : [_, b],
        }),
      ],
    });
  };
}
