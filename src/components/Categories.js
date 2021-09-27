import React from 'react';
import {  Row } from 'reactstrap';

const Categories = (props) => {
  const {Data,CategoriesSearch}=props;

  

    return (
   
                    <Row>
                        {
                           
                           Data&& Data.map((item) =>{
                                return( 
                                <div className=' hvr-pulse CategoryDiv' key={item.name}>
                                    <a href="javascript:void(0)" onClick={()=>CategoriesSearch(item.id)}>
                                            <img className='imgCategory' src={item.image} alt="tes" />
                                            <h4>{item.name}</h4>
                                    </a>
                                      

                                 </div> )
                            })
                        }
                           
                    </Row>
   
    );
  
}

export default Categories;
