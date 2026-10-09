/* Recovered shipped factory. Module 189344.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4604320..4604710
 * Raw property SHA-256: 5898557aa760ca72495ddce85155e6d9d40ea82ea712bbcba13a705b515863e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(439372),
    r = n(254160),
    a = n(832286),
    s = n(958340),
    l = n(128391),
    o = n(71393),
    d = n(652215);
  function c(e) {
    if (e.message_reference?.type !== d.SH7.FORWARD) return;
    let t = e.message_reference.guild_id;
    null == t ||
      (null == o.A.getGuild(t) && null == s.A.getGuildOrStatus(t) && (0, r.f)(() => (0, a.y)(t)));
  }
  class u extends i.A {
    constructor() {
      (super(), (0, l.A)(this, c));
    }
  }
  let _ = new u();
}
