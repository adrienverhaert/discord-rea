/* Recovered shipped factory. Module 358579.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2552732..2553446
 * Raw property SHA-256: d89618fa425d3621821a287f16f837d381ffd3e010673debcd3059ce0b7e3616
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(280889),
    r = n(652215);
  async function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0,
      a = e.map(
        (e) =>
          new Promise((a, s) => {
            switch (e.status) {
              case i.jP.NOT_STARTED:
                e.upload();
                break;
              case i.jP.COMPLETED:
                a("complete");
                break;
              case i.jP.ERROR:
                t && e.error !== r.t02.ENTITY_TOO_LARGE
                  ? e.upload()
                  : s(Error("File failed to upload"));
                break;
              case i.jP.CANCELED:
                s(Error("Upload is canceled"));
                break;
              case i.jP.REMOVED_FROM_MSG_DRAFT:
                s(Error("Upload is removed from draft"));
            }
            (e.on("complete", () => {
              a("complete");
            }),
              e.on("error", () => {
                s(Error(`File ${e.id} failed to upload`));
              }),
              e.on("progress", (e, t) => {
                n?.(e, t);
              }));
          }),
      );
    await Promise.all(a);
  }
}
