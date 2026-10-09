/* Recovered shipped factory. Module 968072.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 318189..319253
 * Raw property SHA-256: 7ec2215a0df28429203e352a4c1bb1f0e87392a1a7e70aba4914a9949a9dd0ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { RV: () => u, gd: () => o, qQ: () => c, vk: () => a });
  let r = /\(error: (.*)\)/,
    i = /captureMessage|captureException/;
  function o(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
    return (e, n = 0, o = 0) => {
      let a = [],
        l = e.split("\n");
      for (let e = n; e < l.length; e++) {
        let n = l[e];
        if (n.length > 1024) continue;
        let i = r.test(n) ? n.replace(r, "$1") : n;
        if (!i.match(/\S*Error: /)) {
          for (let e of t) {
            let t = e(i);
            if (t) {
              a.push(t);
              break;
            }
          }
          if (a.length >= 50 + o) break;
        }
      }
      var c = a.slice(o);
      if (!c.length) return [];
      let u = Array.from(c);
      return (
        /sentryWrapped/.test(s(u).function || "") && u.pop(),
        u.reverse(),
        i.test(s(u).function || "") && (u.pop(), i.test(s(u).function || "") && u.pop()),
        u
          .slice(0, 50)
          .map((e) => ({
            ...e,
            filename: e.filename || s(u).filename,
            function: e.function || "?",
          }))
      );
    };
  }
  function a(e) {
    return Array.isArray(e) ? o(...e) : e;
  }
  function s(e) {
    return e[e.length - 1] || {};
  }
  let l = "<anonymous>";
  function c(e) {
    try {
      if (!e || "function" != typeof e) return l;
      return e.name || l;
    } catch (e) {
      return l;
    }
  }
  function u(e) {
    let t = e.exception;
    if (t) {
      let e = [];
      try {
        return (
          t.values.forEach((t) => {
            t.stacktrace.frames && e.push(...t.stacktrace.frames);
          }),
          e
        );
      } catch (e) {}
    }
  }
}
