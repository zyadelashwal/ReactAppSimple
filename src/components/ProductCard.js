
import React ,{useState}from 'react';
import { Row ,Col , Dropdown,DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import Rating   from './rating';

const ProductCard = (props) => {
  const {Data,Sort}=props;
  const [SortType , setSortType]=useState("DECS");

  const sortBy=()=>{
    
    
    console.log(SortType)
    if(SortType=="ASC")
    {
      Data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      Data.reverse();
      setSortType("DECS")
    }else{Data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortType("ASC")}

  }

    return (
   
                    <Row  className='divContainerCard'>

                      <Row className="SortDiv"> 
                      <button  className="" onClick={()=>sortBy()}>
                          Sort by Price
                      </button>
                      </Row>
                        {
                           
                           Data&& Data.map((item,index) =>{
                                return( 
                                <Row  className='ProductCardDiv' key={item.title+index}>
                                
                                    <Col xs='4' >

                                      <a href='#image' className='hvr-growImg'>

                                          <img className='imgProduct' src={item.image} alt="tesT" />
                                      </a>
                                    </Col>
                                    <Col xs='8' className="DetailsClass">
                                     
                                            <Row className="DetailsInner">
                                                <p style={{whiteSpace:'nowrap'}}><b>{item.title}</b></p>
                                                
                                                <div>
                                                   <Rating  productrat={parseInt(item.rating.rate)}/> 

                                                   <span className='spanReview'> {item.rating.rate} reviewers</span>
                                                </div>
                                               
                                                
                                            </Row>
                                            
                                            <Row className="DetailsInner-2">
                                                <p>{"$ "+item.price}</p>

                                                <p>{item.description}</p>
                                                <a className="btn">Add To Card</a>
                                               

                                            </Row>
                                      
                                          
                                    </Col>
                                    {/* <Col xs='3' className='DetailsClass price'>
                                   
                                    </Col> */}
                                     
                                    

                                           
                                           
                                     
                                           
                                    
                                      

                                 </Row> )
                            })
                        }
                           
                    </Row>
   
    );
  
}

export default ProductCard;
