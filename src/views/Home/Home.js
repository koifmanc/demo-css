import './Home.scss'
import CSS from "./css.png";

const Home = () => {
    return (
        <>
            <img src={CSS} className='css-logo' alt='CSS'/>
            <h1>Advanced CSS Techniques</h1>
            <h2>Chen Koifman ☆ 12.02.2024</h2>
        </>
    );
};

export default Home;