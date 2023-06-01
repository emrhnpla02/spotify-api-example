import { Icon } from "@iconify-icon/solid";

export default function Navbar() {
  return (
    <nav class="sticky top-0 flex h-16 w-full items-center justify-between bg-ctp-green text-ctp-crust">
      <ul class="flex h-full items-center text-lg font-bold">
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <a href="/">Home</a>
        </li>
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <a href="/categories">Categories</a>
        </li>
        <li class="grid h-full place-items-center bg-transparent px-3 hover:bg-ctp-base hover:bg-opacity-70 hover:text-ctp-teal">
          <a href="/playlists">Playlists</a>
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
