import { Link } from "react-router-dom";
import "./nav.css"

const Nav = ({ bgSpeise, bgHome }) => {

    console.log(bgSpeise);
    // abAchtZiehn ? "du darfst rauchen" : "du bist noch jung"

    // 
    return (
        <>
            <nav>

                {/* Hier ist unsere straßenschilder */}
                {/* Anstatt anchor Tag wird hier Link oder NavLink von React-router-dom verwendet */}


                {bgHome ?
                    (<Link to="/"><button className="active">Home</button></Link>)
                    :
                    (<Link to="/"><button>Home</button></Link>)
                }

                {bgSpeise ?
                    (<Link to="/speisekarte"><button className="active">Speisekarte</button></Link>)
                    :
                    (<Link to="/speisekarte"><button>Speisekarte</button></Link>)
                }

                <Link to="/kontakt"><button>Kontakt</button></Link>
                <Link to="/oeffnungszeiten"><button>Öffnungszeiten</button></Link>
                <Link to="/galerie"><button>Galerie</button></Link>



            </nav >
        </>
    );
}

export default Nav;