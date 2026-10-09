/* Recovered shipped factory. Module 556300.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5795171..5796121
 * Raw property SHA-256: df96d5ae7fdc651a1038bd61e027b66248d58358c98020e7ee48ce062176717d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(442433),
    s = n(332173),
    l = n(37632),
    o = n(734057),
    d = n(706083),
    c = n(143145),
    u = n(652215);
  function _(e) {
    return {
      react(t, _, E) {
        let A = o.A.getChannel(t.channelId),
          h = E.noStyleAndInteraction
            ? void 0
            : (n) => {
                (e.shouldStopPropagation && n?.stopPropagation(),
                  (0, d.o)(t.guildId, t.channelId, t.messageId),
                  e.shouldCloseDefaultModals && (0, r.closeAllModals)());
              },
          f =
            E.noStyleAndInteraction || null == t.channelId || (null == A && null == t.originalLink)
              ? u.tEg
              : (e) => {
                  (0, a.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("638221"),
                      n.e("343266"),
                      n.e("404391"),
                    ]).then(n.bind(n, 254106));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        channel: A,
                        channelId: A?.id ?? t.channelId,
                        originalLink: t.originalLink,
                        messageId: t.messageId,
                      });
                  });
                };
        return (0, i.jsxs)(
          s.A,
          {
            role: "link",
            onClick: h,
            onContextMenu: f,
            className: "channelMention",
            children: [
              null != t.inContent ? _(t.inContent, E) : null,
              null != t.inContent ? (0, i.jsx)(l.A, {}) : null,
              (0, c.t)(t, _, E),
            ],
          },
          E.key,
        );
      },
    };
  }
}
