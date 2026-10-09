/* Recovered shipped factory. Module 187207.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10537397..10538001
 * Raw property SHA-256: a38d82ab7b2819750ff3de975139ae2f6ae9558aa4de9a6862ca68adac3d1dd1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { n: () => o });
  var i = n(824120),
    r = n.n(i),
    a = n(264572);
  function s(e) {
    return 0 | e.mod(0x100000000).toJSNumber();
  }
  function l(e) {
    return 0 | e.shiftRight(32).toJSNumber();
  }
  class o {
    _randomPrefix = 0 | Math.floor(0x100000000 * Math.random());
    _creationTime = r()(Date.now());
    _sequenceNumber = 0;
    generate(e) {
      let t = r()(e),
        n = 0 | this._sequenceNumber++,
        i = new a.Buffer(24);
      return (
        i.writeInt32LE(s(t), 0, !0),
        i.writeInt32LE(l(t), 4, !0),
        i.writeInt32LE(this._randomPrefix, 8, !0),
        i.writeInt32LE(s(this._creationTime), 12, !0),
        i.writeInt32LE(l(this._creationTime), 16, !0),
        i.writeInt32LE(n, 20, !0),
        i.toString("base64")
      );
    }
  }
}
