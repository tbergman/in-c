import { List } from 'immutable';
import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

import { PlayerRecord, playerFactory } from './player.model';
import { PlaylistRecord } from './playlist.model';
import { PlaylistItemRecord } from './playlist-item.model';

export interface PlayerState {
  player: PlayerRecord;
  moduleIndex?: number;
  timeSpentOnModule?: number;
  playlist?: PlaylistRecord;
  nowPlaying?: List<PlaylistItemRecord>;
  gainAdjust?: number;
  pan: number;
  y: number;
}

export interface PlayerStateRecord extends TypedRecord<PlayerStateRecord>, PlayerState {}
export const playerStateFactory = makeTypedFactory<PlayerState, PlayerStateRecord>({
  player: playerFactory(),
  moduleIndex: null,
  timeSpentOnModule: 0,
  playlist: null,
  nowPlaying: <List<PlaylistItemRecord>>List.of(),
  gainAdjust: 1,
  pan: 0,
  y: 100
});
