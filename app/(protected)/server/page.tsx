import { UserInfor } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
    const user = await currentUser();
    return (
        <UserInfor
            user={user}
            label="💻Server component"
        />
    )
}

export default ServerPage;