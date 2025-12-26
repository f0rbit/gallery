import { Component, JSX, Show, Index } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import Grain from "~/components/common/Grain";
import "./layout.css";

export type BackLink = {
  href: string;
  label: string;
};

type Props = {
  children: JSX.Element;
  back?: BackLink;
};

const navLinks = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/now", label: "now" },
  { href: "/colophon", label: "colophon" },
] as const;

const externalLinks = [
  { href: "https://forbit.dev", label: "forbit.dev" },
  { href: "https://blends.blog", label: "blends.blog" },
  { href: "https://github.com/tmaterne", label: "github" },
] as const;

const Layout: Component<Props> = (props) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div class="layout">
      <Grain />

      <Show when={props.back}>
        <header class="layout__header">
          <A href={props.back!.href} class="layout__back">
            <span class="layout__back-arrow">&larr;</span>
            <span>{props.back!.label}</span>
          </A>
        </header>
      </Show>

      <main class="layout__main">
        {props.children}
      </main>

      <footer class="layout__footer">
        <nav class="layout__nav">
          <Index each={navLinks}>
            {(link) => (
              <A
                href={link().href}
                class="layout__nav-link"
                classList={{ "layout__nav-link--active": isActive(link().href) }}
              >
                {link().label}
              </A>
            )}
          </Index>
        </nav>

        <div class="layout__divider" />

        <div class="layout__external">
          <Index each={externalLinks}>
            {(link, index) => (
              <>
                <a
                  href={link().href}
                  class="layout__external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link().label}
                </a>
                <Show when={index < externalLinks.length - 1}>
                  <span class="layout__external-dot">&middot;</span>
                </Show>
              </>
            )}
          </Index>
        </div>

        <div class="layout__email">
          <a href="mailto:tom@thomas-materne.com">tom@thomas-materne.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
