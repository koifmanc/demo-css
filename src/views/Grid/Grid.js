import './Grid.scss';

function Grid() {
    return (
        <>
            <h2>Flex Row</h2>
            <div className="container demo-grid">
                <div className="demo-grid__item demo-grid__item-header"></div>
                <div className="demo-grid__item demo-grid__item-sidebar"></div>
                <div className="demo-grid__item demo-grid__item-main"></div>
                <div className="demo-grid__item demo-grid__item-footer"></div>
            </div>
            <div className="demo-properties">
                <div className="demo-property">
                    <h3>display</h3>
                    <ul>
                        <li>grid</li>
                        <li>inline-grid</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>grid-template-rows</h3>
                </div>
                <div className="demo-property">
                    <h3>grid-template-columns</h3>
                </div>
                <div className="demo-property">
                    <h3>grid-template-areas</h3>
                </div>
                <div className="demo-property">
                    <h3>justify-items</h3>
                    <ul>
                        <li>start</li>
                        <li>end</li>
                        <li>center</li>
                        <li>stretch</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>align-items</h3>
                    <ul>
                        <li>start</li>
                        <li>end</li>
                        <li>center</li>
                        <li>stretch</li>
                        <li>baseline</li>
                    </ul>
                </div>
            </div>
            <div className="demo-links">
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noreferrer">A
                    Complete Guide to CSS Grid</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid" target="_blank"
                   rel="noreferrer">MDN Web Docs</a>
                <a href="https://cssgridgarden.com/" target="_blank" rel="noreferrer">Grid Garden</a>
                <a href="https://gridbyexample.com/examples/" target="_blank" rel="noreferrer">Grid by Example</a>
            </div>
        </>
    );
}

export default Grid;
