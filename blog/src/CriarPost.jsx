import Menu from "./pages/components/Menu.jsx";

function CriarPost(){

    
    return (
        <>
            <Menu/>
            <main>
                <div >
                    <form style={{display: "flex"}}>           
                        <input type="text" name="titulo" placeholder="Informe o titulo do post" />
                        <textarea name="conteudo" placeholder="informe o conteudo do post" id="" cols="30" rows="1"></textarea>
                        <button>Adicionar Post</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CriarPost;