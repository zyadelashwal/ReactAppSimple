
import React from 'react';
import {  Col ,Row} from 'reactstrap';
import Rating   from './rating';

const ProductCard = (props) => {
  const {Data}=props;

  

    return (
   
                    <Row  className='divContainerCard'>
                        {
                           
                           Data&& Data.map((item,index) =>{
                                return( 
                                <Col xs='4' className='ProductCardDiv' key={item.name+index}>
                                  <a href="#filter" > 
                                       <span className='hvr-growImg'>

                                            <img className='imgProduct' src={item.image} alt="tesT" />
                                    </span>
                                    

                                            <h4>{item.name}</h4>
                                            <Rating  productrat={item.rating}/>
                                            <p><b>{item.currency+" "+item.price}</b></p>
                                    </a>  
                                           
                                    
                                      

                                 </Col> )
                            })
                        }
                           
                    </Row>
   
    );
  
}

export default ProductCard;
