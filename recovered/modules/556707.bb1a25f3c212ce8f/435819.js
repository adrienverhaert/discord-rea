/* Recovered shipped factory. Module 435819.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 300220..301181
 * Raw property SHA-256: dae4cec86a522b87d1a1bba10b276059932974046b9ba9cac1390c3896a7f291
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { De: () => c, sv: () => a, yD: () => l });
  var r = n(780755),
    i = n(875565),
    o = n(272469);
  let a = "sentry-",
    s = /^sentry-/;
  function l(e) {
    let t = (function (e) {
      if (e && ((0, i.Kg)(e) || Array.isArray(e)))
        return Array.isArray(e)
          ? e.reduce(
              (e, t) => (
                Object.entries(u(t)).forEach(([t, n]) => {
                  e[t] = n;
                }),
                e
              ),
              {},
            )
          : u(e);
    })(e);
    if (!t) return;
    let n = Object.entries(t).reduce(
      (e, [t, n]) => (t.match(s) && (e[t.slice(a.length)] = n), e),
      {},
    );
    return Object.keys(n).length > 0 ? n : void 0;
  }
  function c(e) {
    if (e) {
      var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${a}${t}`] = n), e), {});
      return 0 !== Object.keys(t).length
        ? Object.entries(t).reduce((e, [t, n], i) => {
            let a = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
              s = 0 === i ? a : `${e},${a}`;
            return s.length > 8192
              ? (r.T &&
                  o.vF.warn(
                    `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                  ),
                e)
              : s;
          }, "")
        : void 0;
    }
  }
  function u(e) {
    return e
      .split(",")
      .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
      .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
  }
}
