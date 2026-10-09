/* Recovered shipped factory. Module 824832.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5623799..5625516
 * Raw property SHA-256: f6b996fd70e81069c696c0c104eaa4e03569bf80fea600452dea08e919585c29
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Ay: () => E, UD: () => u }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(780777),
    l = n(946274),
    o = n(73621),
    d = n(693591);
  async function c(e) {
    try {
      let t = await new Promise((t, n) => {
          if (null != e) {
            let i = new FileReader();
            ((i.onload = (e) => {
              "string" == typeof e.target?.result
                ? t(e.target.result)
                : n(Error("Failed to read file"));
            }),
              i.readAsDataURL(e));
          }
        }),
        n = new Image();
      return ((n.src = t), await n.decode(), { image: n, dataURI: t });
    } catch {
      throw o.o.WRONG_TYPE;
    }
  }
  async function u(e, t) {
    var r;
    let s = [];
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      try {
        let { image: e, dataURI: n } = await c(i),
          r = i.type === d.a.MP4 ? await t(n, i) : await t(n, i, e);
        null != r && s.push({ type: r, filename: i.name });
      } catch (e) {
        s.push({ type: e, filename: i.name });
      }
    }
    s.length > 0 &&
      ((r = s),
      (0, a.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("223685"), n.e("484981")]).then(
          n.bind(n, 940372),
        );
        return (t) => (0, i.jsx)(e, { errors: r, ...t });
      }));
  }
  function _(e) {
    let {
        onChange: t,
        multiple: o = !0,
        disabled: d,
        className: c,
        tabIndex: _ = -1,
        "aria-label": E,
        filters: A,
        setLoading: h,
        title: f,
        ref: I,
      } = e,
      p = r.useRef(null),
      [T, m] = r.useState(!1);
    async function g(e) {
      (h?.(!0), await u(e, t), m(!0), h?.(!1));
    }
    async function S(e) {
      if (
        (e.stopPropagation(),
        e.preventDefault(),
        e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
      )
        return;
      let t = e.currentTarget.files;
      p.current = await (0, a.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("886895"), n.e("817259")]).then(
          n.bind(n, 897126),
        );
        return (n) => (0, i.jsx)(e, { processFiles: () => g(t), ...n });
      });
    }
    return (
      r.useEffect(() => {
        T && null !== p.current && ((0, a.closeModal)(p.current), (p.current = null));
      }, [T]),
      (0, i.jsx)(s.A, {
        ref: I,
        onChange: S,
        filters: A ?? (0, l.gA)(),
        multiple: o,
        disabled: d,
        className: c,
        tabIndex: _,
        "aria-label": E,
        title: f,
      })
    );
  }
  _.displayName = "ImageInputWithModals";
  let E = _;
}
