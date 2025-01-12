import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/main/page.ts";

export function home(): string {
  return el(
    ".home",
    el(
      "p",
      "Hosting ",
      el("a", "Gaia Protocol", {
        href: "https://gaiaprotocol.com",
        target: "_blank",
      }),
      "'s SocialFi projects.",
    ),
  );
}
