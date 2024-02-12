import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import FlexRow from "./views/FlexRow/FlexRow";
import FlexColumn from "./views/FlexColumn/FlexColumn";
import Grid from "./views/Grid/Grid";
import ClipPath from "./views/ClipPath/ClipPath";
import Reset from "./views/Reset/Reset";
import BoxModel from "./views/BoxModel/BoxModel";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="flex-row" element={<FlexRow />} />
            <Route path="flex-column" element={<FlexColumn />} />
            <Route path="grid" element={<Grid />} />
            <Route path="clip-path" element={<ClipPath />} />
            <Route path="reset" element={<Reset />} />
            <Route path="box-model" element={<BoxModel />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
