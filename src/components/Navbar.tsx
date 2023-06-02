import { Icon } from "@iconify-icon/solid";
import { A } from "solid-start";

export default function Navbar() {
  return (
    <nav class="sticky top-0 flex h-16 w-full items-center justify-between bg-ctp-green text-ctp-crust">
      <ul class="flex h-full items-center text-lg font-bold">
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <A href="/">Home</A>
        </li>
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <A href="/categories">Categories</A>
        </li>
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <A href="/playlists">Playlists</A>
        </li>
      </ul>
      <a
        href="https://github.com/emrhnpla02/spotify-api-example"
        target="_blank"
        class="pr-5"
      >
        <Icon icon="mdi:github" width={40} height={40} />
      </a>
    </nav>
  );
}
