"use client"

import { UserInfor } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
    const user = useCurrentUser();
    return (
        <UserInfor
            user={user}
            label="📱Client component"
        />
    )
}

export default ClientPage;