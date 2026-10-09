/* Recovered shipped factory. Module 579832.
 * Source: recovered/web/assets/dd030982fe15a67a.js
 * UTF-16 property offsets: 82..964
 * Raw property SHA-256: a123b82a53c895081c18b08234b9fc85d2b14b13d0243391d952a7f0001fff6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, e, t) {
  var p = {
    "./bg.png": "365627",
    "./cs.png": "408100",
    "./da.png": "903723",
    "./de.png": "128303",
    "./el.png": "474161",
    "./en-GB.png": "232009",
    "./en-US.png": "552446",
    "./es-419.png": "722791",
    "./es-ES.png": "329457",
    "./fi.png": "56201",
    "./fr.png": "725578",
    "./hi.png": "221927",
    "./hr.png": "274324",
    "./hu.png": "224235",
    "./it.png": "301445",
    "./ja.png": "753861",
    "./ko.png": "928",
    "./lt.png": "744686",
    "./nl.png": "921740",
    "./no.png": "841799",
    "./pl.png": "370178",
    "./pt-BR.png": "921465",
    "./ro.png": "342995",
    "./ru.png": "941705",
    "./sv-SE.png": "361160",
    "./th.png": "710842",
    "./tr.png": "115568",
    "./uk.png": "468174",
    "./vi.png": "3001",
    "./zh-CN.png": "504292",
    "./zh-TW.png": "23880",
  };
  function r(s) {
    return t(a(s));
  }
  function a(s) {
    if (!t.o(p, s)) {
      var e = Error("Cannot find module '" + s + "'");
      throw ((e.code = "MODULE_NOT_FOUND"), e);
    }
    return p[s];
  }
  ((r.keys = function () {
    return Object.keys(p);
  }),
    (r.resolve = a),
    (s.exports = r),
    (r.id = 579832));
}
