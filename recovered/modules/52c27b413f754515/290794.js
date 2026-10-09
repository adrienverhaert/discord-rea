/* Recovered shipped factory. Module 290794.
 * Source: recovered/web/assets/52c27b413f754515.js
 * UTF-16 property offsets: 8143..8695
 * Raw property SHA-256: 8ebd2ba993e0fe240643c0f89c77468fa8cf2ece19b8d62414085b37eb1474b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Tu: () => u, hd: () => a, y0: () => r, y5: () => o });
  var l = n(477900),
    i = n(582128);
  let s = i.createContext(void 0);
  function r() {
    let e = i.useContext(s);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
  }
  function o(e) {
    let { children: t, message: n, poll: r } = e,
      o = i.useMemo(() => ({ message: n, poll: r }), [n, r]);
    return (0, l.jsx)(s.Provider, { value: o, children: t });
  }
  function a(e) {
    return (function () {
      let { poll: e } = r();
      return e.resources;
    })().styles[e];
  }
  function u() {
    let { message: e } = r(),
      t = e.getChannelId();
    return i.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
  }
}
