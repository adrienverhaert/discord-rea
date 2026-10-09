/* Recovered shipped factory. Module 707985.
 * Source: recovered/web/assets/c170ce2099e03de9.js
 * UTF-16 property offsets: 5037..5453
 * Raw property SHA-256: ec8625394f277453aef6c50b6bdeaf2ca27b6d37d55dd6f05ba716eace495d23
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => i });
  function i(e) {
    let {
        channel: t,
        canChat: n,
        renderReactions: i,
        canAddNewReactions: l,
        isLurking: o,
        communicationDisabled: a,
        isActiveChannelOrUnarchivableThread: r,
        isAutomodQuarantined: s,
      } = e,
      c = t.isPrivate(),
      u = t.isSystemDM(),
      d = t.isMediaThread(),
      m = (!0 === l || c) && !u && r && !d,
      f = (n || c) && r && !d;
    return {
      disableReactionReads: !i,
      disableReactionCreates: o || !f || !m,
      disableReactionUpdates: u || o || !f || !0 === a || !0 === s,
    };
  }
}
