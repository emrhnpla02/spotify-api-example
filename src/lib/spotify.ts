import type { SpotifyUser } from "@/types/spotify";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createSignal } from "solid-js";

export const spotify = SpotifyApi.withUserAuthorization(
  import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID,
  import.meta.env.PUBLIC_REDIRECT_TARGET,
  ["user-follow-read", "user-top-read", "playlist-read-private"]
);

export function useSpotifyUser() {
  const [user, setUser] = createSignal<SpotifyUser>();

  async function fetchUser() {
    return await Promise.all([
      spotify.currentUser.profile(),
      spotify.currentUser.playlists.playlists(),
      spotify.currentUser.followedArtists(),
      spotify.currentUser.topItems("artists"),
      spotify.currentUser.topItems("tracks"),
    ]);
  }

  fetchUser()
    .then((res) => {
      const [profile, playlists, followedArtists, topArtists, topTracks] = res;
      // @ts-ignore
      setUser({
        ...profile,
        playlists,
        following: followedArtists.artists,
        topArtists,
        // @ts-ignore
        topTracks,
      } satisfies SpotifyUser);
    })
    .catch((err) => console.error(err));

  return user;
}
