/* Recovered shipped factory. Module 886737.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 252098..252754
 * Raw property SHA-256: bd801f45d14e9910e2934d47302805183e45ddbfdeef57cd3750dcc579665853
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r });
  let i = new Set(["link", "url", "autolink", "mailto", "tel", "attachmentLink", "devLink"]);
  function l(e) {
    return null == e
      ? ""
      : "string" == typeof e
        ? e
        : Array.isArray(e)
          ? e.map(l).join("")
          : "string" == typeof e.content
            ? e.content
            : l(e.content);
  }
  function s(e) {
    if (i.has(e.type)) {
      let t = l(e.target);
      return { type: "inlineCode", content: t.length > 0 ? t : l(e.content) };
    }
    if ("customEmoji" === e.type)
      return { type: "text", content: `:${String(e.name ?? "").replace(/^:+|:+$/g, "")}:` };
    let t = { ...e };
    return (
      null != e.content && "string" != typeof e.content && (t.content = r(e.content)),
      null != e.items && (t.items = e.items.map((e) => r(e))),
      t
    );
  }
  function r(e) {
    return Array.isArray(e) ? e.map(s) : s(e);
  }
}
