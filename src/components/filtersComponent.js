import React ,{ useState} from 'react';
import {  Button, Col } from 'reactstrap';

import  { Range } from 'rc-slider';
import Rating   from '../components/rating';

const ObjSearch={color:[],range:[0,1500],rating:''};

const FiltersComponent = (props) => {
  const {Colors, SearchCallBack}=props;

  const [itemRange, setitemRange] = useState([0,1500]);

    
  
    
      const handleChangeColor=(event)=> {
        // Here, we invoke the callback with the new value
       
       if(ObjSearch.color.includes(event.target.value)){
        const index = ObjSearch.color.indexOf(event.target.value);
        if (index > -1) {
            ObjSearch.color.splice(index, 1);
        }
       }else{
        
        ObjSearch.color.push(event.target.value)
       }
       
        
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
        <fieldset className='emptyCardDiv' style={{width:'100%'}}>
            <legend >Filter</legend>
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
           <p>Color</p>
         
           <div className='divContainterColors'>
           
           {
               Colors.map((item)=>{
                   return(
                       <Col style={{display:'block'}}>
                            <input type="checkbox" id={item.color} name="colors" onChange={(e)=>handleChangeColor(e)} value={item.color}/>
                             <label for={item.color}> {item.color}</label><br/>
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
            <Button onClick={()=>handleChangeRating('')}>Clear</Button>

             
              {/* <Col onClick={handleChangeRating(4)} >
                <Rating productrat={4}/><br/>
                
              </Col>
              <Col onClick={handleChangeRating(3)}>
                
                <Rating productrat={3}/><br/>
              
              </Col>
              <Col onClick={handleChangeRating(2)} >
                
                <Rating productrat={2}/><br/>
                
              </Col>
              <Col  onClick={handleChangeRating(1)}>
                
                <Rating productrat={1}/><br/>
              </Col> */}
             </div>
              
              
               
           </div>
        
        </fieldset>
        </div>
        
   
    );
  
}

export default FiltersComponent;
