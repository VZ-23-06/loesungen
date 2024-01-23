import { useState } from "react";
import Nav from "../../components/nav/Nav";

const SpeiseKarte = () => {

    const [bgSpeise, setBgSpeise] = useState(true)
    
    const bgSpeiseVariable = true

    return (<>
        <Nav bgSpeise={bgSpeise} />
        <h2>Speisekarte</h2>
    </>);
}

export default SpeiseKarte;