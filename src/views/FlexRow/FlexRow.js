import './FlexRow.scss';

function FlexRow() {
  return (
      <>
          <h2>Flex Row</h2>
          <div className="container demo-flex-row">
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__wide-item"></div>
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__item"></div>
              <div className="demo-flex-row__item"></div>
          </div>
          <div className="demo-properties">
              <div className="demo-property">
                  <h3>display</h3>
                  <ul>
                      <li>flex</li>
                      <li>inline-flex</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>flex-direction</h3>
                  <ul>
                      <li>row</li>
                      <li>row-reverse</li>
                      <li>column</li>
                      <li>column-reverse</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>flex-wrap</h3>
                  <ul>
                      <li>nowrap</li>
                      <li>wrap</li>
                      <li>wrap-reverse</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>justify-content (Main axis)</h3>
                  <ul>
                      <li>flex-start</li>
                      <li>flex-end</li>
                      <li>center</li>
                      <li>space-between</li>
                      <li>space-around</li>
                      <li>space-evenly</li>
                      <li>stretch</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>align-items (Cross axis)</h3>
                  <ul>
                      <li>flex-start</li>
                      <li>flex-end</li>
                      <li>center</li>
                      <li>stretch</li>
                      <li>baseline</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>flex-grow</h3>
                  <ul>
                      <li>Defines the ability of flex item to grow (default: 0)</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>flex-shrink</h3>
                  <ul>
                      <li>Defines the ability of flex item to shrink (default: 1)</li>
                  </ul>
              </div>
              <div className="demo-property">
                  <h3>flex-basis</h3>
                  <ul>
                      <li>Defines the default size of an element (default: auto)</li>
                  </ul>
              </div>
          </div>
          <div className="demo-links">
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">A
                  Complete Guide to Flexbox</a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank"
                 rel="noreferrer">MDN Web Docs</a>
              <a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">Flexbox Froggy</a>
              <a href="https://www.flexboxpatterns.com/" target="_blank" rel="noreferrer">Flexbox Patterns</a>
          </div>
      </>
  );
}

export default FlexRow;
