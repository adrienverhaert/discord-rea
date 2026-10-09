/* Recovered shipped factory. Module 697470.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5971922..5972244
 * Raw property SHA-256: d6aa9693cc6b142f2f5b2f3ab2b572b8a80491ca7d756d1a54898cd32388781b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(427930),
    r = n(320095),
    a = n(143413),
    s = n(652215);
  function l(e, t) {
    return (
      !(
        null == t ||
        e.author.id !== t ||
        e.state !== s.cmJ.SENT ||
        (0, a.A)(e) ||
        !(0, r.ei)(e) ||
        e.hasFlag(s.pr7.IS_VOICE_MESSAGE) ||
        null != e.referralTrialOfferId ||
        e.isPoll() ||
        (0, i.A)(e)
      ) && e.type !== s.lAJ.MEDIA_MENTION_MESSAGE
    );
  }
}
