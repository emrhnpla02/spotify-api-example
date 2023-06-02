import type {
  Artist,
  Page,
  PlaylistWithTrackReferences,
  TrackWithAlbum,
  User,
} from "@spotify/web-api-ts-sdk/dist/mjs/types";

export type SpotifyUser = User & {
  playlists: Playlists;
  following: Page<Artist>;
  topArtists: Page<Artist>;
  topTracks: Page<TrackWithAlbum>;
};

export type Playlists = Page<PlaylistWithTrackReferences>;
