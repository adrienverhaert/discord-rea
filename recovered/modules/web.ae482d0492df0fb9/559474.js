/* Recovered shipped factory. Module 559474.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3898251..3905874
 * Raw property SHA-256: 28d101a2754d859ed7780f414153facb31016eadf3b614194b4e4b22305d1d44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    GF: () => S,
    KE: () => C,
    Kx: () => m,
    Li: () => p,
    Lv: () => x,
    Ni: () => g,
    RN: () => h,
    aL: () => f,
    ds: () => F,
    eg: () => G,
    pd: () => L,
  }),
    n(321073),
    n(323874),
    n(14289),
    n(35956));
  var i,
    r,
    a = n(582128),
    s = n(739187),
    l = n(857250),
    o = n(97483),
    d = n(626584),
    c = n(59318),
    u = n(597404),
    _ = n(561509),
    E = n(940622);
  let A = new d.A("ShopAssetsPreviewUtils");
  var h =
    (((i = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
    (i.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
    (i.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
    (i.HERO_BANNER_STATIC = "hero_banner"),
    (i.HERO_BANNER_ANIMATED = "hero_banner_animated"),
    (i.HERO_BANNER_RIVE = "hero_rive"),
    (i.HERO_LOGO = "hero_logo"),
    (i.FEATURED_BLOCK = "featured_block"),
    (i.UPSELL_BANNER = "upsell_banner"),
    (i.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
    (i.PDP_BACKGROUND = "pdp_bg"),
    (i.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
    (i.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
    (i.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
    (i.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
    (i.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
    (i.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
    (i.TAB_TOOLTIP = "tab_tooltip"),
    (i.LOGO = "logo"),
    (i.MOBILE_BANNER = "mobile_banner"),
    (i.MOBILE_BACKGROUND = "mobile_bg"),
    (i.MOBILE_HERO = "mobile_hero"),
    i);
  let f = {
      catalog_banner: ["jpg", "png"],
      catalog_banner_animated: ["webm"],
      catalog_banner_rive: ["riv"],
      hero_banner: ["jpg", "png"],
      hero_banner_animated: ["webm"],
      hero_rive: ["riv"],
      hero_logo: ["png"],
      featured_block: ["png"],
      upsell_banner: ["jpg", "png"],
      upsell_banner_popout: ["png"],
      pdp_bg: ["jpg"],
      shop_button_bg_hover: ["png"],
      shop_button_bg_hover_dark: ["png"],
      shop_button_bg_hover_light: ["png"],
      shop_button_bg_resting: ["png"],
      shop_button_bg_resting_dark: ["png"],
      shop_button_bg_resting_light: ["png"],
      tab_tooltip: ["jpg", "png"],
      logo: ["png"],
      mobile_banner: ["jpg"],
      mobile_bg: ["jpg"],
      mobile_hero: ["jpg"],
    },
    I = new Map(Object.values(h).flatMap((e) => f[e].map((t) => [`${e}.${t}`, e]))),
    p = new Set(I.keys()),
    T = ".DS_Store";
  var m =
    (((r = {}).COLLECTION = "collection"),
    (r.AVATAR_DECORATIONS = "avatar_decorations"),
    (r.FRAMES = "frames"),
    (r.NAMEPLATES = "nameplates"),
    (r.PROFILE_EFFECTS = "profile_effects"),
    r);
  function g(e) {
    (0, s.P)((0, l.o)(e, o.Ck.FAILURE));
  }
  function S(e) {
    (0, s.P)((0, l.o)(e, o.Ck.SUCCESS));
  }
  function N(e, t) {
    let n = new FileReader();
    ((n.onload = (n) => {
      null == n.target || "string" != typeof n.target.result
        ? g("Error uploading file. Try again!")
        : t(e, n.target.result);
    }),
      n.readAsDataURL(e));
  }
  function C(e, t, n) {
    if (0 === e.length) return void n?.("No files found!");
    for (let n of e) N(n, t);
  }
  function O(e, t) {
    return `${e}/${t}`;
  }
  function R(e) {
    return (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name);
  }
  function L(e) {
    return I.get(e.name) ?? null;
  }
  async function y(e) {
    let t = e.createReader();
    return (await new Promise((e) => t.readEntries(e))).filter(
      (e) => !(e.isDirectory && e.name.startsWith("_")),
    );
  }
  async function D(e) {
    let t = [];
    if (e.isFile) {
      let n = await new Promise((t) => e.file(t));
      n.name !== T && t.push(n);
    } else if (e.isDirectory) {
      let n = await y(e),
        i = await Promise.all(n.map((e) => D(e)));
      t.push(...i.flat());
    }
    return t;
  }
  function v(e, t, n, i) {
    if (t.name === T) return;
    let r = O(e, t.name);
    if ("profile_effects" === n)
      R(t) || t.name.endsWith(".txt")
        ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
          i.profileEffectFilesMap[e].push(t))
        : i.ignoredFilenames.push(O(e, t.name));
    else
      R(t)
        ? "collection" === n || null === n
          ? null != L(t)
            ? i.collectionFiles.push(t)
            : i.ignoredFilenames.push(r)
          : "avatar_decorations" === n
            ? i.avatarDecorationFiles.push(t)
            : i.ignoredFilenames.push(r)
        : i.ignoredFilenames.push(r);
  }
  async function b(e, t, n) {
    for (let i of await y(e))
      if (i.isFile) {
        let r = i,
          a = await new Promise((e) => r.file(e));
        v(e.name, a, t, n);
      } else {
        let e = await D(i);
        n.ignoredFilenames.push(...e.map((e) => O(i.name, e.name)));
      }
  }
  async function M(e, t) {
    let n = e.name,
      i = await y(e),
      r = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
    for (let e of i) {
      if (e.isFile) {
        if (e.name === T) continue;
        let i = e,
          a = await new Promise((e) => i.file(e));
        (0, u.Y_)(a.name) ? (r.previewFile = a) : t.ignoredFilenames.push(`frames/${n}/${a.name}`);
        continue;
      }
      if (e.isDirectory) {
        let i = e.name;
        if ("foreground" === i || "background" === i) {
          for (let a of await y(e))
            if (a.isFile && a.name !== T) {
              let e = a,
                t = await new Promise((t) => e.file(t));
              r.layerFiles.push({ file: t, folder: i });
            } else if (a.isDirectory) {
              let e = await D(a);
              t.ignoredFilenames.push(...e.map((e) => `frames/${n}/${i}/${a.name}/${e.name}`));
            }
        } else {
          r.unrecognizedSubdirs.push(i);
          let a = await D(e);
          t.ignoredFilenames.push(...a.map((e) => `frames/${n}/${i}/${e.name}`));
        }
      }
    }
    (null != r.previewFile || 0 !== r.layerFiles.length) && (t.profileFrameDirsMap[n] = r);
  }
  async function P(e, t) {
    for (let n of await y(e))
      n.isDirectory
        ? await M(n, t)
        : n.isFile && n.name !== T && t.ignoredFilenames.push(`frames/${n.name}`);
  }
  async function U(e, t) {
    for (let n of await y(e))
      n.isDirectory
        ? await b(n, "profile_effects", t)
        : n.isFile && n.name !== T && t.ignoredFilenames.push(O(e.name, n.name));
  }
  async function w(e, t) {
    for (let n of await y(e))
      if (n.isDirectory) {
        let e = n;
        if ("collection" === e.name) await b(e, "collection", t);
        else if ("avatar_decorations" === e.name) await b(e, "avatar_decorations", t);
        else if ("profile_effects" === e.name) await U(e, t);
        else if ("frames" === e.name) await P(e, t);
        else {
          let n = await D(e);
          t.ignoredFilenames.push(...n.map((t) => O(e.name, t.name)));
        }
      }
  }
  async function G(e) {
    let t = {
      collectionFiles: [],
      avatarDecorationFiles: [],
      profileEffectFilesMap: {},
      profileFrameDirsMap: {},
      ignoredFilenames: [],
    };
    for (let n of e)
      if (n.isDirectory) {
        let e = n.name;
        "collection" === e || "avatar_decorations" === e
          ? await b(n, e, t)
          : "profile_effects" === e
            ? await U(n, t)
            : "frames" === e
              ? await P(n, t)
              : await w(n, t);
      } else if (n.isFile) {
        let e = n;
        v("", await new Promise((t) => e.file(t)), null, t);
      }
    return (
      t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
      t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
      t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
      t
    );
  }
  function x(e) {
    return new Promise((t, n) => {
      let i = new window.Image(),
        r = setTimeout(() => n(Error("Timed out measuring image")), 15e3);
      ((i.onload = () => {
        (clearTimeout(r), t({ width: i.naturalWidth, height: i.naturalHeight }));
      }),
        (i.onerror = () => {
          (clearTimeout(r), n(Error("Failed to measure image")));
        }),
        (i.src = e));
    });
  }
  async function k(e, t, n) {
    let i = null != t.previewFile ? URL.createObjectURL(t.previewFile) : null,
      r = [],
      a = {};
    for (let { file: i, folder: s } of t.layerFiles) {
      let { parsed: t, errorType: l } = (0, u.Mf)(i.name);
      if (null == t) {
        let t = null != l ? u.h4[l] : "invalid";
        n.push(`frames/${e}/${s}/${i.name}: ${t}`);
        continue;
      }
      let o = u.R9[s],
        d = `preview-${e}-${o}-${t.index}`;
      (r.push({
        layer: { id: d, type: t.type, order: o, anchor: t.anchor, responsive: t.responsive },
        order: o,
        index: t.index,
      }),
        (a[d] = URL.createObjectURL(i)));
    }
    r.sort(u.ui);
    let s = r.map((e) => e.layer);
    if (0 === s.length && null == i) return null;
    let l = (
      await Promise.all(
        r.map(async (e) => {
          let { layer: t } = e;
          try {
            return { layer: t, dims: await x(a[t.id]) };
          } catch (e) {
            return (A.error(`Failed to measure preview layer ${t.id}:`, e), null);
          }
        }),
      )
    ).filter((e) => null != e);
    return { key: e, previewSrc: i, layers: s, layerSrcByLayerId: a, ...(0, _.l)(l) };
  }
  function F() {
    let [e, t] = a.useState(() => ({
        collectionFiles: [],
        avatarDecorationFiles: [],
        profileEffectFilesMap: {},
        profileFrameDirsMap: {},
        ignoredFilenames: [],
      })),
      {
        upsertCollectionAsset: n,
        upsertAvatarDecorationAsset: i,
        upsertProfileFrame: r,
      } = (0, E.JE)(),
      s = a.useCallback(
        async (e) => {
          let a = await G(e);
          (a.collectionFiles.forEach((e) => {
            N(e, (e) => {
              let t = L(e);
              null != t && n(t, e);
            });
          }),
            a.avatarDecorationFiles.forEach((e) => {
              N(e, (e) => {
                i(e);
              });
            }),
            await Promise.all(
              Object.entries(a.profileFrameDirsMap).map(async (e) => {
                let [t, n] = e,
                  i = await k(t, n, a.ignoredFilenames);
                null != i && r(t, i);
              }),
            ),
            a.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t(a));
        },
        [n, i, r],
      ),
      l = a.useCallback(() => {
        t((e) => ({
          ...e,
          collectionFiles: [],
          avatarDecorationFiles: [],
          profileEffectFilesMap: {},
          profileFrameDirsMap: {},
        }));
      }, []),
      o = a.useCallback(() => {
        t((e) => ({ ...e, ignoredFilenames: [] }));
      }, []);
    return {
      ignoredFilenames: e.ignoredFilenames,
      clearAssets: l,
      clearIgnoredFilenames: o,
      processAndUpsertAssets: s,
    };
  }
}
