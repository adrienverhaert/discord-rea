/* Recovered shipped factory. Module 913122.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2240593..2241600
 * Raw property SHA-256: f0a401d3edbf6c7e6844714fb5c2073817be3050e2f6196a4907e4fbc7ce4619
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    eR: () => E,
    ex: () => u,
    ct: () => A,
    _: () => h,
    LG: () => a.A,
    Ey: () => s.Ay,
    Wl: () => r.A,
  });
  var i,
    r = n(178253),
    a = n(181658),
    s = n(136857);
  (s.Ay, n(274593));
  var l = n(58703),
    o = n(927813),
    d = n(660183);
  class c extends r.A {
    constructor(e, t) {
      (super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e)));
    }
    _getMessageFromRateLimit(e) {
      let t = e.body.retry_after,
        n = (0, l.Tf)(0, t * o.A.Millis.SECOND);
      return (0, l.uN)(n, { days: d.t["iXc/Ib"], hours: d.t.WW9P57, minutes: d.t.I7rYev });
    }
  }
  let u = c;
  var _ = n(652215);
  class E extends Error {
    code = _.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  }
  var A =
    (((i = {})[(i.GENERAL = 0)] = "GENERAL"),
    (i[(i.NO_FILE = 1)] = "NO_FILE"),
    (i[(i.PROGRESS = 2)] = "PROGRESS"),
    (i[(i.UPLOAD = 3)] = "UPLOAD"),
    (i[(i.READ = 4)] = "READ"),
    i);
  let h = class {
    code;
    constructor(e) {
      this.code = e;
    }
    get displayMessage() {
      switch (this.code) {
        case 1:
          return d.intl.string(d.t.dDMp2Z);
        case 2:
          return d.intl.string(d.t.XBxyvo);
        case 3:
          return d.intl.string(d.t["6b6rwk"]);
        case 4:
          return d.intl.string(d.t.VUc3ti);
        default:
          return d.intl.string(d.t.VzHcSm);
      }
    }
  };
}
