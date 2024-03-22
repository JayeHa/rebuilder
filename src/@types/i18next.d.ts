import type * as ko from "@/locales/ko";
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof ko.common;
      service: typeof ko.service;
    };
  }
}
