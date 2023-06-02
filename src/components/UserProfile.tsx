import { useSpotifyUser } from "@/lib/spotify";
import { For } from "solid-js";

export default function UserProfile() {
  const user = useSpotifyUser();

  return (
    <div class="sticky top-0 flex h-[54rem] w-4/12 flex-col items-center space-y-10 border-2 bg-ctp-mantle text-ctp-text border-gradient-b-red-lavender-peach">
      <p class="absolute right-3 top-3 place-self-end text-sm text-ctp-text opacity-80">
        {user()?.id}
      </p>
      <figure class="mt-20 flex h-52 space-x-3 border-b pb-10 border-gradient-r-red-lavender-peach">
        <img
          src={user()?.images[0].url}
          class=" h-full rounded-full border-4 border-ctp-green"
        />
        <figcaption class="flex h-full flex-col justify-center space-y-3 text-ctp-blue">
          <p class="text-3xl font-bold">{user()?.display_name}</p>
          <p class="text-xs">
            <span>{user()?.playlists.total} Playlists </span>•
            <span> {user()?.followers.total} Followers </span>•
            <span> {user()?.following.total} Following</span>
          </p>
        </figcaption>
      </figure>
      <article class="flex w-full justify-between space-x-6 px-12 text-center text-sm text-ctp-subtext0">
        <section>
          <h4 class="pb-2 text-2xl font-bold text-ctp-text">Top Artists</h4>
          <ul class="space-y-1">
            <For
              each={user()?.topArtists.items}
              fallback={<p>Loading artists...</p>}
            >
              {(artist) => (
                <li>
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    class="flex cursor-pointer items-center space-x-2 hover:text-ctp-blue"
                  >
                    <img
                      src={artist.images[0].url}
                      width={20}
                      height={20}
                      class="inline rounded-full"
                    />
                    <span class="text-start">{artist.name}</span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </section>
        <section>
          <h4 class="pb-2 text-2xl font-bold text-ctp-text">Top Tracks</h4>
          <ul class="space-y-1">
            <For
              each={user()?.topTracks.items}
              fallback={<p>Loading tracks...</p>}
            >
              {(track) => (
                <li>
                  <a
                    href={track.external_urls.spotify}
                    target="_blank"
                    class="flex cursor-pointer items-center space-x-2 hover:text-ctp-blue"
                  >
                    <img
                      src={track.album.images[0].url}
                      width={20}
                      height={20}
                      class="inline rounded-full"
                    />
                    <span class="text-start">{track.name}</span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </section>
      </article>
    </div>
  );
}
