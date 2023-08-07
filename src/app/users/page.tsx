import type {Metadata} from "next";
import getAllUsers from "../../../lib/getAllUsers";

export const metaData: Metadata = {
    title: 'Users',
    description: '',
}

export default function UsersPage(){
    const usersData: Promise<> = getAllUsers();
    return (
        <div>This is user page</div>
    )
}