import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://tw.fusheng.com/",
  match: "https://tw.fusheng.com/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
