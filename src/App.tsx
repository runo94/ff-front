
import { Route, Routes } from 'react-router-dom';
import { UserProfile } from "@app/modules/pages/user-profile/user-porfile.page";
import { Team } from "@app/modules/pages/team/team.page";
import { Welcome } from "@app/modules/pages/welcome/welcome.page";
import { SignIn } from '@app/modules/pages/auth/signin/signin.page';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}