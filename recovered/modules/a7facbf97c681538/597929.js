/* Recovered shipped factory. Module 597929.
 * Source: recovered/web/assets/a7facbf97c681538.js
 * UTF-16 property offsets: 510..766
 * Raw property SHA-256: dae218f40cc2b0620205ddb71dc42728876095aeeb6df2e9d5265dac9df3d09f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { V: () => a, _: () => s });
  var i = n(127258),
    l = n(155718);
  function s(e) {
    return null != e.interactionMetadata;
  }
  function a(e) {
    return (
      e.interactionMetadata?.type === i.G.APPLICATION_COMMAND &&
      e.interactionMetadata?.command_type === l.kc.PRIMARY_ENTRY_POINT
    );
  }
}
