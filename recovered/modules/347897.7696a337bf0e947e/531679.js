/* Recovered shipped factory. Module 531679.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 846212..847094
 * Raw property SHA-256: 25eb71fb1414bf600f34e98d3caf1898632cc4ecaa8ae14dde57be74ce00a3dc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  let n = r(17101);
  function i() {}
  ((e.exports = i),
    (i.prototype.get = function (e) {
      return this.header[e.toLowerCase()];
    }),
    (i.prototype._setHeaderProperties = function (e) {
      let t = e["content-type"] || "";
      this.type = n.type(t);
      let r = n.params(t);
      for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (this[e] = r[e]);
      this.links = {};
      try {
        e.link && (this.links = n.parseLinks(e.link));
      } catch (e) {}
    }),
    (i.prototype._setStatusProperties = function (e) {
      let t = Math.trunc(e / 100);
      ((this.statusCode = e),
        (this.status = this.statusCode),
        (this.statusType = t),
        (this.info = 1 === t),
        (this.ok = 2 === t),
        (this.redirect = 3 === t),
        (this.clientError = 4 === t),
        (this.serverError = 5 === t),
        (this.error = (4 === t || 5 === t) && this.toError()),
        (this.created = 201 === e),
        (this.accepted = 202 === e),
        (this.noContent = 204 === e),
        (this.badRequest = 400 === e),
        (this.unauthorized = 401 === e),
        (this.notAcceptable = 406 === e),
        (this.forbidden = 403 === e),
        (this.notFound = 404 === e),
        (this.unprocessableEntity = 422 === e));
    }));
}
