import { SpotifyApi } from '@spotify/web-api-ts-sdk';

let spotifyApiInstance: SpotifyApi | null = null;

export const getSpotifyApiInstance = (): SpotifyApi => {
  if (!spotifyApiInstance) {
    spotifyApiInstance = SpotifyApi.withClientCredentials(
      'af3f741c800049e2bad75f6cea37edce',
      '2d115677daf341cd95850f47d6e3cbeb'
    );
  }
  return spotifyApiInstance;
};
