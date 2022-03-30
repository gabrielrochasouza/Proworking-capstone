import { Rating } from "@mui/material";
import { toast } from "react-toastify";
import { useWorkers } from "../../providers/workers";
import { proWorkingApi } from "../../services/api";
import { Container } from "./styles";

const RatingStars = ({ workerId,workerUserId, value = 0, isEditable = false }) => {
  const user = JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  const { accessToken } = user;
  
  const { refreshWorkers } = useWorkers();

  
  const handleRating = (rating) => {
    if (!user?.user.id) {
      toast.error("Faça login para avaliar");
      return 
    }
    if (user.user.id===workerId) {
      toast.error("Você não pode se auto avaliar");
      return 
    }
    
    proWorkingApi
      .get("/ratings", {
        params: {
          workerId,
          userId: user.user.id,
        },
      })
      .then((res) => {
        if (!res.data.length && workerUserId!==user.user.id) {
          proWorkingApi
            .post(
              "/ratings",
              { stars: rating, workerId, userId: user.user.id  },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then(() =>{
              toast.success('Avaliação feita')
              refreshWorkers()
            })
        }else if( workerUserId===user.user.id){
          toast.error('Não se pode auto avaliar')
        } else {
          if(res.data[0].userId!==res.data[0].workerId){

            proWorkingApi
            .patch(
              `/ratings/${+res.data[0].id}`,
              { stars: rating },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then(() =>{
              toast.success('Avaliação feita')
            })
            .then(()=>refreshWorkers())
            .catch(()=>toast.error('É necessário login'));
          }else{
            toast.error('Você não pode se auto avaliar')
          }
        }
        });
      };

  return (
    <Container>
      <Rating
        onChange={(e) =>{
        
           if(Object.keys(user).length!== 0){
             handleRating(+e.target.value)
           } else{
             toast.error('É necessário estar logado!')
           }
        }}
        name="rating-{workerId}"
        defaultValue={value}
        precision={0.5}
        readOnly={!isEditable}
      />
    </Container>
  );
};

export default RatingStars;
