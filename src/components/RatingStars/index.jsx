import { Rating } from "@mui/material";
import { toast } from "react-toastify";
import { useWorkers } from "../../providers/workers";
import { proWorkingApi } from "../../services/api";
import { Container } from "./styles";

const RatingStars = ({ workerId, value = 0, isEditable = false }) => {
  const user = JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  //const token = localStorage.getItem("@ProWorking:token");
  const { accessToken } = user;
  
  const { refreshWorkers } = useWorkers();
  const {workers} = useWorkers() 

  const workerProfile = workers.find(worker=>worker.userId===user.user.id)

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
          userId: user.id,
        },
      })
      .then((res) => {
        //console.log('userId: ',user.user.id)

        console.log(res.data)
        console.log(workers)
        //console.log(workerProfile)
        console.log('id: ',workerProfile.id )
        console.log('userId: ',user.user.id )
        console.log('workerId: ',workerId )
        //console.log(accessToken)
      

        if (!res.data.some(elem=>elem.userId===user.user.id)) {
          proWorkingApi
            .post(
              "/ratings",
              { stars: rating, workerId, userId: user.user.id ,id:workerProfile.id },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then(() =>{
              toast.success('Avaliação feita')
              refreshWorkers()
            })//.catch((err)=>console.log(err));
        } else {
          proWorkingApi
            .patch(
              `/ratings/${workerProfile.id}`,
              { stars: rating },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then(() =>{
              toast.success('Revaliação feita')
              refreshWorkers()
            }).catch(()=>toast.error('É necessário login'));
        }
      });
  };

  return (
    <Container>
      <Rating
        onChange={(e) => handleRating(+e.target.value)}
        name="rating-{workerId}"
        defaultValue={value}
        precision={0.5}
        readOnly={!isEditable}
      />
    </Container>
  );
};

export default RatingStars;
