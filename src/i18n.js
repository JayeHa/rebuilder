import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const ns = ["service", "common"];
const supportedLngs = ["en", "ko"];

const loadLocaleData = (lng, ns) =>
  import(`./locales/${lng}/${ns}.json`).then((m) => m.default);

const resources = await Promise.all(
  supportedLngs.map(async (lng) => {
    const translations = await Promise.all(
      ns.map((ns) => loadLocaleData(lng, ns))
    );
    return {
      [lng]: ns.reduce((acc, n, index) => {
        acc[n] = translations[index];
        return acc;
      }, {}),
    };
  })
).then((resources) =>
  resources.reduce((acc, resource) => ({ ...acc, ...resource }), {})
);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ko",
    interpolation: { escapeValue: false },
    supportedLngs,
    ns,
  });

export default i18n;
