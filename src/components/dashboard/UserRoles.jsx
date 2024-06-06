import UserRoleMainCard from "../cards/UserRoles/UserRolesmaincard";
import DatasetMenu from "../menu/datasetmenu";
import  UserCard from "../cards/UserRoles/usercard";

const UserRoles =() =>{
    return (
        <div>
            <UserRoleMainCard/>
            <DatasetMenu/>
            <div className="flex space-x-8">
             <UserCard/>
             <UserCard/>
             <UserCard/>
             <UserCard/>
            </div>
            <div className="flex space-x-8">
             <UserCard/>
             <UserCard/>
             <UserCard/>
             <UserCard/>
            </div>
            <div className="flex space-x-8">
             <UserCard/>
             <UserCard/>
             <UserCard/>
             <UserCard/>
            </div>
            <div className="flex space-x-8">
             <UserCard/>
             <UserCard/>
             <UserCard/>
             <UserCard/>
            </div>
        </div>
    );
};
export default UserRoles;