import { useState } from "react";
import Nav from "../../components/nav/Nav"
const Home = () => {
    const [bgHome] = useState(true)

    return (
        <>
            <Nav bgHome={bgHome} />
            <h2>Home Page</h2>
        </>
    );
}

export default Home;