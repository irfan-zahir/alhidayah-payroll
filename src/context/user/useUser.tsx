import { useEffect, useMemo, useState } from "react";
import { auth } from '~/lib/firebase';
import { onIdTokenChanged, User } from 'firebase/auth';
import { api } from "~/server/apiClient";
import nookies from "nookies"
import { useRouter } from "next/router";

export const useUser = () => {

    const router = useRouter()
    const [user, setUser] = useState<User | null>(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(function getUser() {
        const unsubscribe = onIdTokenChanged(auth, async (updatedUser) => {
            if (!updatedUser) {
                setUser(null)
                nookies.destroy(null, "token")
                nookies.set(null, "token", "", { path: "/" })
                return
            }

            const token = await updatedUser.getIdToken()
            setIsUserLoading(false);
            setUser(updatedUser);
            nookies.destroy(null, "token")
            nookies.set(null, "token", token, { path: "/" })
        });
        return () => unsubscribe();
    }, []);

    // force refresh token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
            const updatedUser = auth.currentUser;
            if (updatedUser) {
                await updatedUser.getIdToken(true)
                setUser(updatedUser)
            }
        }, 10 * 60 * 1000);
        return () => clearInterval(handle);
    }, []);

    const { data: accountData, isLoading: isProfileLoading }
        = api.auth.getAccount.useQuery(
            undefined,
            {
                enabled: !!user,
                retry: 1,
            },
        );

    const account = useMemo(function getProfile() {
        return accountData ? accountData : null;
    }, [accountData]);

    return {
        user,
        setUser,
        isUserLoading,
        account,
        isProfileLoading,
    };
};

export type UseUser = ReturnType<typeof useUser>;