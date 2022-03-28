import { RatingContainer, ServiceContainer } from "./style";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { chatApi } from "../../services/api";
import { toast } from "react-toastify";
import { proWorkingApi } from "../../services/api";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { TiMessage } from "react-icons/ti";

import Button from "../../components/Button/index.jsx";
import { useAuthenticated } from "../../providers/authenticated";

import DefaultUserImg from "../../assets/profile 1.png";
import { useEffect, useState } from "react";

import RatingStars from "../../components/RatingStars";
import { useHistory } from "react-router-dom";



const ServiceProfilePage = () => {
  const [feed, setFeed] = useState("");
  const { workers } = useWorkers();
  const { id, name } = useParams();
  const { authenticated } = useAuthenticated();
  const [feedbacks, setFeedbacks] = useState([]);
  const [contador, setContador] = useState(0);
 // const { user: userInfo } = useUser();

 const history = useHistory();


  const [workerProfile] = useState(
    workers.find(
      (worker) => worker.user.name === name && worker.id === Number(id)
    )
  );

  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
  );

  const [userRating] = useState(
    workerProfile.ratings.find(
      ({ userId }) => userId === userInfo.user?.id
    ) || {
      stars: 0,
    }
  );

  const [averageRating] = useState(
    workerProfile.ratings.reduce((acc, rating) => acc + rating.stars, 0) /
      workerProfile.ratings.length
  );

  const { occupation_areas, summary, whatsapp, user } = workerProfile;

  const getApi = () => {
    proWorkingApi.get(`feedbacks?_expand=user&workerId=${+id}`).then((res) => {
      setFeedbacks(res.data);
    });
  };

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const feedbackApi = () => {
    proWorkingApi
      .post(
        "feedbacks",
        {
          userId: userInfo.user.id,
          workerId: +id,
          content: feed.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        }
      )
      .then(() => {
        getApi();
        setFeed("");
      });
  };




  const initChat = () => {
    const header = {
        "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
        "User-Name": `${userInfo.user.email}`,
        "User-Secret": "proworking2022",
        "Content-Type": "application/json",
    };
    const data = {
        usernames: [userInfo.user.email, user.email],
        title: `${userInfo.user.name}/${name}`,
        is_direct_chat: false,
    };
    if (authenticated) {
        chatApi
            .put("/chats/", data, { headers: header })
            .then(() => history.push("/chat"));
    } else {
        toast("Faça login para usar o chat!", {
            toastId: "toastfyInfo",
        });
    }
};


  return (
    <ServiceContainer>
      <div className="profile-header">
        <span className="profile-header-title">
          PROWORKING
        </span>
        <span>
          <RatingStars workerId={+id} value={averageRating || 0} />
        </span>
        <figure>
          <img src={DefaultUserImg} alt={name} />
        </figure>
      </div>
      <div className="profile-content">
        <div className="profile-tittle">
          <div>
            <h1>Olá 👋, meu nome é {name}</h1>
            <p>{occupation_areas && occupation_areas.join(", ")}</p>
            <div className="cities">
              <ul>
                <h2>Cidades de Atendimento:</h2>
                {workerProfile.cities !== undefined &&
                  workerProfile.cities.map(({ state, city }, index) => (
                    <li key={`${city}-${index}`} className="locationInfo">
                      {state} {city}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="icon icon-whatsapp"
          onClick={() => {
            const text =
              "Vi seu perfil na Proworking, gostaria de conversar sobre o trabalho";
            const tel = whatsapp
              .split("")
              .filter((letter) => !isNaN(letter) && letter !== " ")
              .join("");

            window.open(`https://wa.me/${tel}?text=${text}`);
          }}
        >
          <AiOutlineWhatsApp /> Fale Comigo
        </div>

        <div
          className="icon icon-mail"
          onClick={() => {
            const subject = "Anúncio do site Proworking";
            const body = "Gostaria de conversar sobre...";

            window.open(`mailto:${user.email}?subject=${subject}&body=${body}`);
          }}
        >
          <AiOutlineMail /> Envie um Email
        </div>


        <div className='icon icon-message' onClick={() => initChat()}>
            <TiMessage /> Mensagem Direta
        </div>




        <h2>Informações do Perfil</h2>
        <p>
          <strong>Descrição do serviço:</strong> {summary}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <RatingContainer>
          <h2>Como você avalia este profissional?</h2>
          <RatingStars workerId={+id} isEditable value={userRating.stars} />
        </RatingContainer>

        <h2>Comentários:</h2>

        {feedbacks.map((feedback) => {
          return (
            <div key={feedback.id} className="comments">
              <div className="profile-pic">
                <p>{feedback.user.name[0]}</p>
              </div>
              <div className="profile-comment">
                <h3>{feedback.user.name}</h3>
                <p>{feedback.content}</p>
              </div>
            </div>
          );
        })}

        <textarea
          maxLength={420}
          value={feed}
          onChange={(e) => {
            setFeed(e.target.value);
            setContador(e.target.value.trim().length);
          }}
          placeholder="Deixe seu feedback"
        ></textarea>
        <h4>{contador}/420</h4>
        <div className="botaoSpan">
          <Button
            onClick={() => {
              if (authenticated) {
                feed.trim() && feedbackApi();
              } else {
                toast.error("Faça login para comentar");
              }
            }}
          >
            Enviar
          </Button>
          <span>Para poder comentar é necessário estar logado</span>
        </div>
      </div>
    </ServiceContainer>
  );
// import RatingStars from "../../components/RatingStars";

// import { useState } from "react";
// import { useHistory } from "react-router-dom";


// const ServiceProfilePage = () => {
//     const { workers } = useWorkers();
//     const { id, name } = useParams();
//     const { authenticated } = useAuthenticated();
//     const { user: userInfo } = useUser();

//     const workerProfile = workers.find(
//       (worker) => worker.user.name === name && worker.id === Number(id)
//   );

    
//     const [userRating] = useState(
//       workerProfile.ratings.find(({ userId }) => userId === userInfo.id) || {
//         stars: 0,
//       }
//     );
  
//     const [averageRating] = useState(
//       workerProfile.ratings.reduce((acc, rating) => acc + rating.stars, 0) /
//         workerProfile.ratings.length
//     );





//     const { occupation_areas, summary, whatsapp, user } = workerProfile;
//     const history = useHistory();

//     const initChat = () => {
//         const header = {
//             "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
//             "User-Name": `${userInfo.user.email}`,
//             "User-Secret": "proworking2022",
//             "Content-Type": "application/json",
//         };
//         const data = {
//             usernames: [userInfo.user.email, user.email],
//             title: `${user.name}`,
//             is_direct_chat: false,
//         };
//         if (authenticated) {
//             chatApi
//                 .put("/chats/", data, { headers: header })
//                 .then(() => history.push("/chat"));
//         } else {
//             toast("Faça login para usar o chat!", {
//                 toastId: "toastfyInfo",
//             });
//         }
//     };

//     return (
//         <ServiceContainer>
//             <div className="profile-header">
//             <span>
//               <RatingStars workerId={+id} value={averageRating || 0} />
//             </span>
//             <figure>
//               <img src={DefaultUserImg} alt={name} />
//             </figure>
//           </div>
//             <div className='profile-content'>
//                 <div className='profile-tittle'>
//                     <div>
//                         <h1>Olá 👋, meu nome é {name}</h1>
//                         <p>{occupation_areas && occupation_areas.join(", ")}</p>
//                         <div className='cities'>
//                             <ul>
//                                 <h2>Cidades de Atendimento:</h2>
//                                 {workerProfile.cities !== undefined &&
//                                     workerProfile.cities.map(
//                                         ({ state, city }, index) => (
//                                             <li
//                                                 key={`${city}-${index}`}
//                                                 className='locationInfo'>
//                                                 {state} {city}
//                                             </li>
//                                         )
//                                     )}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div
//                     className='icon icon-whatsapp'
//                     onClick={() => {
//                         const text =
//                             "Vi seu perfil na Proworking, gostaria de conversar sobre o trabalho";
//                         const tel = whatsapp
//                             .split("")
//                             .filter(
//                                 (letter) => !isNaN(letter) && letter !== " "
//                             )
//                             .join("");

//                         window.open(`https://wa.me/${tel}?text=${text}`);
//                     }}>
//                     <AiOutlineWhatsApp /> Fale Comigo
//                 </div>
//                 {/* https://wa.me/5524998913379?text=teste */}

//                 <div
//                     className='icon icon-mail'
//                     onClick={() => {
//                         const subject = "Anúncio do site Proworking";
//                         const body = "Gostaria de conversar sobre...";

//                         window.open(
//                             `mailto:${user.email}?subject=${subject}&body=${body}`
//                         );
//                     }}>
//                     <AiOutlineMail /> Envie um Email
//                 </div>

//                 <div className='icon icon-message' onClick={() => initChat()}>
//                     <TiMessage /> Mensagem Direta
//                 </div>

//                 <h2>Informações do Perfil</h2>
//                 <p>
//                     <strong>Descrição do serviço:</strong> {summary}
//                 </p>
//                 <p>
//                     <strong>Email:</strong> {user.email}
//                 </p>

//                 <RatingContainer>
//                   <h2>Como você avalia este profissional?</h2>
//                   <RatingStars workerId={+id} isEditable value={userRating.stars} />
//                 </RatingContainer>

//                 <h2>Comentários:</h2>

//                 <div className='comments'>
//                     <div className='profile-pic'>
//                         <p>F</p>
//                     </div>
//                     <div className='profile-comment'>
//                         <h3>Fulaninho</h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Ratione, ullam debitis eaque quae voluptatem
//                             enim molestiae! Dolorem dignissimos repellendus
//                             fugit mollitia non nesciunt laboriosam velit,
//                             maiores cum, facere eligendi voluptas.
//                         </p>
//                     </div>
//                 </div>
//                 <div className='comments'>
//                     <div className='profile-pic'>
//                         <p>F</p>
//                     </div>
//                     <div className='profile-comment'>
//                         <h3>Fulaninho</h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Ratione, ullam debitis eaque quae voluptatem
//                             enim molestiae! Dolorem dignissimos repellendus
//                             fugit mollitia non nesciunt laboriosam velit,
//                             maiores cum, facere eligendi voluptas.
//                         </p>
//                     </div>
//                 </div>

//                 <textarea placeholder='Deixe seu feedback'></textarea>
//                 <Button
//                     onClick={() => {
//                         if (authenticated) {
//                         } else {
//                             history.push("/login");
//                         }
//                     }}>
//                     Enviar
//                 </Button>
//             </div>
//         </ServiceContainer>
//     );
};
export default ServiceProfilePage;
