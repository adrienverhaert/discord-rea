/* Recovered shipped factory. Module 302495.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7256924..7257521
 * Raw property SHA-256: 930e6eddf09efb0f7c8c46d2aeccb6cf59cf6c2be6140f51976bcdff69128f9f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => d });
  var i = n(377941),
    r = n.n(i),
    a = n(323125),
    s = n(901123),
    l = n(746080);
  function o(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new a.x(`:${r()(e)}(${t})${n ? "?" : ""}`);
  }
  let d = {
    guildId() {
      let { name: e = "guildId", optional: t = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = s.Cr.map(r()).join("|");
      return o(e, `${n}|\\d+`, { optional: t });
    },
    channelId() {
      let { name: e = "channelId", optional: t = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = [...l.qW].map(r()).join("|");
      return o(e, `${n}|\\d+`, { optional: t });
    },
  };
}
