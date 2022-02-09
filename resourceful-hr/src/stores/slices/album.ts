import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAlbum} from "../../models/models";

export interface AbsenceS  {
  album: IAlbum,
  isAlbumfetching: boolean,
  isError: boolean,
  isAlbumAvailable: boolean
}

const initialState: AbsenceS = {
    album: [],
    isAlbumfetching:false,
    isError: false,
    isAlbumAvailable:false
}

export const Album = createSlice({
  name: 'album',
  initialState,
  reducers: {
      requestAlbum(state) {
        state.isAlbumfetching = true
      },
      loadAlbum(state, action:PayloadAction<IAlbum>){
          state.isAlbumfetching = false;
          state.isError = false;
          state.album = action.payload;
          state.isAlbumAvailable = true;
      },
      failureAbsence(state){
        state.isAlbumfetching = false;
        state.isError = true;
      },
  },
})

export const {requestAlbum,loadAlbum,failureAbsence} = Album.actions

export default Album.reducer