import type { SpotifyUser } from "@/types/spotify";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createResource, type Resource } from "solid-js";

export const spotify = SpotifyApi.withUserAuthorization(
  import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  import.meta.env.VITE_REDIRECT_TARGET,
  ["user-follow-read", "user-top-read", "playlist-read-private"]
);

export function useSpotifyUser(): Resource<SpotifyUser> {
  const [user] = createResource(async () => {
    const [profile, playlists, followedArtists, topArtists, topTracks] =
      await Promise.all([
        spotify.currentUser.profile(),
        spotify.currentUser.playlists.playlists(),
        spotify.currentUser.followedArtists(),
        spotify.currentUser.topItems("artists"),
        spotify.currentUser.topItems("tracks"), // INFO: RETURNS WRONG TYPE
      ]);

    return {
      ...profile,
      playlists,
      following: followedArtists.artists,
      topArtists,
      topTracks,
    };
  });

  // @ts-ignore
  return user;
}
