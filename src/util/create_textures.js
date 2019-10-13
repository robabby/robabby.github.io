import * as PIXI from "pixi.js";

export default (sprite, json) => {
  const texture = PIXI.BaseTexture.from(sprite);
  const spritesheet = new PIXI.Spritesheet(texture, json);

  let textures = [];

  spritesheet.parse(() => {
    textures = Object.keys(spritesheet.textures).map((t) => spritesheet.textures[t]);
  });

  return textures;
}
