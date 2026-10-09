/* Recovered shipped factory. Module 119966.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11659175..11659461
 * Raw property SHA-256: a7b760750c94c46873729ae25e198bc5c05f71d0f17160b3780b0fc4825909bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => i });
  class i extends Error {
    errorCode;
    closeCode;
    code;
    message;
    name;
    constructor(e, t) {
      (super(t),
        "closeCode" in e
          ? ((this.code = e.closeCode), (this.closeCode = e.closeCode))
          : ((this.code = e.errorCode), (this.errorCode = e.errorCode)),
        (this.message = t),
        (this.name = "RPCError"));
    }
  }
}
