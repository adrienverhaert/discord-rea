/* Recovered shipped factory. Module 945716.
 * Source: recovered/web/assets/8a6e9abc16c8ed6f.js
 * UTF-16 property offsets: 2912..3278
 * Raw property SHA-256: e7b26b7cd515655584f2402fb1959f322b77608267958e9a57d95efa1c1c42da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, {
    t: () =>
      function* e(n) {
        for (let t of n)
          switch ((yield t, t.type)) {
            case "paragraph":
            case "spoiler":
            case "strikethrough":
            case "underline":
            case "italic":
            case "bold":
            case "quote":
              yield* e(t.value);
              break;
            case "heading":
            case "small":
              yield* e(t.value.content);
              break;
            case "list":
              for (let n of t.value.items) yield* e(n.content);
              break;
            case "link":
              t.text && (yield* e(t.text));
          }
      },
  });
}
