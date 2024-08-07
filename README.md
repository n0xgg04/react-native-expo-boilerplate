# React Native with Expo Boilerplate
Author: [n0xgg04](https://github.com/n0xgg04)

### Using

- React Compiler 
- React Native New Architecture
- EAS
- React 18.3.1

- NativeWind (Support tailwind css for React Native)
- Prisma + SQLite: Local storage 
- Recoil: Simple global state manager
- Tanstack query: State manager for API request
- Expo Router : App routes
- Sentry : Error capture, debugging


### Installation
#### Install packages:
- Use npm
```bash
npm install 
```

- Use yarn
```bash
yarn install 
```
#### Scripts:
- Run expo app:
```bash
yarn start
```
- Run iOS in dev mode:
```bash
yarn run dev:ios 
```
- Run Android in dev mode:
```bash
yarn run dev:android 
```
- Migrate local database:
```bash
yarn run prisma:migrate 
```
- Generate Prisma client:
```bash
yarn run prisma:generate 
```
- Prebuild native app:
```bash
npx expo prebuild --clean
```


### Folder structure:
```
|- android : Android native folder
|- ios : iOS native folder
|- node_modules : node packages
|- assets : App asset 
         |- fonts: Font family
         |- images: Static images like .png, .jpg
         |- lotties : JSON lottie for animation 
|- prisma : Prisma folder
         |- migrations : Prisma migration files
         |- app.db : Sqlite database file
         |- schema.prisma : Database schema, fine your local database here...
|- shared : Shared function, features, ...
         |- constants : Constants
                     |- font-scale: Constants font scale for responsive
                     |- spacing : Same as font scale, but use for space properties
                     |- themes : Define app colors schema
         |- components : Global components (use for all screen in app)
                     |- base : Base component like Typography, Container, Stack,...
                     |- ui : Global component like NavBar, LoginCard...etc 
|- features: 
         |- prisma.ts : Prisma client
         |- sentry.ts : Sentry 
|- hooks: Shared hooks
         |- useLoadFonyFamily : Define your font family here
|- provider : App provider
         |- TanStackQueryProvider : Tanstack context
         |- ThemeProvider : Theme context
|- utils 
         |- scale: Functions related to support responsive
|- states
         |- recoil : Define global state here
|- types : TypeScript type declare or override types here
|- .env : Environment variables
|- .gitignore: Git ignore
|- babel.config.js : Babel config
|- .eslintrc.js : Config esline
|- metro.config.js : Metro config
|- tailwind.config.js : TailwindCSS config
|- .prettierrc.json : Config prettier
|- app.json : Expo app config
|- package.json : NodeJS app package config
|- tsconfig.json: Typescript config

```
