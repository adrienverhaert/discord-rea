/* Recovered shipped factory. Module 988102.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9720359..9721206
 * Raw property SHA-256: a992777f80bcdd87837b8e25806b378e1890d7d573d1ae42061bce5dab33ab9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  let i = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
    r = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
    a = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    s = /^(.*)#[0-9]{1,5}$/,
    l = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/,
    o = [
      "@",
      "#",
      ":",
      "```",
      "discord",
      "hypesquad",
      "system message",
      "system mesage",
      "sustem message",
      "sustem mesage",
    ],
    d = ["discordtag", "everyone", "here", "discord nitro", "discord"],
    c = {
      isEmail: function (e) {
        return i.test(e);
      },
      isInvite: function (e) {
        return r.test(e);
      },
      isPhoneNumber: function (e) {
        return a.test(e);
      },
      isUserTagLike: function (e) {
        let t = s.exec(e);
        if (null != t && t.length > 1) {
          let e = t[1],
            n = o.some((t) => e.includes(t)),
            i = d.includes(e);
          return !n && !i;
        }
        return !1;
      },
      isDiscoveryLink: function (e) {
        return l.test(e);
      },
    };
}
