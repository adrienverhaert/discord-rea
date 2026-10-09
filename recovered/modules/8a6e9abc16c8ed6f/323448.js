/* Recovered shipped factory. Module 323448.
 * Source: recovered/web/assets/8a6e9abc16c8ed6f.js
 * UTF-16 property offsets: 1572..2911
 * Raw property SHA-256: 82bf97a9e854c5788c6f00c0fcb5a0f6c965af56c20be92b718b996b49cbae20
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { $: () => s });
  var r = t(477900);
  function i(e, n) {
    if (null == e) throw Error(`Attempted to render "${n}" but no renderer was provided`);
  }
  function o({ node: e, renderers: n, ...t }) {
    let a = n[e.type];
    if ((i(a, e.type), Array.isArray(e.value)))
      return (0, r.jsx)(a, {
        node: e,
        ...t,
        children: (0, r.jsx)(s, { nodes: e.value, renderers: n }),
      });
    switch (e.type) {
      case "mention":
      case "timestamp":
      case "emoji":
      case "code_block":
        return (0, r.jsx)(a, { node: e, ...e.value, ...t });
      case "link": {
        let { text: i, url: o } = e.value;
        return (0, r.jsx)(a, {
          node: e,
          ...e.value,
          ...t,
          children: i ? (0, r.jsx)(s, { nodes: i, renderers: n }) : o,
        });
      }
      case "text":
      case "code":
        return (0, r.jsx)(a, { node: e, ...t, children: e.value });
      case "heading":
        return (0, r.jsx)(a, {
          node: e,
          level: e.value.level,
          ...t,
          children: (0, r.jsx)(s, { nodes: e.value.content, renderers: n }),
        });
      case "list": {
        let o = n.listItem;
        return (
          i(o, "listItem"),
          (0, r.jsx)(a, {
            node: e,
            ...e.value,
            ...t,
            children: e.value.items.map((t, i) =>
              (0, r.jsx)(
                o,
                {
                  node: t,
                  siblings: e.value.items,
                  index: i,
                  children: (0, r.jsx)(s, { nodes: t.content, renderers: n }),
                },
                i,
              ),
            ),
          })
        );
      }
      case "empty":
        return (0, r.jsx)(a, { ...t });
      case "small":
        return (0, r.jsx)(a, {
          node: e,
          ...t,
          children: (0, r.jsx)(s, { nodes: e.value.content, renderers: n }),
        });
      default:
        throw TypeError(`Unknown node type "${e.type}"`);
    }
  }
  function s({ nodes: e, renderers: n }) {
    return (0, r.jsx)(r.Fragment, {
      children: e.map((t, i) => (0, r.jsx)(o, { node: t, renderers: n, siblings: e, index: i }, i)),
    });
  }
}
