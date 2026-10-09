/* Recovered shipped factory. Module 264927.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2577652..2578195
 * Raw property SHA-256: 8ffac576c5f6fade28c8fcd321fc99a5d9116fe181042a47753950569e333adb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z7: () => c, l2: () => d, l6: () => s, lW: () => a, oz: () => l, zV: () => o });
  var i = n(915089),
    r = n(660183);
  let a = (0, i.Ld)(),
    s = (0, i.Ld)(),
    l = (0, i.Ld)(),
    o = (0, i.Ld)(),
    d = (0, i.Ld)();
  function c() {
    [
      { id: a, text: "," },
      { id: s, text: "," },
      { id: l, text: r.intl.string(r.t.gHp0C4) },
      { id: o, text: r.intl.string(r.t.GzDTxY) },
      { id: d, text: r.intl.string(r.t.SO93uu) },
    ].forEach((e) => {
      let { id: t, text: n } = e,
        i = document.getElementById(t);
      null == i &&
        ((i = document.createElement("div")).setAttribute("id", t),
        (i.innerText = n),
        (i.style.display = "none"),
        document.body.appendChild(i));
    });
  }
}
