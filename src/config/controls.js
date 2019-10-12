import keyboard from "../util/keyboard";

const controls = {
  left: keyboard("ArrowLeft") || keyboard("a"),
  up: keyboard("ArrowUp") || keyboard("w"),
  right: keyboard("ArrowRight") || keyboard("d"),
  down: keyboard("ArrowDown") || keyboard("s"),
  jump: keyboard(" ")
}

export default controls;
