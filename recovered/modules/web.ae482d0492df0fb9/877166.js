/* Recovered shipped factory. Module 877166.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4802575..4803072
 * Raw property SHA-256: 9cc395a6a849abc068019b0036d093b4adbb6c9b47d601ad895158dd1ce5f423
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r }), n(321073));
  var i = n(73153);
  class r {
    socket;
    static batchers = [];
    static flush(e, t) {
      for (let n of r.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    action = null;
    add;
    shouldFlush;
    constructor(e, t, n) {
      ((this.socket = e),
        (this.shouldFlush = n),
        (this.add = (e) => {
          this.action = t(this.action, e);
        }),
        r.batchers.push(this));
    }
    flush() {
      let { action: e } = this;
      ((this.action = null),
        null != e &&
          i.h
            .dispatch(e)
            .catch((t) =>
              this.socket.resetSocketAndClearCacheOnError({ error: t, action: e.type }),
            ));
    }
  }
}
