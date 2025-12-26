import { Component, JSX, Show, Index } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import Grain from "~/components/common/Grain";

export type BackLink = {
  href: string;
  label: string;
};

type Props = {
  children: JSX.Element;
  back?: BackLink;
};

const navLinks = [
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/now", label: "now" },
  { href: "/colophon", label: "colophon" },
] as const;

const externalLinks = [
  { href: "https://forbit.dev", label: "forbit.dev" },
  { href: "https://blends.blog", label: "blends.blog" },
  { href: "https://github.com/f0rbit", label: "github" },
] as const;

const Layout: Component<Props> = (props) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div class="layout">
      <Grain />

      <Show when={props.back}>
        <header class="layout-header">
          <A href={props.back!.href} class="link-back">
            <span>&larr;</span>
            <span>{props.back!.label}</span>
          </A>
        </header>
      </Show>

      <main class="layout-main">
        {props.children}
      </main>

      <footer class="layout-footer">
        <nav class="footer-nav">
          <Index each={navLinks}>
            {(link) => (
              <A
                href={link().href}
                class="link-nav"
                classList={{ "text-primary": isActive(link().href) }}
              >
                {link().label}
              </A>
            )}
          </Index>
        </nav>

        <div class="footer-divider" />

        <div class="footer-external">
          <Index each={externalLinks}>
            {(link, index) => (
              <>
                <a
                  href={link().href}
                  class="link-subtle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link().label}
                </a>
                <Show when={index < externalLinks.length - 1}>
                  <span class="text-subtle">&middot;</span>
                </Show>
              </>
            )}
          </Index>
        </div>

        <div class="footer-email">
          <a href="mailto:tom@thomas-materne.com" class="link-subtle">tom@thomas-materne.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
