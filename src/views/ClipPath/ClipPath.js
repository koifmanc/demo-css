import "./ClipPath.scss";
import ClipPathImage from './clip-path-image.jpg';

function ClipPath() {
    return (
        <>
            <h2>Flex Row</h2>
            <div className="container demo-clip-path">
                <img src={ClipPathImage} className='demo-clip-path-image' alt='Clip Path'/>
            </div>
            <div className="demo-links">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path" target="_blank" rel="noreferrer">MDN Web Docs</a>
                <a href="https://bennettfeely.com/clippy/" target="_blank" rel="noreferrer">Clippy - CSS clip-path maker</a>
            </div>
        </>
    );
}

export default ClipPath;