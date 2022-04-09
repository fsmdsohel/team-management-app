module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
        },
      ],
      [
        "module-resolver",
        {
          root: "./src",
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            actions: "./src/redux/actions",
            assets: "./src/assets",
            utils: "./src/utils",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
