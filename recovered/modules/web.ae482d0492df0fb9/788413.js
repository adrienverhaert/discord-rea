/* Recovered shipped factory. Module 788413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9867428..9869228
 * Raw property SHA-256: 11f253ad7a1fbf27133041e3463b88bd18d21d15a7c66654d767f7bd5e907998
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, n: () => a });
  var i,
    r = n(741918),
    a =
      (((i = {}).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"),
      (i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"),
      i);
  function s(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
  }
  function l(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
  }
  function o(e, t) {
    switch (t.type) {
      case r.X2.NAVIGATE_UP:
        let n;
        return (
          (n = s(0, e.focusedY - 1)),
          { ...e, focusedX: l(e.columnCounts[n] - 1, e.focusedX), focusedY: n }
        );
      case r.X2.NAVIGATE_DOWN:
        let i;
        return (
          (i = l(e.focusedY + 1, e.columnCounts.length - 1)),
          { ...e, focusedX: l(e.columnCounts[i] - 1, e.focusedX), focusedY: i }
        );
      case r.X2.NAVIGATE_RIGHT:
        let a, o, d;
        return (
          (o = (a =
            e.focusedY !== e.columnCounts.length - 1 &&
            e.focusedX + 1 === e.columnCounts[e.focusedY])
            ? 0
            : l(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)),
          (d = a ? e.focusedY + 1 : e.focusedY),
          { ...e, focusedX: o, focusedY: d }
        );
      case r.X2.NAVIGATE_LEFT:
        let c, u, _;
        return (
          (u = (c = 0 !== e.focusedY && 0 === e.focusedX) ? e.focusedY - 1 : e.focusedY),
          (_ = c ? e.columnCounts[u] - 1 : s(0, e.focusedX - 1)),
          { ...e, focusedX: _, focusedY: u }
        );
      case r.X2.NAVIGATE_INLINE_START:
        return { ...e, focusedX: 0 };
      case r.X2.NAVIGATE_INLINE_END:
        return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
      case r.X2.NAVIGATE_START:
        return { ...e, focusedX: 0, focusedY: 0 };
      case r.X2.NAVIGATE_END:
        let E;
        return (
          (E = e.columnCounts.length - 1),
          { ...e, focusedX: e.columnCounts[E] - 1, focusedY: E }
        );
      case "UPDATE_COLUMN_COUNTS":
        return (function (e, t) {
          let { columnCounts: n } = t,
            i = l(s(0, n.length - 1), e.focusedY);
          return {
            ...e,
            columnCounts: n,
            focusedX: l(null == n[i] ? 0 : n[i] - 1, e.focusedX),
            focusedY: i,
          };
        })(e, t);
      case "SET_FOCUSED_POSITION":
        return (function (e, t) {
          let { x: n, y: i } = t,
            r = s(0, l(i, e.columnCounts.length - 1));
          return { ...e, focusedX: s(0, l(n, e.columnCounts[r] - 1)), focusedY: r };
        })(e, t);
      case r.X2.SELECT_FOCUSED_ITEM:
        break;
      default:
        console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
  }
}
