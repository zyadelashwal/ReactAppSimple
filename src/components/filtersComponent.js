import React ,{ useState} from 'react';
import {  Button, Col } from 'reactstrap';

import  { Range } from 'rc-slider';
import Rating   from '../components/rating';

const ObjSearch={category:[],range:[0,1500],rating:''};

const FiltersComponent = (props) => {
  const {Categorys, SearchCallBack}=props;

  const [itemRange, setitemRange] = useState([0,1500]);

    
  
    
      const handleChangecategory=(event)=> {
        // Here, we invoke the callback with the new value
       
       if(ObjSearch.category.includes(event.target.value)){
        const index = ObjSearch.category.indexOf(event.target.value);
        if (index > -1) {
            ObjSearch.category.splice(index, 1);
        }
       }else{
        
        ObjSearch.category.push(event.target.value)
       }
       SearchCallBack(ObjSearch);
        
    }

    
    const handleChangeRange=(event)=> {
        // Here, we invoke the callback with the new value
        setitemRange(event);
        ObjSearch.range=event;
        SearchCallBack(ObjSearch);
        
    }

    const handleChangeRating=(event)=> {
        // Here, we invoke the callback with the new value
        
        ObjSearch.rating=event;
        SearchCallBack(ObjSearch);
    }
    
   
    return (
   
        <div >
        <div className='emptyCardDiv' style={{width:'100%'}}>
           
           <div className='filter'>
           <p>Price range</p>
           <div>
                 <input type="text" style={{width:'100%'}} id="from" name="PriceRange" value={"From ($) "+itemRange[0]} readonly/>
                  &nbsp;&nbsp; 
                 <input type="text" id="to" style={{width:'100%'}} name="PriceRange" value={"To ($) "+itemRange[1]} readonly/>
                <br/>

           </div>
               <Range style={{padding:'20px 0px 0px 0px'}} defaultValue={[0,1500]} min={0} max={1500} onChange={(e)=>handleChangeRange(e)} />
           </div>
           <div className='filter'>
           <p>category</p>
         
           <div className='divContainterColors'>
           
           {
               Categorys.map((item)=>{
                   return(
                       <Col style={{display:'block'}}>
                            <input type="checkbox" id={item} name="categorys" onChange={(e)=>handleChangecategory(e)} value={item}/>
                             <label for={item}> {item}</label><br/>
                       </Col>

                   )
               })
           }
      </div>
        
           </div>
           <div className='filter'>
             <p>Average rating</p>
             <div className='divContainterRating'>
            {
                ["5",'4','3','2','1'].map((item)=>{
                    return(
                            <a href="#filter" onClick={()=>handleChangeRating(item)} key={item}>
                                <Col  >
                                    <Rating  productrat={item}/><br/>
                                
                                </Col>
                            </a>

                    )
                })
            }
            {/* <a  href="#filter" className="btn" onClick={()=>handleChangeRating('')}>Clear</a> */}

              
           
             </div>
              
              
               
           </div>
        
        </div>
        </div>
        
   
    );
  
}

export default FiltersComponent;
