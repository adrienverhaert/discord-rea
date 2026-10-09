/* Recovered shipped factory. Module 774812.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4571895..4572320
 * Raw property SHA-256: cea5dd2677bfbe46dfca051ba4a2c26b31686dc9e5340af9aa3b8f8bba3d85f1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(506774),
    r = n(439372);
  let a = "formGuidelinesStorageKey";
  class s extends r.A {
    seenForumGuidelines = new Set();
    _initialize() {
      let e = i.w.get(a);
      null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
      i.w.set(a, this.seenForumGuidelines);
    }
    markAsSeen(e) {
      (this.seenForumGuidelines.add(e), i.w.set(a, this.seenForumGuidelines));
    }
    hasSeen(e) {
      return this.seenForumGuidelines.has(e);
    }
  }
  let l = new s();
}
