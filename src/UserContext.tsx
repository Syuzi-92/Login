import { createContext } from "react";
import { IUser } from "./types";
interface IUserContext {
    users: IUser[];

}

export const UserContext = createContext<IUserContext>({} as IUserContext)