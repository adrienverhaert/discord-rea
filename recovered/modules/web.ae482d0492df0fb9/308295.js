/* Recovered shipped factory. Module 308295.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4331278..4332344
 * Raw property SHA-256: c2bcdd4dd1f441e585c66eb8ee1587db13ce25725d28e5ad202bf11718679d84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => c, p: () => d });
  var i = n(192308),
    r = n(486020),
    a = n(339143),
    s = n(80569),
    l = n(157559),
    o = n(660183);
  function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!(0, a.W)()) {
      ((0, i.closeModal)(s.y), e.onClose?.());
      return;
    }
    !(function (e) {
      let { onConfirm: t } = e;
      l.A.show({
        title: o.intl.string(o.t.rWQr9U),
        body: o.intl.string(o.t["7Aa3S7"]),
        confirmText: o.intl.string(o.t["/k52hw"]),
        confirmVariant: "critical-primary",
        cancelText: o.intl.string(o.t["4nkxA+"]),
        onConfirm: t,
        onCancel: () => {
          l.A.close();
        },
      });
    })({
      onConfirm: () => {
        ((0, i.closeModal)(s.y), e.onClose?.());
      },
    });
  }
  async function c(e) {
    let t = r.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 128, forcePNG: !0 }),
      n = await fetch(t),
      i = await n.blob(),
      a = i.type;
    (null == a || "application/octet-stream" === a) &&
      (a = t.includes(".gif")
        ? "image/gif"
        : t.includes(".webp")
          ? "image/webp"
          : e.animated
            ? "image/gif"
            : "image/png");
    let s = new File([i], `${e.name}.${a.split("/")[1]}`, { type: a });
    return {
      data: await new Promise((e, t) => {
        let n = new FileReader();
        ((n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i));
      }),
      file: s,
      image: null,
    };
  }
}
