/* Recovered shipped factory. Module 632903.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 47898..49066
 * Raw property SHA-256: 21b4b29ad4d13c8b7ed8c556f529bc88ebda902579cebfc05ee19737aaa74045
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var r = {
    lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  };
  let o = function (e, t, n) {
    var o,
      a = r[e];
    if (
      ((o =
        "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString())),
      null != n && n.addSuffix)
    )
      if (n.comparison && n.comparison > 0) return "in " + o;
      else return o + " ago";
    return o;
  };
}
