/* Recovered shipped factory. Module 460597.
 * Source: recovered/web/assets/68b6d723345303c2.js
 * UTF-16 property offsets: 1836..2449
 * Raw property SHA-256: 278e292a3c1dfb87275e5259c78b6772fa5b3b37652f34502ea652df0b66989f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => c });
  var l = n(582128),
    i = n(314116),
    a = n(922590),
    r = n(725663),
    o = n(427262),
    s = n(433880),
    u = n(660183);
  function c(e) {
    let { user: t } = e,
      n = (0, a.f1)(t.id),
      c = o.Ay.useName(t),
      d = l.useCallback(
        (e) => {
          let { id: n, name: l } = e;
          (0, i.A)({
            title: u.intl.formatToPlainString(u.t["GOFk9+"], { name: c }),
            subtitle: u.intl.format(u.t.dsU5bl, { name: c, gameName: l }),
            confirmText: u.intl.string(u.t["cY+Oob"]),
            onConfirm: () =>
              r.A.removeFriend({ userId: t.id, applicationId: n, location: "Context Menu" }),
          });
        },
        [c, t],
      );
    return (0, s.A)({
      user: t,
      gameRelationships: n,
      menuItemId: "remove-game-friend",
      label: u.intl.string(u.t.RLcE6x),
      onClick: d,
      color: "danger",
    });
  }
}
