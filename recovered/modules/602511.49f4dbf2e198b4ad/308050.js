/* Recovered shipped factory. Module 308050.
 * Source: recovered/web/assets/602511.49f4dbf2e198b4ad.js
 * UTF-16 property offsets: 95..296
 * Raw property SHA-256: 8814eac0c2a1ac76b021780d634917b32555507b5907fd71996e6208dc070db0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (u, p, E) {
  E.d(p, { A: () => s });
  let d = String.raw,
    i = d`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`,
    s = () => RegExp(d`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${i}(?:\u200D${i})*`, "gu");
}
