import {
  createPage,
} from "https://raw.githubusercontent.com/yjgaia/deno-module/main/page.ts";
import { home } from "./pages/home.ts";
import { layout } from "./pages/layout.ts";

export function pages(path: string, isDevMode = false): string | undefined {
  if (path === "/") {
    return createPage(
      {
        title: "sofi.so",
        cssFiles: [isDevMode ? "bundle-dev.css" : "/bundle.css"],
      },
      layout(home()),
    );
  }
}
