TimeOverflow Mobile App
=======================

This is an [Expo.io](https://expo.io) project.

## Setup

1. Clone this repo and jump into the project folder:

```
$ git clone git@github.com:coopdevs/timeoverflow-mobile-app.git
$ cd timeoverflow-mobile-app
```

2. Install dependencies

```
$ npm install
```

More details: https://docs.expo.dev/get-started/installation/.

## Development

To run the app on your machine follow these steps:

1. Log in to Coopdevs' Expo account:

```
$ npx expo login
```

2. Run Expo!

```
$ npx expo start
```

3. The previous command will output a QR code which will be used later to access the app from your phone.

4. Install Expo's client on your phone: https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and

5. Open the Expo app and scan the QR code. Now you are running the Time Overflow app on your phone! Make any change on the project and the Expo mobile client will automatically reload the changes. Enjoy!

## Building a standalone app

We use [EAS Build](https://docs.expo.dev/build/introduction/), Expo's hosted service for building app binaries. It greatly simplifies the process by building and signing the app with our credentials on their own worker servers ala. CI/CD. Check their docs for more details.

First, install the eas-cli:

```
$ npm install -g eas-cli
```

### Build profiles

When publishing the app to Expo or building a standalone app, you can choose the `profile`. A build profile is a named group of configuration settings required to perform a specific type of build.

If not provided, EAS cli will default to `production`, which points the app to production (https://www.timeoverflow.org/) while the `staging` channel will point to staging (https://staging.timeoverflow.org/).

To define it, use the `--profile` param when building the app:

```
eas build --profile staging --platform android
```

or

```
eas build --profile production --platform android
```

You can read more about configuring builds at [Configuring EAS Build with eas.json](https://docs.expo.dev/build/eas-json/).

You can conveniently list and access all the builds from https://expo.dev/accounts/coopdevs/projects/time-overflow/builds.
