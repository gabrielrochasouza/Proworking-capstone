import { UserProvider } from "./user";
import { AuthenticatedProvider } from "./authenticated";
import { WorkersProvider } from "./workers";
import { AuthContextProvider } from "./authGoogle";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <AuthenticatedProvider>
        <WorkersProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </WorkersProvider>
      </AuthenticatedProvider>
    </UserProvider>
  );
};

export default Providers;
