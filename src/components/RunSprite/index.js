import {
  AnimatedSprite,
  Container,
  useTick
} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import React, { useState } from "react";
import runSprite from "../../assets/Adventurer/run/spritesheet.png";
import runSpriteJson from "../../assets/Adventurer/run/spritesheet.json";
import render from "../../render";
import useWindowSize from "../../hooks/useWindowSize";

// create a base texture from the data-uri that webpack gives you
const baseTexture = PIXI.BaseTexture.from(runSprite);
// use the JS Object that webpack parsed from the json file to create a spritesheet
const spritesheet = new PIXI.Spritesheet(baseTexture, runSpriteJson);

let runTextures = [];

// parse the object data and the base texture to create textures for each frame
spritesheet.parse(() => {
  // `spritesheet.textures` now has a texture for each frame, but in an object keyed
  // by the name of the frame. This transforms that object into an array of frames so
  // we can pass it directly into an animated sprite
  runTextures = Object.keys(spritesheet.textures).map((t) => spritesheet.textures[t]);

});

console.log(runTextures);

let scale = { x: 3, y: 3 };
let i = 0;

const RunSprite = (props) => {
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
      position={[size.width / 2, size.height / 2]}
    >
      <AnimatedSprite
        animationSpeed={0.1}
        anchor={0.5}
        interactive
        click={() => {
          console.log('click')
          scale.x *= 1.25;
          scale.y *= 1.25;

          render();
        }}
        rightclick={(e) => {
          console.log('rightclick', e)
          scale.x *= 0.75;
          scale.y *= 0.75;

          render();
        }}
        scale={scale}
        textures={runTextures}
      // x={-150}
      // y={-150}
      // rotation={rotation}
      // x={x}
      // y={y}
      />
    </Container>
  );
}

export default RunSprite;
