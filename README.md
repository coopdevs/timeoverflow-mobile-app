TimeOverflow Mobile App
=======================

This is an [Expo.io](https://expo.io) project.

## Setup

1. Clone this repo and jump into the project folder:

```
$ git clone git@github.com:coopdevs/timeoverflow-mobile-app.git
$ cd timeoverflow-mobile-app
```

2. Install Expo's CLI node package:

```
$ npm install exp --global
```

## Development

To run the app on your machine follow these steps:

1. Run Expo!

```
$ exp start
```

2. The previous command will output a QR code which will be used later to access the app from your phone.

3. Install Expo's client on your phone: https://expo.io/tools#client

4. Open the Expo app and scan the QR code. Now you are running the Time Overflow app on your phone! Make any change on the project and the Expo mobile client will automatically reload the changes. Enjoy!

## Building a standalone app

Run `exp build:android` or `exp build:ios`.

## Release channels

When publishing the app to Expo or building a standalone app, you can choose the `release channel`. The default release channel will point the app to production (https://www.timeoverflow.org/) while the `staging` channel will point to staging (https://staging.timeoverflow.org/).

To define the channel, use the `--release-channel` param while publishing or creating the standalone app:

```
exp publish --release-channel staging
exp build:android --release-channel staging
```

In this case, the `staging` version of the app will be located at https://expo.io/@coopdevs/time-overflow?release-channel=staging while the default channel of the app (production) could be found at https://expo.io/@coopdevs/time-overflow.

More info: https://docs.expo.io/versions/latest/distribution/release-channels.
