export interface ILoginResponse {
    data: IUser;
    success: boolean;
    errors: string[] | null
}

export interface IUser {
    token: IToken;
    userResult: IUserResult;
}

interface IToken {
    accessToken: string;
    expirationMinutes: number;
}
interface IUserResult {
    userID: string;
    email: string;
    role: string;
    name: string;
    phone: string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface IRegister {
    name: string;
    email: string;
    password: string;
    phone: string;
}