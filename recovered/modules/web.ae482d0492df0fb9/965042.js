/* Recovered shipped factory. Module 965042.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6630904..6631900
 * Raw property SHA-256: 5b04c18510aff9e9e40a6273296d1a4ec43bb696b38e69e20977191a450323b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => c }));
  var i = n(398590),
    r = n(790271),
    a = n(186111),
    s = n(944771),
    l = n(101715),
    o = n(652215);
  async function d(e, t, n) {
    if (!(0, r.mz)("playground_open")) return !1;
    let d = await (0, s.getComponentPlaygroundConfigs)(),
      c =
        null != e
          ? (function (e, t) {
              for (let n of t) {
                let t = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                if (null != t) return t.id;
              }
              return null;
            })(e, d)
          : null,
      u =
        null != c && null != t
          ? (function (e, t, n) {
              for (let i of n) {
                let n = i.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                if (null != n)
                  for (let e of n.groups) {
                    let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                    if (null != n) return n.id;
                  }
              }
              return null;
            })(c, t, d)
          : null;
    return (
      l.x.setState({
        selectedCollection: c,
        selectedStory: u,
        controlOverrides: null != u && null != n ? n : null,
        currentProps: null,
      }),
      a.A.getLayers().includes(o.zgK.COMPONENT_PLAYGROUND) || (0, i.id)(o.zgK.COMPONENT_PLAYGROUND),
      !0
    );
  }
  function c(e) {
    let { match: t } = e;
    return d(t.collection, t.story, t.controlOverrides);
  }
}
