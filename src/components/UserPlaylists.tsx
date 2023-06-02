import { spotify } from "@/lib/spotify";
import type { Playlists } from "@/types/spotify";
import { Icon } from "@iconify-icon/solid";
import { createEffect, createSignal, For } from "solid-js";
import { A } from "solid-start";

export default function UserPlaylists() {
  const [playlists, setPlaylists] = createSignal<Playlists>();

  createEffect(async () => {
    setPlaylists(await spotify.currentUser.playlists.playlists());
  });

  return (
    <div class="relative w-full border bg-ctp-mantle px-6 py-5 text-ctp-text border-gradient-br-lavender-flamingo-blue">
      <h2 class="mb-3 text-2xl font-bold text-ctp-blue">Playlists</h2>
      <div class="flex flex-wrap justify-evenly gap-y-8">
        <For each={playlists()?.items} fallback={<p>Loading playlists...</p>}>
          {(playlist, idx) => (
            <div class="group w-44 cursor-pointer">
              <div class="relative w-full">
                <A href={`/playlist/${idx()}`}>
                  <img
                    src={playlist.images[0]?.url ?? "/empty-playlist.png"}
                    class="h-44 w-full rounded-t-xl"
                  />
                </A>
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  class="absolute -bottom-3 right-1 grid h-10 w-10 cursor-auto place-items-center rounded-full bg-ctp-green opacity-0 transition-all duration-200 hover:scale-125 hover:bg-ctp-teal group-hover:bottom-1 group-hover:opacity-100"
                >
                  <Icon
                    icon="mdi:play"
                    width={32}
                    height={32}
                    class="text-ctp-crust"
                  />
                </a>
              </div>
              <div class="h-fit min-h-[4rem] w-full rounded-b-xl bg-ctp-crust transition-colors duration-150 group-hover:bg-ctp-surface0">
                <h2 class="p-3 text-sm font-bold">{playlist.name}</h2>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
