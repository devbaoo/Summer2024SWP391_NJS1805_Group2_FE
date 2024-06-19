import { useEffect } from "react";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { getUserProfile } from "../../service/features/userSlice";


const Profile= () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state=>state.users.user);

    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch]);
    
  return (
    <div className="grid h-screen" style={{ gridTemplateRows: 'auto 1fr auto' }}>
    <div className="row-start-1 row-end-2">
        <Header />
    </div>
    <div className="row-start-2 row-end-3 grid" style={{ gridTemplateRows: 'auto 1fr' }}>
       <ProfileComponent
         email={user?.email} 
         phone={user?.phone} 
         name={user?.name} 
         avatarUrl={user?.avatarUrl} 
         rank={user?.rank}
       />
    </div>
    <div className="row-start-3 row-end-4">
        <Footer />
    </div>
</div>
  );
};

export default Profile;