import './BoxModel.scss';
import BoxModelImage from './BoxModelImage.png';

function BoxModel() {
    return (
        <>
            <h2>Box Model</h2>
            <div className="container box-model">
                <img src={BoxModelImage} className='box-model-image' alt='Box Model'/>
            </div>
            <div className="demo-properties">
                <div className="demo-property">
                    <h3>OLD Technique</h3>
                    <ul>
                        <li>.popup {"{ top: 0; right:0; bottom:0; left: 0; }"}</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>NEW Technique</h3>
                    <ul>
                        <li>.popup {"{ inset - block - start: 0; inset-block-end: 0; inset-inline-start: 0; inset-inline-end: 0; }"}</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>NEW Technique - Shorthand</h3>
                    <ul>
                        <li>.popup {"{ inset: 0 0 0 0; }"}</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>Margin / Padding / Border</h3>
                    <ul>
                        <li>margin-block-start</li>
                        <li>padding-block-start</li>
                        <li>border-block-start</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>Dimension</h3>
                    <ul>
                        <li>support top to bottom language as Japanese (+ RTL/LTR)</li>
                        <li>width = inline-size</li>
                        <li>height = block-size</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>Text Align</h3>
                    <ul>
                        <li>text-align :left = text-align: start;</li>
                        <li>text-align :right = text-align: end;</li>
                    </ul>
                </div>
            </div>
            <div className="demo-links">
                <a href="https://elad.medium.com/new-css-logical-properties-bc6945311ce7" target="_blank" rel="noreferrer">New CSS Logical Properties!</a>
            </div>
        </>
    );
}

export default BoxModel;