import type {
  Page,
  PlaylistWithTrackReferences,
  TrackWithAlbum,
  User,
} from "@spotify/web-api-ts-sdk/dist/mjs/types";

export type SpotifyUser = User & {
  playlists: Page<PlaylistWithTrackReferences>;
  following: Page<Artist>;
  topArtists: Page<Artist>;
  topTracks: Page<TrackWithAlbum>;
};
