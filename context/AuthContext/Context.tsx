import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import createPersistedState from "use-persisted-state";
import api from "../../utils/api";
import { AuthContextType, AuthResponse } from "./Type";

const initDefaultAuth = {
    data: {
        isAuth: false,
        token: "",
        user: {
            id: 0,
            name: "",
            password: "",
            country: "",
            email: "",
            createdAt: new Date(),
        },
    },
    message: "",
    status: 200,
};
const usePersistState = createPersistedState<AuthResponse>("ticket:auth");
const AuthContext = createContext<AuthContextType>({
    isLoading: false,
    auth: initDefaultAuth,
    signin: () => {},
    signup: () => {},
    signout: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = usePersistState(initDefaultAuth);
    const [isLoading, setIsLoading] = useState(false);

    const signin = async (body: any) => {
        setIsLoading(true);
        try {
            const { data }: AxiosResponse<AuthResponse> = await api.post(
                `/auth/signin`,
                body
            );

            setAuth(data);
            setIsLoading(false);
        } catch (error: any) {
            auth.message = error.response.data.message;
            auth.status = error.response.data.status;
            setAuth(auth);
            setIsLoading(false);
        }
    };

    const signup = async (body: any) => {
        try {
            const { data }: AxiosResponse<AuthResponse> = await api.post(
                `/auth/signup`,
                body
            );

            setAuth(data);
        } catch (error: any) {
            auth.message = error.response.data.message;
            auth.status = error.response.data.status;
            setAuth(auth);
        }
    };

    const signout = (id: string) => {
        // setAuth({
        //     isLoading: false,
        //     status: false,
        //     message: "",
        //     statusCode: 200,
        //     data: null,
        // });
    };
    return (
        <AuthContext.Provider
            value={{
                isLoading,
                auth,
                signin,
                signup,
                signout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
