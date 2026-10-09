/* Recovered shipped factory. Module 442759.
 * Source: recovered/web/assets/98763a762b76afec.js
 * UTF-16 property offsets: 199..1079
 * Raw property SHA-256: 84c704154ce92a3399f44506e2868039451b5eac9ede375bf3b26541455657dd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  (r.d(e, { f5: () => p }), r(321073));
  var s = r(582128),
    i = r(575593);
  r(660183);
  class a {
    itemsByTypes;
    constructor(t) {
      this.itemsByTypes = this.sortByTypes(t);
    }
    get firstAvatarDecoration() {
      return this.getFirstItemByType(i.R.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
      return this.getFirstItemByType(i.R.PROFILE_EFFECT);
    }
    get firstNameplate() {
      return this.getFirstItemByType(i.R.NAMEPLATE);
    }
    get firstProfileFrame() {
      return this.getFirstItemByType(i.R.PROFILE_FRAME);
    }
    getFirstItemByType(t) {
      let e = (this.itemsByTypes.get(t) ?? [])[0];
      if (null != e) return e;
    }
    sortByTypes(t) {
      return t.reduce((t, e) => {
        let r = t.get(e.type);
        return (null != r ? r.push(e) : t.set(e.type, [e]), t);
      }, new Map());
    }
  }
  function p(t) {
    return s.useMemo(() => {
      let e;
      return {
        firstProfileEffect: (e = new a(t.items)).firstProfileEffect,
        firstAvatarDecoration: e.firstAvatarDecoration,
        firstNameplate: e.firstNameplate,
        firstProfileFrame: e.firstProfileFrame,
      };
    }, [t]);
  }
}
