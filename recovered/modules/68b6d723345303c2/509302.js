/* Recovered shipped factory. Module 509302.
 * Source: recovered/web/assets/68b6d723345303c2.js
 * UTF-16 property offsets: 95..462
 * Raw property SHA-256: d12d167067e9fc55369d3576d43318e5537f9e2eb01ece0837168f313e802407
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var l = n(582128),
    i = n(922590),
    a = n(725663),
    r = n(433880),
    o = n(660183);
  function s(e) {
    let { user: t } = e,
      n = (0, i.fi)(t.id),
      s = l.useCallback(
        (e) => {
          a.A.acceptFriendRequest({ userId: t.id, applicationId: e.id, location: "Context Menu" });
        },
        [t.id],
      );
    return (0, r.A)({
      user: t,
      gameRelationships: n,
      menuItemId: "add-game-friend",
      label: o.intl.string(o.t.X76oLM),
      onClick: s,
    });
  }
}
