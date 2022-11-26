import React ,{useState , useEffect}from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  // Fetched data from api request
    const [dataP, setdataP] = useState([]);

    // Unique category
    const [unique, setUnique] = useState([]);
  const fData = async()=>{

      const data = await fetch('https://fakestoreapi.com/products')
      const datajson = await data.json()
      const arrayUniqueByKey = [...new Set(datajson.map(item =>{return item.category}))]
      console.log("arrayUniqueByKey",arrayUniqueByKey)
      setUnique(arrayUniqueByKey)

      setdataP(datajson)
      console.log(datajson)
    }
    // Run async function
useEffect(() => {
    fData()
}, []);
// separate element related to its category
var MenCloth = []
var jewelery =[]
var wowMen =[]
var electronics = []
for (let i = 0; i < dataP.length; i++) {
    const element = dataP[i];
   
    if(element.category=== "men's clothing"){
        MenCloth.push(element)

    } else if(element.category=== "jewelery"){
        jewelery.push(element)
    } else if(element.category=== "electronics"){
        electronics.push(element)
    }
     else if(element.category==="women's clothing"){
        wowMen.push(element)
    }

}
// Carousel responsive 
const   responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }
  return (
      <Container className='mt-4 text-center'>
        {(dataP ===[])?<>Loading...</>:<>


<h2 className='text-center'>Our Products</h2>
{/*  Men's Category */}
<h2>{unique[0]}</h2>

    <Carousel responsive={responsive}>
    {MenCloth && MenCloth.map((item,i)=>{

        return <Card style={{ width: '18rem' }} className = "mr-3">
        <Link to ={`/item/${item.id}`} className ="text-decoration-none text-dark">
        <Card.Img variant="top" width={150} height ={245} src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description.substring(0, 200)}...
          </Card.Text>
          <Card.Text>
           <b>Rs. {item.price}</b>
          </Card.Text>
       
        </Card.Body>
          </Link>
      </Card>
  
    })}
</Carousel>
<hr className='bg-slate-600'/>
{/* Jewlery Category */}
<h2>{unique[1]}</h2>
    <Carousel responsive={responsive}>
    {jewelery && jewelery.map((item,i)=>{

        return <Card style={{ width: '18rem' }}>
        <Link to ={`/item/${item.id}`} className ="text-decoration-none text-dark">
        
        <Card.Img variant="top" width={150} height ={245}  src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description.substring(0, 200)}...
          </Card.Text>
          <Card.Text>
           <b>Rs. {item.price}</b>
          </Card.Text>

        </Card.Body>
        </Link>
      </Card>
  
    })}
</Carousel>
{/* electronics Category */}

<h2>{unique[2]}</h2>
    <Carousel responsive={responsive}>
    {electronics && electronics.map((item,i)=>{

        return <Card style={{ width: '18rem' }} className = "m-2">
               <Link to ={`/item/${item.id}`} className ="text-decoration-none text-dark">
        <Card.Img variant="top"width={"40%"} height ={"245%"} src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description.substring(0,200)}...
          </Card.Text>
          <Card.Text>
           <b>Rs. {item.price}</b>
          </Card.Text>
         
        </Card.Body>
        </Link> 
      </Card>
  
    })}
</Carousel>
{/* Women's  Category */}

<h2>{unique[3]}</h2>
    <Carousel responsive={responsive}>
    {wowMen && wowMen.map((item,i)=>{

        return <Card style={{ width: '18rem' }}>
              <Link to ={`/item/${item.id}`} className ="text-decoration-none text-dark">
        <Card.Img variant="top"  width={150} height ={245}  src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description.substring(0,200)}...
          </Card.Text>
          <Card.Text>
           <b>Rs. {item.price}</b>
          </Card.Text>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
        </Link> 
      </Card>
  
    })}
</Carousel>

</>}
    </Container>
  )
}

export default Home