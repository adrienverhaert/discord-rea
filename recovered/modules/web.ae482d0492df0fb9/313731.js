/* Recovered shipped factory. Module 313731.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7277372..7277919
 * Raw property SHA-256: 34d6720adeb64dffd598f74cdb0d4ece0cc1aa36c8fdc999ae3c7759042cb1d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(435558),
    r = n.n(i),
    a = n(636401),
    s = n(652215);
  class l {
    source;
    version;
    encoding;
    id = r().uniqueId();
    authorization = { authing: !1, scopes: new Set(), accessToken: null, expires: new Date(0) };
    application = { id: null, name: null, icon: null };
    abortController = new AbortController();
    constructor(e, t, n) {
      ((this.source = e), (this.version = t), (this.encoding = n), this.checkRpcVersion(t));
    }
    checkRpcVersion(e) {
      if (null == e || e > s.dL4 || e < 1)
        throw new a.A({ closeCode: s.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
    get transport() {
      return this.source.type;
    }
  }
}
