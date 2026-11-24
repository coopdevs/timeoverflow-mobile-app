module.exports = {
  name: "TimeOverflow",
  description: "A time banking system.",
  slug: "time-overflow",
  platforms: [
    "ios",
    "android"
  ],
  version: "1.2.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  privacy: "public",
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/e867ef10-6745-11e8-ac81-d5d46762b275"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "org.timeoverflow.mobileapp",
    buildNumber: "1.2.1",
    // Only standard HTTPS: skips the export compliance question on every upload
    config: {
      usesNonExemptEncryption: false
    }
  },
  android: {
    googleServicesFile: "./google-services.json",
    // Android 8+ masks launcher icons (circle, squircle...): keep the logo
    // inside the safe zone on a background of the same color
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#2A2D4C"
    },
    package: "org.timeoverflow.mobileapp",
    versionCode: 27,
    // Permissions added by default by Expo that this webview app doesn't need.
    // Declaring them makes Google Play flag/restrict the app on some devices.
    blockedPermissions: [
      "android.permission.SYSTEM_ALERT_WINDOW",
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.WRITE_EXTERNAL_STORAGE"
    ],
  },
  extra: {
    eas: {
      projectId: "e867ef10-6745-11e8-ac81-d5d46762b275"
    },
    baseUrl: process.env.BASE_URL
  },
  plugins: [
    "./plugins/withOptionalHardwareFeatures",
    [
      "expo-notifications",
      {
        // Android only uses the alpha channel: white silhouette on transparent
        icon: "./assets/notification-icon.png",
        color: "#2A2D4C"
      }
    ],
    [
      "expo-splash-screen",
      {
        image: "./assets/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        // Android 12+ crops the splash icon to a circle: use a version with
        // the logo shrunk inside a round-safe area
        android: {
          image: "./assets/splash-icon-android.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      }
    ]
  ],
  runtimeVersion: {
    policy: "sdkVersion"
  }
}
