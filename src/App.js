import {
  AnimatedSprite,
  Container,
  Sprite,
  Stage,
  TilingSprite,
  useTick
} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import characterSprite from "./assets/Adventurer/sheet.png";
import useWindowSize from "./hooks/useWindowSize";
import villageBg from "./assets/Village/full.png";
import './App.scss';

const RUN_IMAGES = [
  "./assets/Adventurer/run/run-00.png",
  "./assets/Adventurer/run/run-01.png",
  "./assets/Adventurer/run/run-02.png",
  "./assets/Adventurer/run/run-03.png",
  "./assets/Adventurer/run/run-04.png",
  "./assets/Adventurer/run/run-05.png"
];

let textureArray = [];

for (let i = 0; i < RUN_IMAGES.length - 1; i++) {
  let texture = PIXI.Texture.from(RUN_IMAGES[i]);
  textureArray.push(texture);
};

let scale = { x: 1, y: 1 };
let i = 0;

const App = (props) => {
  const size = useWindowSize();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  // increment

  // custom ticker
  useTick(delta => {
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(rotation + 0.1 * delta);
  });

  return (
    <Container
      width={size.width}
      height={size.height}
    >
      <Sprite
        image={villageBg}
        width={1920}
        height={size.height}
      />
      <Container position={[size.width / 2, size.height / 2]}>
        {/* <TilingSprite
          anchor={0.5}
          height={37}
          image={characterSprite}
          interactive
          isSprite
          pointerdown={() => {
            console.log('click')
            scale.x *= 1.25;
            scale.y *= 1.25;

            render();
          }}
          rotation={rotation}
          scale={scale}
          tilePosition={{ x: 0, y: 0 }}
          width={50}
          x={x}
          y={y}
        />
        <AnimatedSprite
          anchor={0.5}
          height={37}
          textures={textureArray}
          width={50}
          x={150}
          y={50}
        /> */}
      </Container>
      <Container
        position={[size.width / 2, size.height / 2]}
      >
        {/* <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          anchor={0.5}
          x={x}
          y={y}
          rotation={rotation}
        /> */}
        <AnimatedSprite
          height={37}
          textures={textureArray}
          width={50}
          x={150}
          y={50}
        />
      </Container>
    </Container>
  );
}

const PixiApp = () => {
  const size = useWindowSize();

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
  )
}

const render = () => {
  ReactDOM.render(
    <PixiApp />,
    document.getElementById('root')
  );
}

export default render;
