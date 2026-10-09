/* Recovered shipped factory. Module 294997.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10498627..10500768
 * Raw property SHA-256: a523373baf9147dc1e112475c0fb765612359f1690b4ea2a5b6a9cf5cee57053
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { T: () => l }), n(321073));
  var i = n(143236),
    r = n(941426),
    a = n(179689);
  let s = new r.Vy("Flux");
  class l extends i.EventEmitter {
    logs = [];
    persist;
    constructor({ persist: e = !1 } = {}) {
      (super(), (this.persist = e));
    }
    log(e, t) {
      let n = new d(e),
        i = (t, i) => {
          let r,
            s = { name: t, time: -1 },
            l = a.FO.now();
          try {
            r = i();
          } finally {
            ((s.time = a.FO.now() - l),
              this.persist && n.traces.push(s),
              this.emit("trace", e.type, t, s.time));
          }
          return r;
        };
      n.startTime = a.FO.now();
      try {
        t(i);
      } catch (e) {
        throw ((n.error = e), e);
      } finally {
        ((n.totalTime = a.FO.now() - n.startTime),
          this.persist && n.totalTime > 0 && this.logs.push(n),
          this.logs.length > 1e3 && this.logs.shift(),
          this.emit("log", e));
      }
      return n;
    }
    getSlowestActions(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        i = [];
      for (let t of this.logs)
        if (null == e || t.name === e) for (let e of t.traces) i.push([e.name, t.name, e.time]);
      (i.sort((e, t) => t[2] - e[2]), i.length > t && (i.length = t));
      let r = 0,
        a = 0,
        l = i
          .map((t) => {
            let [n, i, a] = t,
              s = `${n}`;
            return (null == e && (s += `<${i}>`), (r = Math.max(s.length, r)), [s, a]);
          })
          .map((e) => {
            let [t, n] = e;
            return ((a += n), `${t.padEnd(r + 1, " ")} - ${n}ms`);
          })
          .join("\n");
      return (
        0 === i.length ||
          i[0][2] < 10 ||
          a < 20 ||
          (s.log("Using Hermes:", void 0 !== n.g?.HermesInternal),
          s.log(`${
            null != e
              ? `

=== ${e} ===`
              : ""
          }
${l}
`),
          s.log(`Total Time: ${a}ms`)),
        i
      );
    }
    getLastActionMetrics(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        i = {};
      for (let e of this.logs) for (let t of e.traces) i[t.name] = [t.name, e.name, t.time];
      let r = Object.values(i);
      (r.sort((e, t) => t[2] - e[2]), r.length > t && (r.length = t));
      let a = 0,
        l = 0,
        o = r
          .map((e) => {
            let [t, n, i] = e;
            return ((a = Math.max(t.length, a)), [t, i]);
          })
          .map((e) => {
            let [t, n] = e;
            return ((l += n), `${t.padEnd(a + 1, " ")} - ${n}ms`);
          })
          .join("\n");
      return (
        0 === r.length ||
          l < 8 ||
          s.log(
            `
Using Hermes: ${void 0 !== n.g?.HermesInternal}`,
            `

=== ${e} ===
${o}`,
            `
Total Time: ${l}ms

`,
          ),
        r
      );
    }
  }
  let o = 0;
  class d {
    id;
    action;
    createdAt;
    startTime = 0;
    totalTime = 0;
    traces = [];
    error;
    constructor(e) {
      ((this.id = o++), (this.action = e), (this.createdAt = new Date()));
    }
    get name() {
      return this.action.type;
    }
    toJSON() {
      if (null == this.createdAt)
        throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
      return {
        actionType: this.action.type,
        created_at: this.createdAt,
        totalTime: this.totalTime,
        traces: this.traces,
      };
    }
  }
}
