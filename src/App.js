import {
  Container,
  Sprite,
  Stage
} from "@inlet/react-pixi";
import React, { useEffect } from "react";
import RunSprite from "./components/RunSprite";
import useWindowSize from "./hooks/useWindowSize";
import villageBg from "./assets/Castle/full.png";
import './App.scss';

const App = (props) => {
  const size = useWindowSize();

  useEffect(() => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <div className="App">
      <Stage
        width={size.width}
        height={size.height}
        options={{
          backgroundColor: 0x07ff9c,
          antialias: true,
          roundPixel: true,
        }}
      >
        <Container>
          <Sprite
            image={villageBg}
            width={1920}
            height={size.height}
          />
          <RunSprite />
        </Container>
      </Stage>
    </div>
  );
}

export default App;
