import { Container } from "./style.js";
import DefaultUserImg from "../../assets/profile 1.png";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { imgurApi, proWorkingApi } from "../../services/api.js";
import { useWorkers } from "../../providers/workers/index.js";

const EditPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  const { workers,refreshWorkers } = useWorkers();
  const [newName,setNewName] = useState('')
  const [showModal,setShowModal] = useState(false)


  const { accessToken } = userInfo;

  const workerProfile = workers.find((worker) => worker.userId === Number(userInfo.user.id))

  

  const updateName = (nametext) => {
    proWorkingApi
      .patch(
        `/users/${userInfo.user.id}`,
        { name: nametext },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        //refreshWorkers();
        toast("Nome de perfil atualizado!");
      })
  };



  const updateImg = (link) => {
    proWorkingApi
      .patch(
        `/users/${userInfo.user.id}`,
        { img: link },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        //refreshWorkers();
        toast("Imagem de perfil atualizada!");
      })
  };

  const turnImageToUrl = (dataform) => {
    imgurApi
      .post("3/image/", dataform, {
        headers: {
          Authorization: "Client-ID a66ae9cfdf01190",
        },
      })
      .then((data) => {
        updateImg(data.data.data.link);
      })
  };
  useEffect(()=>{
      refreshWorkers()

  })

  return (
    <Container>
      <h1>Editar perfil</h1>
      <div className="box-user">
        <figure>
          <img
            src={!!workerProfile.user.img ? workerProfile.user.img : DefaultUserImg}
            alt="Profile ilustration"
          />
          <label htmlFor="arquivo"><AiOutlineEdit /></label>
          <input
            onChange={(e) => {
              const formdata = new FormData();
              formdata.append("image", e.target.files[0]);
              //updateImg('https://ca.slack-edge.com/TQZR39SET-U02BSSD4M1Q-73b0d8433e45-512')
              turnImageToUrl(formdata);
              setTimeout(()=>refreshWorkers(),2000)
              
            }}
            type={"file"}
            name="arquivo"
            id="arquivo"
          />
        </figure>
        <h2>Nome de usuário:</h2>
        {!!workerProfile.user.name && (
          <div className="user-info">
            <p>{workerProfile.user.name}</p>
            <span >
              <AiOutlineEdit onClick={()=>setShowModal(true)} />
            </span>
          </div>
        )}
      </div>

      <div className={showModal ? 'modal':'hidden'}>
            <div className="modal-box">
                <h3>Alterar o nome</h3>
                <input placeholder="Insira um nome novo" onChange={(e)=>setNewName(e.target.value)}/>
                <button onClick={()=>{
                    updateName(newName)
                    setShowModal(false)
                    setTimeout(()=>refreshWorkers(),1000)
                }}>Trocar o nome</button>
                <span onClick={()=>setShowModal(false)}>Fechar</span>
            </div>
      </div>

    </Container>
  );
};

export default EditPage;
