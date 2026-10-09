/* Recovered shipped factory. Module 564771.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3500240..3502606
 * Raw property SHA-256: 349798dedd5e3b01d382addb87067abcc736c8739b35341470e939b93f4f7e5f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => O, e: () => C });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(796873),
    o = n.n(l),
    d = n(17928),
    c = n(911608),
    u = n(939249),
    _ = n(789645),
    E = n(28863),
    A = n(834730),
    h = n(73153),
    f = n(31717),
    I = n(399263);
  let p = {
    cancel(e, t) {
      h.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
      let n = I.A.getMessageForFile(t.id);
      null == n ||
        ("" === f.A.getDraft(n.channel_id, f.C.ChannelMessage) &&
          h.h.dispatch({
            type: "DRAFT_SAVE",
            channelId: n.channel_id,
            draft: n.content,
            draftType: f.C.ChannelMessage,
          }));
    },
  };
  var T = n(46054),
    m = n(453771),
    g = n(660183),
    S = n(745268);
  function N(e) {
    let { filename: t } = e,
      r = (0, m.GD)(t),
      a = n(492313)(`./icon-file-${r}.svg`);
    return (0, i.jsx)("img", {
      className: S.Kk,
      src: a,
      alt: g.intl.formatToPlainString(g.t.g6KdFv, { fileType: r }),
      title: r,
    });
  }
  function C(e) {
    let { channelId: t, file: n } = e,
      a = (0, d.bG)([I.A], () => I.A.getMessageForFile(n.id)?.content),
      s = r.useMemo(() => {
        let e = n.items;
        return null == e
          ? g.intl.string(g.t.jfKTes)
          : 1 === e.length && null != e[0].filename
            ? e[0].filename
            : g.intl.formatToPlainString(g.t.D0noUt, { count: e.length });
      }, [n.items]),
      l = r.useCallback(() => {
        p.cancel(t, n);
      }, [t, n]),
      E = 100 === n.progress,
      A = !E && n.currentSize > 0,
      h = r.useMemo(() => (null == a || "" === a.trim() ? null : T.A.parse(a)), [a]);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        null != h && (0, i.jsx)("div", { className: S.Qs, children: h }),
        (0, i.jsx)("div", {
          className: S.Ig,
          children: (0, i.jsxs)("div", {
            className: S.NJ,
            children: [
              (0, i.jsx)(N, { filename: s }),
              (0, i.jsxs)("div", {
                className: S.Jg,
                children: [
                  (0, i.jsxs)("div", {
                    className: S.tP,
                    children: [
                      (0, i.jsx)("div", { className: S.iW, children: s }),
                      A
                        ? (0, i.jsx)("div", {
                            className: S.Ej,
                            children: `\u{2014} ${o().filesize(n.currentSize)}`,
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: S.L$,
                    children: E
                      ? g.intl.string(g.t.jfKTes)
                      : (0, i.jsx)(c.z, { value: n.progress, "aria-label": s }),
                  }),
                ],
              }),
              E
                ? null
                : (0, i.jsx)(u.D, {
                    onClick: l,
                    children: (0, i.jsx)(_.P, {
                      size: "md",
                      color: "currentColor",
                      className: S.x7,
                    }),
                  }),
            ],
          }),
        }),
      ],
    });
  }
  let O = function (e) {
    let {
      className: t,
      url: n,
      fileName: r,
      fileSize: a,
      onClick: l,
      onContextMenu: d,
      renderAdjacentContent: c,
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(S.Ig, t),
      children: [
        (0, i.jsxs)("div", {
          className: S.NJ,
          children: [
            (0, i.jsx)(N, { filename: r }),
            (0, i.jsxs)("div", {
              className: S.Jg,
              children: [
                (0, i.jsx)("div", {
                  className: S.RT,
                  children: (0, i.jsx)(E.Anchor, {
                    className: S.AD,
                    href: n,
                    onClick: l,
                    onContextMenu: d,
                    children: r,
                  }),
                }),
                (0, i.jsx)(A.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: o().filesize(a),
                }),
              ],
            }),
          ],
        }),
        null != c && c(),
      ],
    });
  };
}
