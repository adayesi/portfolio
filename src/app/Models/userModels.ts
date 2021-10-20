import { WorkHistory } from "./workHistory";

export interface UserModel{
    firstName: string;
    lastName: string;
    // email: string;
    // phoneNumber: string;
    // address: string;
    workHistory: WorkHistory[];
}