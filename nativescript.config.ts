import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "io.github.liuy97.bankpick",
  appPath: "src",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
} as NativeScriptConfig;
