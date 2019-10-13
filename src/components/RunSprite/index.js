import {
  AnimatedSprite,
  Container,
  useTick,
  useApp
} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import React, { useState } from "react";
import controls from "../../config/controls";
import idleWeaponTextures from "../../assets/Adventurer/idle/weapon";
import runTextures from "../../assets/Adventurer/run";
import render from "../../render";
import useWindowSize from "../../hooks/useWindowSize";

let scale = { x: 3.5, y: 3.5 };
let i = 0;
let texture = idleWeaponTextures;

const RunSprite = (props) => {
  const app = useApp();
  const size = useWindowSize();
  const [animation, setAnimation] = useState(idleWeaponTextures);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);


  // custom ticker
  useTick(delta => {
    if (controls.right.isDown) {
      console.log("right down", animation)
      setAnimation(runTextures);
      setX(Math.sin(i) * 100);
      app.render();
    } else if (controls.right.isUp) {
      setAnimation(idleWeaponTextures);
      app.render();
    }

    // i += 0.05 * delta;

    // setX(Math.sin(i) * 100);
    // setY(Math.sin(i / 1.5) * 100);
    // setRotation(rotation + 0.1 * delta);
  });

  return (
    <Container
      position={[size.middleX, size.height - 145]}
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
        textures={animation}
        x={x}
      />
    </Container>
  );
}

export default RunSprite;
