/* Recovered shipped factory. Module 715943.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 559567..560083
 * Raw property SHA-256: 6052f27065b80607707a45d663f503be1cc2d4fe8a8189b7264b093f48de7614
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(636537),
    r = n(148494),
    a = n(652215),
    s = n(660183);
  let l = {
    changeNickname: (e, t, n, l) =>
      i.Bo.patch({
        url: a.Rsh.GUILD_MEMBER_NICK(e, n),
        body: { nick: l },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      }).then(
        (e) => {
          ((l = e.body.nick),
            r.A.sendBotMessage(
              t,
              null != l && "" !== l
                ? s.intl.formatToMarkdownString(s.t["gz+HRq"], { nick: l })
                : s.intl.string(s.t.Vhpd9A),
            ));
        },
        (e) => {
          403 === e.status
            ? r.A.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jO, {}))
            : r.A.sendBotMessage(t, s.intl.string(s.t["5LO/Ss"]));
        },
      ),
  };
}
