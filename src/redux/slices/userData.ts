import {
   createSlice,
   PayloadAction,
}                         from "@reduxjs/toolkit"
import SliceNames         from "../../model/redux/sliceNames"
import { 
   UserProfile, 
   UserProfileWithTags 
}                         from "../../model/UserData"
 
 
interface UserDataState {
   retrievingUserData       : boolean,
   failedRetrievingUserData : boolean
   userData                 : UserProfileWithTags[] | null,
}
const initialUserDataState: UserDataState = {
   retrievingUserData       : false,
   failedRetrievingUserData : false,
   userData                 : null,
}

const userDataSlice = createSlice({
   name: SliceNames.USER_DATA,
   initialState: initialUserDataState,
   reducers: {
      setRetrievingUserData       : (state, { payload }: PayloadAction<boolean>) => { state.retrievingUserData = payload },
      setFailedRetrievingUserData : (state, { payload }: PayloadAction<boolean>) => { state.failedRetrievingUserData = payload },
      setNewUserData              : (state, { payload }: PayloadAction<UserProfile[]>) => { 
         state.userData = payload.map((profile) => ({...profile, tags: []}) )
      },
      setUpdatedUserTags : (state, { payload }: PayloadAction<UserProfileWithTags[]>) => { state.userData = payload },
   },
})

export const {
   setRetrievingUserData,
   setNewUserData,
   setFailedRetrievingUserData,
   setUpdatedUserTags
} = userDataSlice.actions

export default userDataSlice
