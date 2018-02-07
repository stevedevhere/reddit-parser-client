function loadDefaultCss() {
  const themeConfig = window.themeConfig;

  const cssString = `
    :root {
      --color-accent: ${themeConfig.color.accent};
      --color-accent-hover: ${themeConfig.color.accentHover};
      --color-accent-clicked: ${themeConfig.color.accentClicked};
      --color-heading: ${themeConfig.color.heading};
      --color-text: ${themeConfig.color.text};
      --color-text-secondary: ${themeConfig.color.textSecondary};
      --color-background-secondary: ${themeConfig.color.backgroundSecondary};
      --color-separator: ${themeConfig.color.separator};
      --color-green-normal: ${themeConfig.color.green};
      --color-green: ${themeConfig.color.green};
      --color-green-hover: ${themeConfig.color.greenHover};
      --color-red-normal: ${themeConfig.color.red};
      --color-red-hover: ${themeConfig.color.redHover};
      --color-yellow-normal: ${themeConfig.color.yellow};
      --color-yellow-hover: ${themeConfig.color.yellowHover};
      --color-black1: ${themeConfig.color.black1};
      --color-black2: ${themeConfig.color.black2};
      --color-black3: ${themeConfig.color.black3};
      --color-grey1: ${themeConfig.color.grey1};
      --color-grey2: ${themeConfig.color.grey2};
      --color-grey3: ${themeConfig.color.grey3};
      --color-grey4: ${themeConfig.color.grey4};
      --color-indexBg: ${themeConfig.staticColor.learnerIndexBg};
      --color-indexLine: ${themeConfig.staticColor.learnerIndexLine};
    }
    body {
      font-family: ${themeConfig.font.contentFont} !important;
      color: ${themeConfig.color.black1};
    }
    .theme--color-heading {
      color: ${themeConfig.color.heading} !important;
    }
    .theme--color-primary {
      color: ${themeConfig.color.text} !important;
    }
    .theme--color-secondary {
      color: ${themeConfig.color.textSecondary} !important;
    }
    .theme--color-accent {
      color: ${themeConfig.color.accent} !important;
    }
    .theme--color-green {
      color: ${themeConfig.color.green} !important;
    }
    .theme--color-red {
      color: ${themeConfig.color.red} !important;
    }
    .theme--color-yellow {
      color: ${themeConfig.color.yellow} !important;
    }
    .theme--color-accent {
      color: ${themeConfig.color.accent} !important;
    }
    .theme--background-color-green {
      background-color: ${themeConfig.color.green} !important;
    }
    .theme--background-color-red {
      background-color: ${themeConfig.color.red} !important;
    }
    .theme--background-color-yellow {
      background-color: ${themeConfig.color.yellow} !important;
    }
    .theme--background-color-accent {
      background-color: ${themeConfig.color.accent} !important;
    }
    .theme--color-accent-hover:hover {
      color: ${themeConfig.color.accentHover} !important;
    }
    .theme--color-accent-focus:focus {
      color: ${themeConfig.color.accentClicked} !important;
    }
    .theme--fill-primary {
      fill: ${themeConfig.color.text} !important;
    }
    .theme--fill-primary-hover:hover {
      fill: ${themeConfig.color.text} !important;
    }
    .theme--fill-secondary {
      fill: ${themeConfig.color.textSecondary} !important;
    }
    .theme--fill-accent {
      fill: ${themeConfig.color.accent} !important;
    }
    .theme--fill-accent-hover:hover {
      fill: ${themeConfig.color.accentHover} !important;
    }
    .theme--fill-accent-focus:focus {
      fill: ${themeConfig.color.accentClicked} !important;
    }
    .theme--border-primary {
      border-color: ${themeConfig.color.text} !important;
    }
    .theme--border-primary-hover:hover {
      border-color: ${themeConfig.color.text} !important;
    }
    .theme--border-accent {
      border-color: ${themeConfig.color.accent} !important;
    }
    .theme--border-accent-hover:hover {
      border-color: ${themeConfig.color.accentHover} !important;
    }
    .theme--border-accent-focus:focus {
      border-color: ${themeConfig.color.accentClicked} !important;
    }
    .theme--border-separator {
      border-color: ${themeConfig.color.separator} !important;
    }
    .theme--border-background-primary {
      border-color: ${themeConfig.color.backgroundPrimary} !important;
    }
    .theme--border-background-secondary {
      border-color: ${themeConfig.color.backgroundSecondary} !important;
    }
    .theme--background-separator {
      background-color: ${themeConfig.color.separator} !important;
    }
    .theme--background-accent {
      background-color: ${themeConfig.color.accent} !important;
    }
    .theme--background-accent-hover:hover {
      background-color: ${themeConfig.color.accentHover} !important;
    }
    .theme--background-accent-highlight:hover {
      background-color: ${themeConfig.color.accentHighlight} !important;
    }
    .theme--background-accent-focus:focus {
      background-color: ${themeConfig.color.accentClicked} !important;
    }
    .theme--background-primary {
      background-color: ${themeConfig.color.backgroundPrimary} !important;
    }
    .theme--background-secondary {
      background-color: ${themeConfig.color.backgroundSecondary} !important;
    }
    .theme--disabled-opacity {
      opacity: ${themeConfig.disabledOpacity} !important;
    }
    .theme--color-grey1 {
      color: ${themeConfig.color.grey1} !important;
    }
    .theme--border-grey1 {
      border-color: ${themeConfig.color.grey1} !important;
    }
    .theme--fill-grey1 {
      fill: ${themeConfig.color.grey1} !important;
    }
    .theme--background-disabled {
      background-color: ${themeConfig.color.disabledBackground} !important;
    }
  `;

  const styleNode = document.createElement('style');
  styleNode.innerHTML = cssString;
  document.head.appendChild(styleNode);
}

export default loadDefaultCss;
export { loadDefaultCss };
