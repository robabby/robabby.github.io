/*
// Usage:
let keyObject = keyboard(keyValue);

keyObject.press = () => {
  // key object pressed
};
keyObject.release = () => {
  // key object released
};

// Keyboard objects also have /isDown/ and /isUp/ Boolean properties that you can use to check the state of each key.
// Don't forget to remove event listeners by using the unsubscribe method:

keyObject.unsubscribe();

Dictionary of key values:
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
https://keycode.info/
*/

export default (value) => {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  //The `downHandler`
  key.downHandler = event => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  //Attach event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);

  window.addEventListener(
    "keydown", downListener, false
  );
  window.addEventListener(
    "keyup", upListener, false
  );

  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };

  return key;
};
