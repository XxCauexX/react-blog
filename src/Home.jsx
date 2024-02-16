import Menu from "./pages/components/Menu.jsx";
import "./pages/styles/Home.css";
import Postagem from "./pages/components/Postagem.jsx";
import Post from "./pages/components/Post.jsx";
import {db} from "./firebase.js";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

 function Home(){
    
    const [posts, setPosts] = useState([]);

    const vai = {};

    const userCollectionRef = collection(db,"Posts")
    
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(userCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
            console.log(posts[0].titulo);
            
        };
        getPosts();
    },[]);

    return <>
        <Menu/>
        
        <div style={containerPost}>
        {posts.map((post) => {
            return (
                <div key={post.id}>
                    <Postagem titulo={post.titulo} conteudo={post.conteudo} />
                </div>
            );
        })}
            
        </div>
    </>
}

const containerPost = {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "5px",
    flexDirection: "row",
    flexWrap: "wrap"
};

export default Home;