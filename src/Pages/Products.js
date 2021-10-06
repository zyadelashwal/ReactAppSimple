import React, { Fragment, useEffect ,useState } from 'react';
import { Container, Row, Col,Spinner } from 'reactstrap';

// ** Store & Actions
import { fetchCategory } from '../redux/actions/Category.action'
import {fetchProduct} from '../redux/actions/Products.action';
import { useDispatch, useSelector } from 'react-redux'

// import CategoriesComponent from '../components/Categories';
import ProductCard from '../components/ProductCard';
import FiltersComponent from '../components/filtersComponent';

/* eslint-disable */

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}


const Products = (props) => {
    const dispatch = useDispatch();

    const [filterProduct, setFilterProduct]=useState([]);
    const [filterProductByCate, setFilterProductByCate]=useState([])
    
     const CategoriesData = useSelector(state => state.Category.Categories);
    const ProductsData = useSelector(state => state.Products.Products);

    useEffect(() => {
          dispatch( fetchCategory());
         dispatch( fetchProduct());
      },[])
     
    
      const Colors=getUniqueListBy(ProductsData,'color')
     


      useEffect(() => {
        
        //  let filterData=ProductsData.length>0?ProductsData.filter(product => product.categoryId===CategorySelect):[]
        
        setFilterProduct(ProductsData)        
         setFilterProductByCate(ProductsData)
     },[ProductsData])

     const srch=(SearchObj) => {
      console.log(SearchObj)
          let filterData=filterProductByCate.filter(product => {
            if((SearchObj.category.length==0)&&(SearchObj.rating==''))
          return  (SearchObj.range[0] <= product.price&&product.price <= SearchObj.range[1])
          else if(SearchObj.rating=='')
          return (SearchObj.category.includes(product.category) )  && (SearchObj.range[0] <= product.price&&product.price <= SearchObj.range[1])
          else if(SearchObj.category.length==0)
          return (SearchObj.rating==product.rating)  && (SearchObj.range[0] <= product.price&&product.price <= SearchObj.range[1])
          else
          return  (SearchObj.category.includes(product.category) )  &&  (SearchObj.rating==product.rating)  &&(SearchObj.range[0] <= product.price&&product.price <= SearchObj.range[1])
          })

     setFilterProduct(filterData)        
     
     
  }
     
 
    return (
        <Fragment>
             <Container style={{display: 'block',}} class='ContainerStyle'>
    
    
      <Row>
       
        <Col  >
            <Row>
                {/* <CategoriesComponent Data={CategoriesData} CategoriesSearch={setCategorySelect}/> */}
            </Row>
         
        </Col>
       
      </Row>
      <Row style={{margin:'10px 30px'}}>
        <Col xs='4' >
            <FiltersComponent Categorys={CategoriesData} SearchCallBack={srch}/>
        </Col>
        <Col xs='8'  >
           
     
            <Row>
               {filterProduct.length>0? <ProductCard Data={filterProduct} /> : <div style={{width:'900px'}} className='emptyCardDiv'>
               <Spinner size="lg"  type="grow" color="primary" /><br/>
              
               </div>}
            </Row>
        </Col>
       
      </Row>
     
    </Container>
  
        </Fragment>
         );
  
}

export default Products;
