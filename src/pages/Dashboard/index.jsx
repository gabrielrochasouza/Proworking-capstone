import { Container } from "./styles";
import picture from "../../assets/profile 1.png";

import DropDownBrazilianCities from "../../components/DropDownBrazilianCities";
import DropDownBrazilianStates from "../../components/DropDownBrazilianStates";
import { useState } from "react";
import Form from "../../components/FormService/Form";
import TodoList from "../../components/FormService/TodoList";

import { proWorkingApi } from "../../services/api";

import { useAuthenticated } from "../../providers/authenticated";

import { useWorkers } from "../../providers/workers";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const { authenticated } = useAuthenticated();
  const history = useHistory();

  const [user] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
  );


  const { workers, refreshWorkers } = useWorkers();
  const workerProfile =
    workers.find(({ userId }) => userId === user.user?.id) || {};

  const [wrongNumber, setWrongNumber] = useState(false);
  const [error, setError] = useState(false);
  const [List, setList] = useState(workerProfile.occupation_areas || []);
  const [cityServed, setCityServed] = useState(workerProfile.cities || []);
  const [formValues, setFormValues] = useState({});
  const [bio, setBio] = useState(workerProfile.summary || "");
  const [whatsapp, setWhatsApp] = useState(workerProfile.whatsapp || "");
  const [isWorker, setIsWorker] = useState(workerProfile.is_active || false);

  const addTodo = (todo) => {
    if (todo.length !== 0) {
      const arr = [...List, todo];
      setList([...new Set(arr)]);
    }
  };

	const handleTodo = (todo) => {
		const filterTodo = List.filter((filterTodo) => filterTodo !== todo);
		setList(filterTodo);
	};

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (value) {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const registerLocalService = (e) => {
    e.preventDefault();
    if (formValues.state !== undefined) {
      const arr = [...cityServed, formValues];
      setCityServed([...new Set(arr)]);
    }
  };

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <Container>
        <h1>Complete seu cadastro</h1>
        <div className="dadContainer">
          <div className="childContainer">
            <div className="profile">
              <h3>
                Olá 👋 {user.user?.name}, atualize ou insira as suas informações
              </h3>
              <img src={!!user.user.img ? user.user.img : picture} alt="Foto de perfil" />
            </div>
            <div className="profession">
              <p>Insira abaixo os serviços que voce realiza</p>
              <ul>
                <Form addTodo={addTodo} />
              </ul>
            </div>
            <TodoList List={List} handleTodo={handleTodo} />
            <div className="contato">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="labelStates"
              >
                <label>Selecione o estado que voce atende:</label>

                <DropDownBrazilianStates
                  id="state"
                  name="state"
                  onChange={handleInputChange}
                ></DropDownBrazilianStates>
              </form>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="labelCities"
              >
                <label>Selecione as cidades que voce atende:</label>

                <DropDownBrazilianCities
                  id="city"
                  name="city"
                  state={formValues.state}
                  onChange={handleInputChange}
                ></DropDownBrazilianCities>
                <button
                  className="btn"
                  type="submit"
                  value="Send"
                  onClick={registerLocalService}
                >
                  adicionar
                </button>

                <div className="cidades-registradas">
                  {cityServed.length !== 0 && (
                    <label>Cidades registradas:</label>
                  )}
                  <ul>
                    {cityServed.map((item, index) => {
                      return (
                        <li key={index} value={item}>
                          <button
                            className="btn"
                            onClick={() => {
                              setCityServed(
                                cityServed.filter((elem) => elem !== item)
                              );
                            }}
                          >
                            x
                          </button>
                          {item.city}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </form>

              <div className="description">
                <form onSubmit={(e) => e.preventDefault()}>
                  <label>Insira seu número de Whatsapp</label>
                  {wrongNumber && <div className="error">Número errado!</div>}
                  <input
                    name="whatsapp"
                    placeholder="whatsapp"
                    defaultValue={whatsapp}
                    onChange={(e) => {
                      setWhatsApp(e.target.value);
                      if (
                        !!e.target.value.match(
                          /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/
                        )
                      ) {
                        setWrongNumber(false);
                      } else {
                        setWrongNumber(true);
                      }
                    }}
                  />
                  <label htmlFor="w3review">
                    Breve descrição de seus serviços:
                  </label>
                  <textarea
                    maxLength={250}
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Escreva uma descrição dos seus serviços"
                    defaultValue={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <p>{bio.length}/250</p>
                  <input
                    onClick={() => {
                      if (
                        whatsapp.length !== 0 &&
                        List.length !== 0 &&
                        bio.length !== 0 &&
                        wrongNumber === false
                      ) {
                        setError(false);

                        const requisition = {
                          is_active: isWorker,
                          summary: bio,
                          whatsapp: whatsapp,
                          cities: cityServed,
                          occupation_areas: List,
                          userId: user.user?.id,
                        };
                        

                        proWorkingApi
                          .patch(`/workers/${workerProfile.id}`, requisition, {
                            headers: {
                              Authorization: `Bearer ${user.accessToken}`,
                            },
                          })
                          .then(() => {
                            refreshWorkers();
                            if (isWorker) {
                              setTimeout(() => {
                                toast.success("Perfil Atualizado");
                                window.scrollTo(0, 0);
                                history.push(
                                  `/services/${workerProfile.id}/${workerProfile.user?.name}`
                                );
                              }, 750);
                            } else {
                              toast.success("Perfil Atualizado");
                              history.push("/dashboard");
                            }
                          })
                          .catch(() =>
                            toast.error(
                              "Algo deu errado :( tente novamente daqui a pouco"
                            )
                          );
                      } else {
                        setError(true);
                      }
                    }}
                    type="submit"
                    value="Atualizar"
                    className="btn"
                  />
                </form>
              </div>
              {error && (
                <div className="error">Falta preencher todos os campos!</div>
              )}
              <div className=" checkin">
                <input
                  className="checkin"
                  type="checkbox"
                  onClick={(e) => setIsWorker(e.target.checked)}
                  defaultChecked={isWorker}
                />
                <p>
                  Deixe esta caixa selecionada se deseja que os serviços
                  prestados por você apareçam nos resultados das buscas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
