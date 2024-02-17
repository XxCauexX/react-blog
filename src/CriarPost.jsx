import Menu from "./pages/components/Menu.jsx";
import {db} from "./firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { useState } from 'react'

function CriarPost(){
    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const userCollectionRef = collection(db, "Posts");

    async function criarPost(form){
        form.preventDefault();
        console.log(titulo, conteudo)
        const post = await addDoc(userCollectionRef, {
            titulo,
            conteudo,
        });
        form.reset();
    }
    
    return (
        <>
            <Menu/>
            <main style={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection: "row"}}>
                <div >
                    <form onSubmit={criarPost} style={{display: "flex", flexWrap: "wrap"}}>          
                    <div>
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} name="titulo" placeholder="Informe o titulo do post" />    
                    </div> 
                    <div>
                    <textarea name="conteudo" value={conteudo} onChange={(e) => setConteudo(e.target.value)} placeholder="informe o conteudo do post" id="" cols="30" rows="1"></textarea>
                    </div>
                        
                        <button >Adicionar Post</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CriarPost;