import store from "..";
import { UserDataType } from "../../common/common.types";

export type UserData =
  | {
      accessToken: string;
      user: UserDataType;
    }
  | undefined;

export interface InitialStore {
  userData: UserData;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
