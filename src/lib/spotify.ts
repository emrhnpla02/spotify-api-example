import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const spotify = SpotifyApi.withUserAuthorization(
  import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID,
  import.meta.env.PUBLIC_REDIRECT_TARGET,
  ["user-follow-read", "user-top-read"]
);
