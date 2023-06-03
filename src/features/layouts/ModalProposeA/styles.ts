import styled from "styled-components";

export const ModalProposeStyle = styled.div`
   background-color: var(--white-color);
   padding: 20px;
   width: 100%;
   max-width: 700px;
   border-radius: 8px;
   

   > div:nth-child(1) {

      >div{
         display: flex;
         align-items: center;
         justify-content: space-between;

         > h3 {
            font-size: 26px;
            color: var(--primary-color);
         }

         > button {
         width: 40px;
         height: 40px;
         border: 1px solid var(--primary-color);
         border-radius: 8px;
   
         background-color: transparent;
         color: var(--primary-color);
         font-weight: regular;
         font-size: 24px;
         transition: 1s;
   
         :hover {
           background-color: var(--primary-color);
           color: var(--white-color);
         }

      }
   }
}

   div:nth-child(2){
      margin: 20px 0;
   }

   div:nth-child(3){
      display: flex;
      justify-content: flex-end;
      gap: 10px;

      >button:nth-child(1){
         border: 2px solid var(--primary-color);

         :hover{
            background-color: var(--primary-color);
            color: var(--white-color);
         }
      }

      > button {
         width: 250px;
      }
   }
`