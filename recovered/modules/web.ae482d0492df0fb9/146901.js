/* Recovered shipped factory. Module 146901.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6070277..6070891
 * Raw property SHA-256: eae481c42030d414f980b47f54931a294f002a4c71536b2674eb7a6178098790
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => a });
  var i = n(660183);
  function r(e, t) {
    return (
      e.getFullYear() === t.getFullYear() &&
      e.getMonth() === t.getMonth() &&
      e.getDate() === t.getDate()
    );
  }
  function a(e) {
    let t = new Date(Number(e)),
      n = r(t, new Date()),
      a = new Date();
    a.setDate(a.getDate() + 1);
    let s = r(t, a),
      l = i.intl.data.formatTime(t, { format: "short" });
    return n
      ? {
          kind: "today",
          dateString: i.intl.data.formatRelativeTime(0, "day", { numeric: "auto" }),
          timeString: l,
        }
      : s
        ? {
            kind: "tomorrow",
            dateString: i.intl.data.formatRelativeTime(1, "day", { numeric: "auto" }),
            timeString: l,
          }
        : {
            kind: "date",
            dateString: i.intl.data.formatDate(t, { dateStyle: "short" }),
            timeString: l,
          };
  }
}
