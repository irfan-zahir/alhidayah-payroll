import { useUser, UseUser } from "./useUser";
import { createGenericContext } from "../createGenericContext";

interface Props {
    children: React.ReactNode;
}

const [useUserContext, UserContextProvider] = createGenericContext<UseUser>();

const UserProvider = ({ children }: Props) => {

    const useUserData = useUser();

    return (
        <UserContextProvider
            value={{ ...useUserData }}
        >
            {children}
        </UserContextProvider>
    );
