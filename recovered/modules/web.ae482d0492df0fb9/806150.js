/* Recovered shipped factory. Module 806150.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9724337..9727675
 * Raw property SHA-256: 46e081d612421572eb9c62d452233c0131051ff80c9ecb3d26464de5b2116565
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { i: () => S }), n(582128));
  var i = n(73153),
    r = n(157559),
    a = n(779185),
    s = n(101392),
    l = n(287809),
    o = n(174459),
    d = n(284009),
    c = n.n(d),
    u = n(451909),
    _ = n(963307),
    E = n(576705),
    A = n(652215);
  let h = new RegExp(/@(:?everyone|here)/);
  function f(e, t) {
    let n = 0;
    return t.isThread()
      ? (t.memberCount ?? 0)
      : (_.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
          ("@everyone" === e || t.id !== A.clD.OFFLINE) && (n += t.count);
        }),
        n);
  }
  let I = function (e, t) {
      let n = t.getGuildId();
      return (
        c()(null != n, "isGuildChannel with null guildId"),
        f(e, t) > 30 && E.A.can(A.xBc.MENTION_EVERYONE, t)
      );
    },
    p = function (e, t) {
      for (let n of u.Ay.parsePreprocessor(t, e)) {
        let e = (function e(t) {
          if ("string" == typeof t.content) {
            if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
            let e = t.content?.match(h);
            if (null != e) {
              let [t] = e;
              return t;
            }
          } else if (Array.isArray(t.content))
            for (let n of t.content) {
              let t = e(n);
              if (null != t) return t;
            }
          return null;
        })(n);
        if (null != e) return e;
      }
      return null;
    };
  var T = n(660183);
  let m = [
    {
      check(e, t, n) {
        if (!n || null == t.getGuildId()) return !1;
        let i = p(e, t);
        if (null == i || !I(i, t)) return !1;
        let r = f(i, t),
          a = Math.pow(10, Math.floor(Math.log10(r))),
          s = T.t["47E5Rz"];
        return (
          t.isForumPost() ? (s = T.t.sYW2cy) : t.isThread() && (s = T.t["2YaiQ1"]),
          {
            body: T.intl.formatToPlainString(s, {
              role: i,
              count: (Math.trunc(r / a) * a).toLocaleString(),
            }),
            footer: T.intl.string(T.t.mVyrtu),
          }
        );
      },
      analyticsType: "@Everyone Warning",
      animation: {
        dark: () => n.e("480467").then(n.t.bind(n, 661022, 19)),
        light: () => n.e("892705").then(n.t.bind(n, 111992, 19)),
      },
    },
    {
      check: (e) => !!A.AKn.test(e) && { body: T.intl.string(T.t.sTwS1a) },
      analyticsType: "API Token Warning",
    },
  ];
  var g = n(158045);
  function S(e) {
    let {
        openWarningPopout: t,
        type: n,
        content: d,
        channel: c,
        restrictMentions: u = !0,
        respectCooldown: _ = !0,
        hasStickers: E = !1,
        hasAttachments: h = !1,
        hasComponents: f = !1,
      } = e,
      I = g.Ay.canUseIncreasedMessageLength(l.default.getCurrentUser());
    return new Promise((e) =>
      (function (e) {
        let {
          openWarningPopout: t,
          type: n,
          content: l,
          channel: d,
          restrictMentions: c,
          respectCooldown: u,
          userCanUsePremiumMessageLength: _,
          hasStickers: E,
          hasAttachments: h,
          hasComponents: f,
          resolve: I,
        } = e;
        if (0 === l.length && !n.submit?.allowEmptyMessage && !E && !h && !f)
          return void I({ valid: !1, failureReason: A.X8x.EMPTY_MESSAGE });
        let p = _ ? A.CS1 : A.uvi;
        if (l.length > p) {
          if (_ || null == d) {
            var g;
            ((g = l.length),
              r.A.show({
                title: T.intl.string(T.t.l8rYLt),
                body: T.intl.formatToPlainString(T.t.FfjF15, { currentLength: g, maxLength: p }),
                confirmText: T.intl.string(T.t.BddRzS),
              }),
              o.default.track(A.HAw.OPEN_MODAL, {
                type: "Message Too Long Alert",
                message_content_length: g,
              }));
          } else i.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: d, content: l });
          I({ valid: !1, failureReason: A.X8x.MESSAGE_TOO_LONG });
          return;
        }
        if (null != d) {
          if (null != d.getGuildId() && u && s.A.getSlowmodeCooldownGuess(d.id) > 0)
            return void I({ valid: !1, failureReason: A.X8x.SLOWMODE_COOLDOWN });
          if (null != t)
            for (let { check: e, analyticsType: n, animation: i } of m) {
              let r = e(l, d, c);
              if (!1 !== r)
                return void t({
                  analyticsType: n,
                  channel: d,
                  onCancel: () => I({ valid: !1, failureReason: A.X8x.SHOUTING_CANCELLED }),
                  onConfirm: () => I({ valid: !0 }),
                  popoutText: r,
                  animation: i,
                });
            }
        }
        if (a.Ay.isFull()) {
          (r.A.show({
            title: T.intl.string(T.t["7Q4eo2"]),
            body: T.intl.string(T.t.gi6XHp),
            confirmText: T.intl.string(T.t["Z4U1g/"]),
          }),
            I({ valid: !1, failureReason: A.X8x.RATE_LIMITED }));
          return;
        }
        I({ valid: !0 });
      })({
        openWarningPopout: t,
        type: n,
        content: d,
        channel: c,
        restrictMentions: u,
        respectCooldown: _,
        userCanUsePremiumMessageLength: I,
        hasStickers: E,
        hasAttachments: h,
        hasComponents: f,
        resolve: e,
      }),
    );
  }
}
