/* Recovered shipped factory. Module 571654.
 * Source: recovered/web/assets/56de58e916bd49dd.js
 * UTF-16 property offsets: 2471..2878
 * Raw property SHA-256: 35c2c7062da8a7c54d7288e2d96016741f973d66996d403f14f38b4da8546b4a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { X: () => o, z: () => c });
  var r = e(582128),
    a = e(580630),
    i = e(660183);
  function c(t) {
    return r.useMemo(() => {
      if (null == t) return;
      let n = null != t.role_id,
        e = t.attachments_count > 0;
      return n && e
        ? i.intl.string(i.t.ih4QMU)
        : n
          ? i.intl.string(i.t.o9xphc)
          : e
            ? i.intl.string(i.t.DWYJua)
            : void 0;
    }, [t]);
  }
  function o(t) {
    return r.useMemo(() => {
      if (t?.price == null) return;
      let { amount: n, currency: e } = t.price;
      return (0, a.$g)(n, e);
    }, [t]);
  }
}
