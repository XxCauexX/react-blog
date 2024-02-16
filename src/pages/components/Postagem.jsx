import ImgPost from "./assets/post.png";

function Postagem( {titulo, conteudo} ){

    return (
        <>
        <a href="/postagem" style={{textDecoration: "none"}}>
            
            <div style={card}>
                <div style={{width: "100%", height: "250px", borderBottom: "2px solid black"}} ><img src={ImgPost} style={{width: "100%", borderRadius: "5px"}} alt="imagem do post" /></div>
                <div>
                    <h1> {titulo} </h1>
                    <p> {conteudo} </p>
                </div>
            </div>
        </a>
            
        </>
    )
}

const corFundo = "#6D39D5";

const card = {
    margin:"20px 5px",
    backgroundColor: "",
    width: "250px",
    height: "400px",
    borderRadius: "5px",
    border: "2px solid black"
}

export default Postagem;