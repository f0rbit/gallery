import { Component, JSX, Show } from "solid-js";
import { A } from "@solidjs/router";
import Grain from "~/components/common/Grain";

export type BackLink = {
  href: string;
  label: string;
};

type Props = {
  children: JSX.Element;
  back?: BackLink;
};

const Layout: Component<Props> = (props) => {
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
    </div>
  );
};

export default Layout;
