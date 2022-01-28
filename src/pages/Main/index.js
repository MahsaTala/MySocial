import React, { useEffect, useState } from 'react'
import { Container ,Col,Row} from 'reactstrap'
import { supabase } from '../../config/supabaseClient'
import PostCard from './components/PostCard'
import styles from "./Main.module.css"


const Main = () => {
    const[lastPosts,setLastPosts]=useState([]);
    useEffect(()=>{
        const getData = async() => {
            const { data, error } = await supabase.from('posts').select()
            console.log(data);
            setLastPosts(data);

        }
        getData();
    }, [])    
    return (
        <>
         <Container fluid>
             <Row>
                 <Col>
                 <div className={`${styles.header}`}>MySocial</div>
                 </Col>
             </Row>
             </Container>
             <Container>
             <Row>
             <Col
               md={{
                  offset: 3,
                  size: 6
               }}
              sm="12"
               >
                   {lastPosts.map((post) => (
                       <PostCard postData ={post} />
                   ))}
             </Col>
             </Row>
             </Container>
    
        </>
    )
}

export default Main
