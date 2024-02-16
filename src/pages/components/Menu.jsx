import Icon from "./assets/icon.png"



function Menu({logo}){
    


    return <>
        <header>
            <div className="menu">
                <div style={icone}>
                   <a href="/" style={{textDecoration: "none", color: "white", textAlign: "center", display: "flex", alignItems: "center"}} ><img src={Icon} style={{width: "50px"}} alt="icon" />   Blog</a> 
                </div> 
                <div>
                <a href="/CriarPost" style={{color: "white", textDecoration: "none"}} >Novo Post</a>
                    <ul style={{listStyle: "none"}}>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </>


}

const icone = {
    display: "flex", 
    alignItems: "center", 
    textAlign: "center", 
    color: "white"
};

export default Menu;