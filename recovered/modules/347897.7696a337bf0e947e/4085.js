/* Recovered shipped factory. Module 4085.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1148492..1150155
 * Raw property SHA-256: 058412010d3573706fc36d9c194960589021973eadcb55fb277c60f090383d5c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { iP: () => i, pA: () => o });
  let n = null;
  function i(e, t = "assertive", r = 7e3) {
    n
      ? n.announce(e, t, r)
      : ((n = new a()),
        (
          "boolean" == typeof IS_REACT_ACT_ENVIRONMENT
            ? IS_REACT_ACT_ENVIRONMENT
            : "u" > typeof jest
        )
          ? n.announce(e, t, r)
          : setTimeout(() => {
              n?.isAttached() && n?.announce(e, t, r);
            }, 100));
  }
  function o(e) {
    n && n.clear(e);
  }
  class a {
    constructor() {
      ((this.node = null),
        (this.assertiveLog = null),
        (this.politeLog = null),
        "u" > typeof document &&
          ((this.node = document.createElement("div")),
          (this.node.dataset.liveAnnouncer = "true"),
          Object.assign(this.node.style, {
            border: 0,
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap",
          }),
          (this.assertiveLog = this.createLog("assertive")),
          this.node.appendChild(this.assertiveLog),
          (this.politeLog = this.createLog("polite")),
          this.node.appendChild(this.politeLog),
          document.body.prepend(this.node)));
    }
    isAttached() {
      return this.node?.isConnected;
    }
    createLog(e) {
      let t = document.createElement("div");
      return (
        t.setAttribute("role", "log"),
        t.setAttribute("aria-live", e),
        t.setAttribute("aria-relevant", "additions"),
        t
      );
    }
    destroy() {
      this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = "assertive", r = 7e3) {
      if (!this.node) return;
      let n = document.createElement("div");
      ("object" == typeof e
        ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"]))
        : (n.textContent = e),
        "assertive" === t ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n),
        "" !== e &&
          setTimeout(() => {
            n.remove();
          }, r));
    }
    clear(e) {
      this.node &&
        ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""),
        (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
  }
}
