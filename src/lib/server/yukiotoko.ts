import { YUKIOTOKO_API_TOKEN } from '$env/static/private';
import { PUBLIC_LATEST_VERSION } from '$env/static/public';
import Version from '$lib/Version';
import axios from 'axios';

function toPlayer(apiPlayer: APIPlayer): YukiotokoPlayer {
  return {
    username: apiPlayer.userName,
    rating: Number(apiPlayer.playerRating) / 100,
    battleRank: Number(apiPlayer.battleRankId),
    emblem: {
      medal: Number(apiPlayer.emblemMedal),
      base: Number(apiPlayer.emblemBase),
    },
    team:
      apiPlayer.isJoinTeam === 'true'
        ? {
            name: apiPlayer.teamName,
          }
        : undefined,
  };
}

function toRoom(apiRoom: APIRoom): YukiotokoRoom {
  return {
    id: apiRoom.roomId,
    lastUpdated: apiRoom.updatedAt,
    status: apiRoom.mergedRoom
      ? 'Merged'
      : apiRoom.isFinished
      ? 'Closed'
      : apiRoom.allowAnybody
      ? 'Open'
      : 'Active',
    battleRank: apiRoom.roomRanking,
    gameVersion: apiRoom.dataVersion,
    timeRemaining: apiRoom.restMSec,
    players: apiRoom.matchingMemberInfoList.map((apiPlayer) =>
      toPlayer(apiPlayer)
    ),
    mergedWith: apiRoom.mergedRoom,
  };
}

export async function getRooms(): Promise<YukiotokoRoom[]> {
  const activeRooms = await axios
    .get<APIRoom[]>('http://yukiotoko.chara.lol:9000/api/active', {
      headers: { Authorization: YUKIOTOKO_API_TOKEN },
    })
    .then((response) => response.data);

  const closedRooms = await axios
    .get<APIRoom[]>('http://yukiotoko.chara.lol:9000/api/history', {
      headers: { Authorization: YUKIOTOKO_API_TOKEN },
    })
    .then((response) => response.data);

  return activeRooms
    .concat(closedRooms)
    .map((room) => toRoom(room))
    .filter((room) => !Version.gt(room.gameVersion, PUBLIC_LATEST_VERSION));
}

export interface APIPlayer {
  errCnt: string;
  userId: string;
  placeId: string;
  skillId: string;
  skillLv: string;
  clientId?: unknown;
  joinTime: string;
  reginId: string;
  teamName: string;
  teamRank: string;
  trophyId: string;
  userName: string;
  messageId: string;
  emblemBase: string;
  hostErrCnt: string;
  isJoinTeam: string;
  romVersion: string;
  avatarEquip: {
    backID: string;
    faceID: string;
    headID: string;
    itemID: string;
    skinID: string;
    wearID: string;
    frontID: string;
  };
  characterId: string;
  dataVersion: string;
  emblemMedal: string;
  optRatingId: string;
  battleIconId: string;
  battleRankId: string;
  playerRating: string;
  battleIconNum: string;
  bestRatingAvg: string;
  characterRank: string;
  avatarEffectID: string;
  genreGraphList: { genreId: string; musicCount: string }[];
  giftMusicIdList: { musicId: string }[];
  skillIdForChara: string;
  battleCorrection: string;
  ratingEffectColorId: string;
}

export interface APIRoom {
  id: string;
  userId: string;
  roomId: number;
  dataVersion: string;
  romVersion: string;
  roomRanking: number;
  restMSec: number;
  isFull: boolean;
  matchingMemberInfoList: APIPlayer[];
  isFinished: boolean;
  allowAnybody: boolean;
  updatedAt: string;
  mergedRoom?: number;
}

export interface YukiotokoPlayer {
  username: string;
  rating: number;
  battleRank: number;
  emblem: {
    medal: number;
    base: number;
  };
  team?: {
    name: string;
  };
}

export interface YukiotokoRoom {
  id: number;
  lastUpdated: string;
  status: 'Active' | 'Open' | 'Merged' | 'Closed';
  battleRank: number;
  gameVersion: string;
  timeRemaining: number;
  players: YukiotokoPlayer[];
  mergedWith?: number;
}
