import { css } from "styled-components";

// - Use HSL or HSLA everywhere
// - Exceptions: `black` or `white`

// -------------------------------------------------------------
// Themes.
// -------------------------------------------------------------

const lightTheme = css`
  --color-page-content: hsl(209, 61%, 16%);
  --color-page-content-faded: hsl(0, 0%, 50%);
  --color-page-overscroll: hsl(0, 0%, 100%);
  --color-selection-foreground: hsl(0, 0%, 100%);
  --color-selection-background: hsl(210, 36%, 96%);
  --color-faint: hsl(212, 33%, 89%);
  --color-faint-transparent: hsla(212, 33%, 89%, 0.5);
`;

const darkTheme = css`
  --color-page-content: hsl(0, 0%, 100%);
  --color-page-background: hsl(0, 0%, 10%);
  --color-page-overscroll: hsl(0, 0%, 10%);
  --color-selection-foreground: hsl(0, 0%, 100%);
  --color-selection-background: var(--color-accent);
`;

export default css`
  /* 1. Light mode by default. */
  :root {
    --hue-accent: 240;
    --color-accent: hsl(var(--hue-accent), 100%, 50%);

    --typographic-rhythm: 62.5%;
    --typographic-size: 1.6em;

    --font-body-stack: Verdana, sans-serif;
    --font-body-line-height: 1.4;
    --font-heading-stack: "lora", serif;
    --font-heading-line-height: 1.4 ${lightTheme};

    --color-font-highlight: hsl(360, 92%, 20%);
    @keyframes highlightFlash {
      from {
        background: hsl(360, 77%, 78%);
      }
      to {
        background: transparent;
      }
    }
  }

  /* 2. Check user preference. */
  @media (prefers-color-scheme: dark) {
    :root {
      ${lightTheme};
    }
  }

  /* 3. Then, check if the user opted-in a specific theme. */
  html[data-theme="light"] {
    ${lightTheme};
  }

  html[data-theme="dark"] {
    ${lightTheme};
  }
`;
