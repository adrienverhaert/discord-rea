/* Recovered shipped factory. Module 774926.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3975580..3979706
 * Raw property SHA-256: 8b9ce1a2bfb705fa5fc5a326fa66fbe406210ffd33f52f23164b6920a8a58c0d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { XN: () => b, C4: () => y, nO: () => D, D8: () => P });
  var i = n(582128),
    r = n(17928),
    a = n(573648),
    s = n(541806),
    l = n(141639),
    o = n(61330),
    d = n(587895),
    c = n(429913),
    u = n(189117),
    _ = n(462887),
    E = n(736653),
    A = n(661531),
    h = n(308665);
  function f(e) {
    let t = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><mask id="wand"><rect x="2" y="2" width="20" height="20" rx="3" fill="#fff"/><g transform="translate(6 6) scale(0.5)" fill="#000"><path d="${h.fy}"/><path d="${h.tW}"/><path d="${h.tE}"/></g></mask><rect x="2" y="2" width="20" height="20" rx="3" fill="${e}" mask="url(#wand)"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(t)}`;
  }
  let I = {
    light: f(A.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()),
    dark: f(A.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
  };
  var p = n(569926),
    T = n(82149),
    m = n(174459),
    g = n(970928),
    S = n(486020),
    N = n(20805),
    C = n(327098),
    O = n(652215),
    R = n(818023),
    L = n(660183);
  function y(e) {
    let t = e?.getIconURL(R.iu.LARGE),
      n = e?.name;
    if (null != t)
      return {
        src: t,
        alt:
          null == n
            ? L.intl.string(L.t["2B/phM"])
            : L.intl.formatToPlainString(L.t.tiKyYg, { applicationName: n }),
      };
  }
  function D(e) {
    let t,
      { entry: n, showCoverImage: i = !0, trackingSource: r } = e,
      { activity: a, activityApplication: s, fallbackApplication: l } = (0, C.A)(n),
      o = l ?? s,
      { largeImage: d, smallImage: c } = P(a, s),
      { largeImage: u } = v(a, o),
      _ = o?.getCanonicalGameId(),
      { data: E } = (0, p.I)(_),
      A = E?.getCoverURL(),
      h =
        (0, N.Tq)(n) && n.extra.entries.length > 0
          ? { src: n.extra.entries[0].media.image_url }
          : (0, N.Lf)(n)
            ? {
                src: (0, g.uD)(
                  n.extra.application_id,
                  n.extra.media_assets_large_image,
                  R.iu.LARGE,
                ),
                alt: n.extra.media_title,
              }
            : (0, N.p6)(n)
              ? { src: n.extra.media.image_url }
              : void 0;
    return (
      (t =
        null != d
          ? { largeImage: d, smallImage: c }
          : null != h
            ? { largeImage: h, smallImage: void 0 }
            : null != A && i
              ? { largeImage: { src: A }, smallImage: void 0 }
              : { largeImage: u, smallImage: void 0 }),
      M({ activity: a, application: l ?? s, largeImageSrc: t.largeImage?.src, trackingSource: r }),
      t
    );
  }
  function v(e, t) {
    let { largeImage: n, smallImage: i } = P(e, t);
    return (function (e) {
      let { activity: t, application: n, largeImage: i, smallImage: r, conjureImage: s } = e;
      if (null != i) return { largeImage: i, smallImage: r };
      if ((0, T.Cy)(t)) {
        let e = (0, T.UW)(t),
          n =
            null != e
              ? S.Ay.getGuildIconURL({
                  id: e.guildId,
                  icon: t?.assets?.small_image,
                  size: R.iu.SMALL,
                })
              : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
      }
      if ((0, o.A)(t))
        return {
          largeImage: { src: a.A.get(O.fg2.XBOX).icon.customPNG, alt: L.intl.string(L.t.Nfvo72) },
          smallImage: void 0,
        };
      if (null == r && (0, l.A)(t))
        return {
          largeImage: {
            src: a.A.get(O.fg2.PLAYSTATION).icon.lightPNG,
            alt: L.intl.string(L.t.fFl4jo),
          },
          smallImage: void 0,
        };
      if ((0, u.$_)(t)) return { largeImage: { src: s, alt: t?.name }, smallImage: void 0 };
      let d = y(n);
      return null != d ? { largeImage: d, smallImage: r } : { largeImage: r, smallImage: void 0 };
    })({
      activity: e,
      application: t,
      largeImage: n,
      smallImage: i,
      conjureImage: (0, _.M)((0, E.Ay)()) ? I.dark : I.light,
    });
  }
  function b(e, t, n) {
    let i = v(e, t);
    return (
      M({ activity: e, application: t, largeImageSrc: i.largeImage?.src, trackingSource: n }),
      i
    );
  }
  function M(e) {
    let { activity: t, application: n, largeImageSrc: a, trackingSource: s } = e,
      l = t?.application_id,
      o = (0, c.h)(l),
      u = (0, r.bG)([d.A], () => null != l && d.A.didFetchingApplicationFail(l)),
      _ = null == l || null != o || u,
      E = null != o || null != n,
      A = null == a,
      h = t?.name,
      f = t?.type,
      I = t?.session_id,
      p = t?.assets?.large_image != null || t?.assets?.small_image != null,
      T = null != t;
    (0, i.useEffect)(() => {
      T &&
        _ &&
        A &&
        m.default.track(O.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
          source: s,
          application_id: l,
          activity_name: h,
          activity_type: f,
          activity_session_id: I,
          application_found: E,
          has_rich_assets: p,
        });
    }, [s, T, _, A, l, h, f, I, E, p]);
  }
  function P(e, t) {
    let n = (0, c.h)(e?.application_id),
      i = t ?? n,
      { data: r } = (0, p.I)(i?.getCanonicalGameId());
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let a = e?.assets?.large_image,
      l =
        null != a
          ? {
              src: (0, g.uD)(e.application_id, a, [R.iu.LARGE, R.iu.LARGE]),
              text: e.assets?.large_text?.trim(),
              url: e.assets?.large_url,
            }
          : void 0,
      o = (0, s.A)(e) ? void 0 : e?.assets?.small_image,
      d =
        null != o
          ? {
              src: (0, g.uD)(e.application_id, o, [R.iu.LARGE, R.iu.LARGE]),
              text: e.assets?.small_text?.trim(),
              url: e.assets?.small_url,
            }
          : void 0;
    return {
      largeImage:
        l ??
        (function (e) {
          let t = e?.getIconURL(R.iu.LARGE);
          if (null != e && null != t)
            return {
              src: t,
              alt: L.intl.formatToPlainString(L.t.tiKyYg, { applicationName: e.name }),
            };
        })(r) ??
        y(i),
      smallImage: d,
    };
  }
}
