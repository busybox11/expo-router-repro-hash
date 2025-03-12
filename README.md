# Minimal reproduction repository of expo-router hash bug

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## The bug

When navigating to another screen, coming from a route containing a hashed (`#`) parameter in the URL, the app crashes with the following error:

```
property "#" is non-configurable and can't be deleted
```

Use the buttons to navigate between the two screens with or without a hash URL parameter.
