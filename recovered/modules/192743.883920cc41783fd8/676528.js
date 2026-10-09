/* Recovered shipped factory. Module 676528.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 634824..635195
 * Raw property SHA-256: 3fba25ad3869aa93bdeaf4015c32f68469eaf0dd3171f3b7cc359b3fdde0f948
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(860511),
    o = n(65978),
    a = n(647055),
    i = function (e) {
      return o.slice(0, e.length) === e;
    };
  e.exports = i("Bun/")
    ? "BUN"
    : i("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : i("Deno/")
        ? "DENO"
        : i("Node.js/")
          ? "NODE"
          : r.Bun && "string" == typeof Bun.version
            ? "BUN"
            : r.Deno && "object" == typeof Deno.version
              ? "DENO"
              : "process" === a(r.process)
                ? "NODE"
                : r.window && r.document
                  ? "BROWSER"
                  : "REST";
}
