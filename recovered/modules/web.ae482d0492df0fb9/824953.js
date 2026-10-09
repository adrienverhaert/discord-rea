/* Recovered shipped factory. Module 824953.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 721107..722909
 * Raw property SHA-256: f9ba903d76823c9761d669c846b6cb24b26893a72debd85845a960ed6db13beb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(435558),
    r = n.n(i),
    a = n(636537),
    s = n(73153),
    l = n(157559),
    o = n(652215),
    d = n(660183);
  let c = ["Spidey Bot", "Captain Hook"],
    u = {
      fetchForGuild(e) {
        (s.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
          a.Bo.get({
            url: o.Rsh.GUILD_WEBHOOKS(e),
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
          })
            .then((t) => {
              let { body: n } = t;
              return s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, webhooks: n });
            })
            .catch((t) => {
              let { body: n } = t;
              s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
            }));
      },
      fetchForChannel(e, t) {
        (s.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
          a.Bo.get({ url: o.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
            .then((n) => {
              let { body: i } = n;
              return s.h.dispatch({
                type: "WEBHOOKS_UPDATE",
                guildId: e,
                channelId: t,
                webhooks: i,
              });
            })
            .catch((t) => {
              let { body: n } = t;
              s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
            }));
      },
      create: (e, t, n) => (
        null == n && (n = c[r().random(0, c.length - 1)]),
        a.Bo.post({
          url: o.Rsh.CHANNEL_WEBHOOKS(t),
          body: { name: n },
          oldFormErrors: !0,
          rejectWithError: (0, a.fT)(),
        })
          .then((t) => {
            let { body: n } = t;
            return (s.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: n }), n);
          })
          .catch((e) => {
            let { body: t, status: n } = e;
            return (
              null != t && t.code === o.t02.TOO_MANY_WEBHOOKS
                ? l.A.show({ title: d.intl.string(d.t.cCqsca), body: d.intl.string(d.t["w+QZoX"]) })
                : 429 === n
                  ? l.A.show({
                      title: d.intl.string(d.t.cCqsca),
                      body: d.intl.string(d.t["YBM+UW"]),
                    })
                  : l.A.show({
                      title: d.intl.string(d.t.cCqsca),
                      body: d.intl.string(d.t["/4TwKf"]),
                    }),
              null
            );
          })
      ),
      delete: (e, t) =>
        a.Bo.del({ url: o.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: (0, a.fT)() }).then(
          () => {
            s.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          },
        ),
      update: (e, t, n) =>
        a.Bo.patch({
          url: o.Rsh.WEBHOOK(t),
          body: n,
          oldFormErrors: !0,
          rejectWithError: (0, a.fT)(),
        }).then((t) => {
          let { body: n } = t;
          return (s.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: n }), n);
        }),
    };
}
