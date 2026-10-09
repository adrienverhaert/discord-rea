/* Recovered shipped factory. Module 795129.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5897798..5898248
 * Raw property SHA-256: ba02662e08e76fc65246b5a7b718d02b89776cfd06740e7fa5462c28a12397d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  async function i(e) {
    if (e.size > 0) return e.size;
    try {
      return await new Promise((t, n) => {
        let i = new FileReader(),
          r = setTimeout(() => {
            n(Error("File read timeout"));
          }, 1e4);
        ((i.onload = (e) => {
          clearTimeout(r);
          let i = e.target?.result;
          i instanceof ArrayBuffer
            ? t(i.byteLength)
            : n(Error("Unexpected FileReader result type"));
        }),
          (i.onerror = () => {
            (clearTimeout(r), n(Error("Could not read file")));
          }),
          i.readAsArrayBuffer(e));
      });
    } catch (e) {
      return 0;
    }
  }
  n.d(t, { _: () => i });
}
