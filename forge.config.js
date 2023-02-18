module.exports = {
  packagerConfig: {
    name: "EddieGPT",
    executableName: "EddieGPT",
    icon: "images/icon",
    extendInfo: {
      LSUIElement: "true",
    },
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
