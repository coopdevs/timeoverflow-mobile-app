module.exports = {
  name: "TimeOverflow",
  description: "A time banking system.",
  slug: "time-overflow",
  platforms: [
    "ios",
    "android"
  ],
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/timeoverflow.png",
  userInterfaceStyle: "light",
  privacy: "public",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  notification: {
    icon: "./assets/notifications.png"
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/e867ef10-6745-11e8-ac81-d5d46762b275"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "org.timeoverflow.mobileapp"
  },
  android: {
    googleServicesFile: "./google-services.json",
    package: "org.timeoverflow.mobileapp",
    versionCode: 23,
  },
  extra: {
    eas: {
      projectId: "e867ef10-6745-11e8-ac81-d5d46762b275"
    },
    baseUrl: process.env.BASE_URL
  },
  runtimeVersion: {
    policy: "sdkVersion"
  },
  newArchEnabled: true
}
