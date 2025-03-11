import { createPage, el } from "@common-module/static-site-generator";

export default function index() {
  return createPage(
    {
      title: "sofi.so",
      cssFiles: ["/bundle.css"],
    },
    el(
      ".layout",
      el("header", el("h1", "sofi.so")),
      el(
        "main",
        el(
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
        ),
      ),
      el(
        "footer",
        el(".credit", "Created by Gaia Protocol"),
        el(
          ".social",
          el(
            "a",
            '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"></path></g></svg>',
            {
              href: "https://x.com/sofidotso",
              target: "_blank",
            },
          ),
        ),
      ),
    ),
  );
}
