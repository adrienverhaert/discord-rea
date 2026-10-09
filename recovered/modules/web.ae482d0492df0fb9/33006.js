/* Recovered shipped factory. Module 33006.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7296215..7301262
 * Raw property SHA-256: fbad128fa853474c7e17745de04aa7c025ce1ecfc631c079099503779590d0f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r;
  (n.d(t, { default: () => P }), n(323874), n(14289), n(35956), n(321073));
  var a = n(143236),
    s = n(435558),
    l = n.n(s),
    o = n(73153),
    d = n(626584),
    c = n(111162),
    u = n(998218),
    _ = n(19575),
    E = n(636401),
    A = n(861621),
    h = n(313731),
    f = n(324029),
    I = n(72611),
    p = n(546983),
    T = n(613057),
    m = n(652215),
    g = n(264572).Buffer;
  try {
    i = _.Ay.requireModule("discord_erlpack");
  } catch (e) {
    try {
      i = _.Ay.requireModule("erlpack");
    } catch (e) {}
  }
  let S = _.Ay.requireModule("discord_rpc").RPCWebSocket,
    N = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    C = new d.A("RPCServer:WSS"),
    O = [];
  function R(e) {
    return "function" == typeof e ? e() : e;
  }
  function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t =
        e > 0
          ? void 0
          : () => {
              if (!R(r.listening)) return;
              let e = r.address().port;
              (C.info(`Starting on ${e}`), o.h.dispatch({ type: "RPC_SERVER_READY", port: e }));
            };
    r.listen(m.xEi + (e % m.sJq), "127.0.0.1", t);
  }
  function y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
      r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      a =
        null != R(e.headers).origin
          ? {
              "Access-Control-Allow-Origin": R(e.headers).origin,
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
            }
          : {};
    ((n = n ? JSON.stringify(n) : ""),
      (i = 200 === i && 0 === n.length ? 204 : i),
      t.setHeader("Content-Length", g.byteLength(n).toString()),
      t.setHeader("Content-Type", "application/json"),
      t.writeHead(i, { ...r, ...a }),
      t.end(n));
  }
  function D(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    y(e, t, { code: r, message: i }, n);
  }
  class v extends h.A {
    _socket;
    constructor(e, t, n) {
      if ((super({ type: T.z4.WEBSOCKET }, t, n), -1 === ["etf", "json"].indexOf(n)))
        throw new E.A({ closeCode: m.YI$.INVALID_ENCODING }, `Invalid Encoding: ${n}`);
      if ("etf" === n && null == i)
        throw new E.A(
          { closeCode: m.YI$.INVALID_ENCODING },
          "Erlpack cannot be used on this client",
        );
      this._socket = e;
    }
    send(e) {
      ((c.default.isLoggingOverlayEvents || (e.cmd !== m.e$_.OVERLAY && e.evt !== m.ZE4.OVERLAY)) &&
        C.info(`Socket Emit: ${this.id}`, (0, A.A)(e)),
        null != i && "etf" === this.encoding
          ? this._socket.send(i.pack(e), { binary: !0 })
          : this._socket.send(JSON.stringify(e)));
    }
    close(e, t) {
      this._socket.close(e, t);
    }
  }
  class b extends h.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
      if ((super({ type: T.z4.HTTP }, n, i), "json" !== i))
        throw new E.A({ closeCode: m.YI$.INVALID_ENCODING }, `Invalid Encoding: ${i}`);
      ((this._sendCallback = e), (this._closeCallback = t));
    }
    send(e) {
      ((c.default.isLoggingOverlayEvents || e.cmd !== m.e$_.OVERLAY) &&
        C.info(`Socket Emit: ${this.id}`, e),
        this._sendCallback(e));
    }
    close(e, t) {
      this._closeCallback(t, e);
    }
  }
  class M extends a.EventEmitter {
    constructor() {
      super();
      let e = 0;
      ((r = S.http.createServer()).on("error", (t) => {
        (C.error(`Error: ${t.message}`),
          ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) &&
            setTimeout(() => L(++e), 1e3));
      }),
        r.on("request", this.handleRequest.bind(this)),
        L(e));
      const t = { instanceId: r.instanceId ?? 0, server: r };
      new S.ws.Server(t).on("connection", (e) => this.handleConnection(e));
    }
    getPort() {
      return R(r.listening) ? r.address().port : null;
    }
    handleRequest(e, t) {
      let [n, i] = R(e.url).split("?"),
        r = R(e.method);
      if ("POST" === r && (0, f.xp)(n)) return void (0, f.JX)(e, t);
      if ("POST" === r && (0, I.J9)(n)) return void (0, I.Xw)(e, t);
      if ("/rpc" === n && "OPTIONS" === r) return void y(e, t, { body: "" });
      let a = "POST" === r;
      if ("/rpc" === n && ("GET" === r || a)) {
        let n = new URLSearchParams(i),
          r = a ? R(e.headers)["content-type"].split("/")[1] : "json",
          s = function () {
            let { protocol: e, host: i } = u.A.toURLSafe(n.get("callback") ?? "") ?? {};
            (e === location.protocol && i === location.host
              ? t.setHeader("Location", n.get("callback"))
              : t.setHeader("Location", N),
              t.writeHead(301),
              t.end());
          },
          l = new b(
            !a ? s : y.bind(null, e, t),
            !a ? s : D.bind(null, e, t, 400),
            Number(n.get("v")),
            r,
          );
        a
          ? (0, p.j7)(l, R(e.headers).origin, n.get("client_id"))
              .then(() => {
                let n = "";
                (e.on("data", (e) => (n += e)),
                  e.on("error", () => D(e, t, 500, "Internal Server Error")),
                  e.on("end", () => this.handleMessage(l, n)));
              })
              .catch((e) => {
                let { code: t, message: n } = e;
                return l.close(t, n);
              })
          : ((l.authorization.scopes = new Set([T.kw])),
            this.handleMessage(l, decodeURIComponent(n.get("payload") ?? "")));
        return;
      }
      D(e, t, 404, "Not Found");
    }
    handleConnection(e) {
      let t,
        n = new URLSearchParams(R(e.upgradeReq).url.split("?")[1]),
        i = R(e.upgradeReq).headers.origin ?? "";
      try {
        t = new v(e, Number(n.get("v")), n.get("encoding") ?? "json");
      } catch (t) {
        e.close(t.code, t.message);
        return;
      }
      (C.info(`Socket Opened: ${t.id}`),
        e.on("error", (e) => C.error(`WS Error: ${e.message}`)),
        e.on("close", (e, n) => {
          (C.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`),
            t.abortController.abort("DISCONNECTED"),
            l().remove(O, (e) => e === t),
            this.emit("disconnect", t));
        }),
        (0, p.j7)(t, i, n.get("client_id"))
          .then(() => {
            t.abortController.signal.aborted ||
              (O.push(t),
              e.on("message", (e) => this.handleMessage(t, e)),
              this.emit("connect", t));
          })
          .catch((e) => {
            let { code: n, message: i } = e;
            t.abortController.signal.aborted || t.close(n, i);
          }));
    }
    handleMessage(e, t) {
      let n;
      try {
        if (null != i && "etf" === e.encoding) n = i.unpack(t);
        else if ("string" == typeof t) n = JSON.parse(t);
        else throw Error();
      } catch (t) {
        e.close(m.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
        return;
      }
      ((c.default.isLoggingOverlayEvents || n.cmd !== m.e$_.OVERLAY) &&
        C.info(`Socket Message: ${e.id}`, (0, A.A)(n)),
        this.emit("request", e, n));
    }
  }
  let P = new M();
}
