import { Button } from "../../../components/Buttons"
import { ModalStyled } from "../../../components/Modal/styles"
import { Transition } from "../../../components/Transition";
import { IProposals } from "../../interfaces/context";
import { api } from "../../services/axios";
import { ModalProposeStyle } from "../ModalProposeA/styles"


interface IModalProps {
   setShowModal : React.Dispatch<React.SetStateAction<boolean>>;
   showModal : boolean;
   selectProposal: IProposals;
   getMyProposals : () => void;
}

interface IEditPropose {
   is_active : string;
}

export const ModalProposeA = ({setShowModal,showModal,selectProposal,getMyProposals}:IModalProps) => {
   const editPropose = async (data:IEditPropose) => {  
      try {
         await api.patch(`/proposals/${selectProposal.id}`,data)
         getMyProposals()
         setShowModal(!showModal)
      } catch (error) {
         console.error(error) 
      } 
   }
   
   return (
      <ModalStyled>
         <Transition>
         <ModalProposeStyle>
            <div>
               <div>
                  <h3>{selectProposal.title}</h3>
                  <button onClick={()=> setShowModal(!showModal)}>X</button>
               </div>
               <p>{selectProposal.description}</p>
            </div>
            <div>
               <h3>Contato do contratante</h3>
               <p><span>{selectProposal.user.contact}</span></p>
            </div>
            <div>
               {  selectProposal.is_active === "Enviado" &&
               (   
               <>
                  <Button type="button" variant="secondary" onClick={()=> editPropose({is_active:"Recusado"})}>Recusar</Button>
                  <Button type="button" variant="primary" onClick={()=> editPropose({is_active:"Em andamento"})}>Aceitar</Button>
               </>   
               
               )
               }
            </div>
         </ModalProposeStyle>
         </Transition>
      </ModalStyled>
   )
}