export interface IUser {
    id: number;
    name: string;
    password: string;
    country: string;
    email: string;
    createdAt: Date;
    updatedAt?: any;
    deletedAt?: any;
}

export interface IData {
    isAuth: boolean;
    token: string;
    user: IUser;
}

export interface AuthResponse {
    status: number;
    message: string;
    data: IData;
}
export interface AuthContextType {
    isLoading: boolean;
    auth: AuthResponse;
    signin: (body: any) => void;
    signup: (body: any) => void;
    signout: (token: string) => void;
}
