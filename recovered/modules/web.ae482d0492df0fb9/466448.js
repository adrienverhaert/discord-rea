/* Recovered shipped factory. Module 466448.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7443251..7444089
 * Raw property SHA-256: bb39488d6557cc6a6256a888182149bf39687c0b24469f94158963a0d3695305
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(826673),
    r = n(49999);
  let a = new (class {
    dismissibleBadges = null;
    badgeSidebarItemKey = null;
    currentSidebarItemKey = null;
    registerBadges(e, t) {
      ((this.dismissibleBadges = e),
        (this.badgeSidebarItemKey =
          null != t ? (e.dismissibleContentToNodeKeys.get(t)?.sidebarItemKey ?? null) : null));
    }
    notifyNavigated(e) {
      e !== this.currentSidebarItemKey &&
        (this.markAsDismissed(), (this.currentSidebarItemKey = e));
    }
    reset() {
      (this.markAsDismissed(),
        (this.dismissibleBadges = null),
        (this.badgeSidebarItemKey = null),
        (this.currentSidebarItemKey = null));
    }
    markAsDismissed() {
      if (
        null == this.currentSidebarItemKey ||
        this.badgeSidebarItemKey !== this.currentSidebarItemKey
      )
        return;
      let e = this.dismissibleBadges?.nodeKeyToDismissibleContents.get(this.currentSidebarItemKey);
      ((this.badgeSidebarItemKey = null),
        e?.forEach((e) => {
          (0, i.Dr)(e, { dismissAction: r.i.AUTO, forceTrack: !0 });
        }));
    }
  })();
}
