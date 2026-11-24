const { withAndroidManifest } = require("expo/config-plugins");

// orientation: "portrait" makes Android imply a *required*
// android.hardware.screen.portrait feature, and Google Play then hides the app
// on devices that don't report it (tablets, foldables, Chromebooks, XR...).
// Declare it (and landscape, for completeness) as optional.
const OPTIONAL_FEATURES = [
  "android.hardware.screen.portrait",
  "android.hardware.screen.landscape",
];

module.exports = function withOptionalHardwareFeatures(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults.manifest;
    manifest["uses-feature"] = manifest["uses-feature"] || [];

    for (const name of OPTIONAL_FEATURES) {
      const existing = manifest["uses-feature"].find(
        (feature) => feature.$["android:name"] === name
      );
      if (existing) {
        existing.$["android:required"] = "false";
      } else {
        manifest["uses-feature"].push({
          $: { "android:name": name, "android:required": "false" },
        });
      }
    }

    return config;
  });
};
