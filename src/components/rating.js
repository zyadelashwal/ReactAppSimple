import { AiFillStar , AiOutlineStar } from 'react-icons/ai';

 const Rating=(props)=>
{
  let {productrat}=props;
   let rat=[];  
   productrat = (!productrat||productrat===0)?5:productrat;
   let i = 1;
   while (i <= 5) {
         if(i<=productrat)
         {
               rat.push(<AiFillStar style={{color:'yellow'}} />);
         }
         else
         {
               rat.push(<AiOutlineStar style={{color:'yellow'}}/>);
         }
         i += 1;
   }
   return rat;
}
export default Rating