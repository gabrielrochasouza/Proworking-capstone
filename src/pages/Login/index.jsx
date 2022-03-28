import Form from "../../components/Form";

import { proWorkingApi } from "../../services/api";
import { useUser } from "../../providers/user";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginContainer } from "./styles";
import { useAuthGoogle } from "../../providers/authGoogle";
import { auth, firebase } from "../../services/firebase";

const Login = () => {
  const { handleUser } = useUser();
  const { authenticated, setAuthenticated } = useAuthenticated();

  const { setUser } = useAuthGoogle();

  const history = useHistory();

  const handleSubmitCallBack = (dataUser) => {
    proWorkingApi
      .post("/login", dataUser)
      .then(({ data }) => {
        handleUser(data);
        setAuthenticated(true);
        history.push("/dashboard");
        toast.success("Login feito com sucesso");
      })
      .catch(() =>
        toast.error("Email ou senha incorretos!", {
          toastId: "toastError",
        })
      );
  };

  const handleClickButtonLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, email } = result.user;

      if (!displayName) throw new Error("O Usuario não tem Nome");

      const data = {
        email: email,
        password: "pw2022",
      };

      handleSubmitCallBack(data);

      setUser({ ...data, name: displayName });
    }
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <>
      <LoginContainer>
        <div className="col-left col">
          <div></div>
        </div>

        <div className="col-right col">
          <Form
            isLogin
            handleSubmitCallBack={handleSubmitCallBack}
            handleClickButtonLogin={handleClickButtonLogin}
          />
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
