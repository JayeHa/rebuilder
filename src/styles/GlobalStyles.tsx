import { css, Global } from "@emotion/react";
import "pretendard/dist/web/static/pretendard.css";
import { fontFamily } from "./constants/typography";

/**
 * 이 스타일 리셋은 styled-normalize를 기반으로 커스터마이징 되었습니다.
 * styled-normalize의 원본 코드는 아래 링크에서 확인할 수 있습니다.
 * @see https://github.com/sergeysova/styled-normalize/blob/main/src/index.js
 */
export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        box-sizing: border-box;
        font-family: ${fontFamily.main};
      }

      html {
        width: 100%;
        min-height: -webkit-fill-available;

        font-family: ${fontFamily.main};
        font-size: 62.5%;
        white-space: nowrap;
        -webkit-text-size-adjust: 100%;
      }

      body {
        width: 100%;
        max-width: 100vw;
        min-height: -webkit-fill-available;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: ${fontFamily.main};
      }

      main {
        display: block;
      }

      h1 {
        font-size: 2em;
        margin: 0;
      }

      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre {
        font-family: monospace, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bolder;
      }

      code,
      kbd,
      samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: ${fontFamily.main};
        font-size: 100%;
        line-height: 1.15;
        margin: 0;

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }

      button,
      input,
      select,
      textarea {
        background-color: transparent;
        border: 0;

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      ul,
      ol {
        padding-left: 0;
        list-style: none;
      }

      [hidden] {
        display: none;
      }
    `}
  />
);
