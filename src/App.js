import {
  Container,
  Stage,
  TilingSprite,
  useTick
} from "@inlet/react-pixi";
import React, { useEffect, useState } from "react";
import RunSprite from "./components/RunSprite";
import useWindowSize from "./hooks/useWindowSize";
import castleBg from "./assets/Castle/castle.png";
import cloudsBg from "./assets/Castle/clouds.png";
import fogBg from "./assets/Castle/fog.png";
import groundBg from "./assets/Castle/ground.png";
import treesBg from "./assets/Castle/trees.png";
import treesShadeNearBg from "./assets/Castle/trees-shade-1.png";
import treesShadeFarBg from "./assets/Castle/trees-shade-2.png";
// import castleFullBg from "./assets/Castle/full.png";
import './App.scss';

const INITIAL_POS = 0;

const App = (props) => {
  const size = useWindowSize();
  const [groundPos, setGroundPos] = useState(INITIAL_POS);
  const [cloudsPos, setCloudsPos] = useState(INITIAL_POS);
  const [treesShadeFarPos, setTreesShadeFarPos] = useState(INITIAL_POS);
  const [fogNearPos, setFogNearPos] = useState(INITIAL_POS);
  const [fogFarPos, setFogFarPos] = useState(INITIAL_POS);
  const [treesShadeNearPos, setTreesShadeNearPos] = useState(INITIAL_POS);
  const [castlePos, setCastlePos] = useState(INITIAL_POS);
  const [treesPos, setTreesPos] = useState(INITIAL_POS);

  useTick(delta => {
    setFogNearPos(fogNearPos - 1.64);
    setTreesPos(treesPos - 0.96);
    setCastlePos(castlePos - 0.128);
    setTreesShadeNearPos(treesShadeNearPos - 0.144);
    setFogFarPos(fogFarPos - 0.164);
    setTreesShadeFarPos(treesShadeFarPos - 0.184);
    setCloudsPos(cloudsPos - 0.0124);
  });

  return (
    <Container>
      <TilingSprite
        image={groundBg}
        tilePosition={{ x: groundPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
      />
      <TilingSprite
        image={cloudsBg}
        tilePosition={{ x: cloudsPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
      />
      <TilingSprite
        image={treesShadeFarBg}
        tilePosition={{ x: treesShadeFarPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
        y={-50}
      />
      <TilingSprite
        image={fogBg}
        tilePosition={{ x: fogFarPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
      />
      <TilingSprite
        image={treesShadeNearBg}
        tilePosition={{ x: treesShadeNearPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
        y={-60}
      />
      {/* <TilingSprite
        image={castleBg}
        tilePosition={{ x: castlePos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
        y={0}
      /> */}
      <RunSprite />
      <TilingSprite
        image={treesBg}
        tilePosition={{ x: treesPos, y: size.height }}
        tileScale={{ x: 1, y: 1 }}
        width={1920}
        height={size.height}
      // y={size.height}
      />
      <TilingSprite
        image={fogBg}
        tilePosition={{ x: fogNearPos, y: size.height }}
        // tileScale={{ x: 0.1, y: 2 }}
        width={1920}
        height={size.height}
      />
    </Container>
  );
}

const PixiApp = () => {
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
        <App />
      </Stage>
    </div>
  );
}

export default PixiApp;
