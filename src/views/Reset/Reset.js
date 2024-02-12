import './Reset.scss';

function Reset() {
    return (
        <>
            <h2>Reset</h2>
            <div className="container demo-reset">
                <button className='demo-unset'>all: unset</button>
                <div className='demo-p'>
                    <p className='inherit'>inherit</p>
                    <p className='initial'>initial</p>
                    <p className='unset'>unset</p>
                    <p className='revert'>revert</p>
                    <p>none</p>
                </div>
                <div className='demo-box-sizing demo-box-sizing-border-box'>
                    box-sizing: border-box <br/> (200px)
                </div>
                <div className='demo-box-sizing demo-box-sizing-initial'>
                    box-sizing: initial <br/> (200px + 20px padding)
                </div>
            </div>
            <div className="demo-properties">
                <div className="demo-property">
                    <h3>initial</h3>
                    <ul>
                        <li>Will reset the property back to the spec default</li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>unset</h3>
                    <ul>
                        <li>For a property that is inherited (e.g. color) it means inherit, and for a property that
                            isn’t inherited (e.g. float) it means initial
                        </li>
                    </ul>
                </div>
                <div className="demo-property">
                    <h3>Revert</h3>
                    <ul>
                        <li>For inherited properties, it means inherit. But for non-inherited properties it means to revert to the UA stylesheet
                        </li>
                    </ul>
                </div>
            </div>
            <div className="demo-links">
                <a href="https://elad.medium.com/understanding-the-initial-inherit-and-unset-css-keywords-2d70b7121695"
                   target="_blank" rel="noreferrer">Understanding the “Initial”, “Inherit” and “Unset” CSS Keywords</a>
            </div>
        </>
    );
}

export default Reset;