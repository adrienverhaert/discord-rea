/* Recovered shipped factory. Module 996512.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5303742..5304651
 * Raw property SHA-256: 8f8767325e166f6c01221473bd7165cc015906f48e1b7aab8c54c28ff80b024d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S: () => u, r: () => o });
  var i = n(821578),
    r = n(750459),
    a = n(558076),
    s = n(872772),
    l = n(739820);
  function o(e, t, n) {
    let s = a.A.getRoom(n)?.background ?? i.I.DEFAULT,
      { seats: o } = l.iX[s];
    return null != e && e !== r.x.UNSET
      ? o[e]
      : Object.values(o).find((e) => e.position.x === t.x && e.position.y === t.y);
  }
  function d(e) {
    return {
      objectId: e.object_id,
      createdBy: e.created_by,
      updatedAt: null != e.updated_at ? new Date(e.updated_at) : void 0,
      updatedBy: e.updated_by,
    };
  }
  function c(e) {
    return e.object_type === s.N.PLANT
      ? { objectType: s.N.PLANT, ...d(e) }
      : { objectType: s.N.NOTE, ...d(e), content: e.content, position: e.position };
  }
  function u(e) {
    return {
      roomId: e.room_id,
      users: e.users.reduce(
        (e, t) => (
          e.set(t.user_id, {
            userId: t.user_id,
            seat: t.seat,
            position: t.position,
            statusId: t.status_id,
            statusText: t.status_text,
          }),
          e
        ),
        new Map(),
      ),
      background: e.background,
      objects: Object.entries(e.objects).reduce((e, t) => {
        let [n, i] = t;
        return (e.set(+n, i.map(c)), e);
      }, new Map()),
    };
  }
}
