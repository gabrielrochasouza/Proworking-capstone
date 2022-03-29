import { Container } from "./style.js";
import DefaultUserImg from "../../assets/profile 1.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { imgurApi } from "../../services/api.js";

const EditPage = () => {
  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
  );
  const [linkcreated,setLinkCreated] = useState('')

  const turnImageToUrl = (dataform)=>{
    console.log('oi')
    imgurApi.post("3/image/",dataform, {
        headers: {
            Authorization: "Client-ID a66ae9cfdf01190"
        }
    }).then(data => {
        console.log(data)
        setLinkCreated(data.data.link)
    }).catch(err=>console.log(err))
  }


  return (
    <Container>
      <h1>Editar perfil</h1>
      <div className="box-user">
        <figure>
          <img src={linkcreated ? linkcreated : DefaultUserImg} alt="Profile ilustration" />
          <label for='file' name="file" id="file">
            <AiOutlineEdit />
          </label>
        </figure>
        <h2>Nome de usuário:</h2>
        {!!userInfo.user.name && (
            <div className="user-info">
              <p>{userInfo.user.name}</p>
              <span>
                <AiOutlineEdit />
              </span>
            </div>
        )}
        </div>

      <input
        onChange={(e) =>{
            const formdata = new FormData()
            formdata.append('image',e.target.files[0])
            console.log(e.target.files[0])
            turnImageToUrl(formdata)
        }}
        type={"file"}
        name="file"
        id="file"
      />
      {linkcreated && <p>{linkcreated}</p>}
    </Container>
  );
};

export default EditPage;
