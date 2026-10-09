/* Recovered shipped factory. Module 887501.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 78541..78923
 * Raw property SHA-256: cfb43fb8919bc3609622c973243bed410f61addf4fed6434d583ca5995742123
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => o, b: () => r });
  var i = n(17928),
    l = n(808728),
    s = n(576705),
    a = n(526132);
  function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A;
    return null == e
      ? []
      : t
          .getChannels(e)
          [l.I6].filter((e) => (0, a.n)(e.channel, n))
          .map((e) => e.channel);
  }
  function o(e) {
    return (0, i.yK)([s.A, l.Ay], () => r(e, l.Ay, s.A));
  }
}
