/* Recovered shipped factory. Module 927813.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9540193..9540525
 * Raw property SHA-256: bb098999c4563146a29d1931434f21531eb9ff01f91551e2f7dbf7f976872de3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  let i = Object.freeze({
      HALF_SECOND: 500,
      SECOND: 1e3,
      MINUTE: 6e4,
      HOUR: 36e5,
      DAY: 864e5,
      WEEK: 6048e5,
      DAYS_30: 2592e6,
    }),
    r = {
      Millis: i,
      Seconds: Object.freeze({
        SECOND: 1,
        MINUTE: 60,
        HOUR: 3600,
        DAY: 86400,
        WEEK: 604800,
        DAYS_30: 2592e3,
      }),
      Minutes: Object.freeze({ MINUTE: 1, HOUR: 60, DAY: 1440, WEEK: 10080, DAYS_30: 43200 }),
    };
}
