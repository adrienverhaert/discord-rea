/* Recovered shipped factory. Module 749394.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3869679..3870197
 * Raw property SHA-256: d7229bf8b0c2e15748a25de3c6bf5a2d2ed14407bf6989a088e5dc514950c7cf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(440745),
    r = n.n(i),
    a = n(317097),
    s = n(315069);
  class l extends s.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
      (super(),
        (this.backgroundColors = e.backgroundColors),
        (this.buttonColors = e.buttonColors),
        (this.confettiColors = e.confettiColors));
    }
    static fromServer(e) {
      let { background_colors: t, button_colors: n, confetti_colors: i } = e;
      return new l({
        backgroundColors: t.map((e) => r()((0, a.Hl)(e))),
        buttonColors: n.map((e) => r()((0, a.Hl)(e))),
        confettiColors: i.map((e) => r()((0, a.Hl)(e))),
      });
    }
  }
}
