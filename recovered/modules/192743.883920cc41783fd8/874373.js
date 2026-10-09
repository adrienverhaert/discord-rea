/* Recovered shipped factory. Module 874373.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 53283..53963
 * Raw property SHA-256: 96d0a42cb2e5b4030567f54fb711fa011f0c8be70eef87623f7807f524c781a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => s }));
  var r = n(632903),
    o = n(385987),
    a = {
      date: (0, o.A)({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: (0, o.A)({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: (0, o.A)({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    i = n(247320),
    u = n(416616),
    l = n(899024);
  let s = {
    code: "en-US",
    formatDistance: r.A,
    formatLong: a,
    formatRelative: i.A,
    localize: u.A,
    match: l.A,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
}
