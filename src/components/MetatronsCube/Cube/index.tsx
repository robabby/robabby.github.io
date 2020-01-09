// Import External Dependencies
import React from "react"

// Load Styling
import "./styles.scss"

export default class Cube extends React.Component<any> {
  static defaultProps = {
    hover: false,
    theme: "dark",
    depth: 30,
    repeatDelay: 1000
  }

  state = {
    x: 0,
    y: 0,
    z: 0,
    iteration: 0
  }

  container = React.createRef()

  render() {
    const { x, y, z } = this.state
    const { theme, depth, className = "" } = this.props

    return (
      <div
        className={`cube__container ${className}`}
        style={{
          width: `${depth * 1.5}px`,
          height: `${depth * 1.5}px`,
          paddingLeft: `${depth / 1.7}px`
        }}
      >
        <span
          ref={this.container}
          className={`cube cube--${theme}`}
          style={{
            width: `${depth}px`,
            paddingBottom: `${depth * 0.5}px`
          }}
        >
          <figure
            className="cube__outer"
            style={{
              width: `${depth}px`,
              height: `${depth}px`,
              transform: `translateX(-50%)
            scale3d(1,1,1)
            rotateX(${x}deg)
            rotateY(${y}deg)
            rotateZ(${z}deg)`
            }}
          >
            {this._getFaces("outer")}
          </figure>
          <figure
            className="cube__inner"
            style={{
              width: `${depth}px`,
              height: `${depth}px`,
              transform: `translateX(-50%)
            scale3d(0.5,0.5,0.5)
            rotateX(${-x}deg)
            rotateY(${-y}deg)
            rotateZ(${-z}deg)`
            }}
          >
            {this._getFaces("inner")}
          </figure>
        </span>
      </div>
    )
  }

  componentDidMount() {
    const { hover, continuous, repeatDelay } = this.props

    if (hover) {
      this.container.addEventListener("mouseenter", this._spin)
      this.container.addEventListener("mouseleave", this._reset)
    } else if (continuous) {
      let degrees = 0
      const axis = "y"

      const animation = () => {
        const obj = {}
        obj[axis] = degrees += 90
        this.setState({ ...obj, iteration: (this.state.iteration + 1) % 4 })
        tick()
      }

      const tick = () =>
        setTimeout(() => requestAnimationFrame(animation), repeatDelay)

      this._timeout = tick()
    }
  }

  componentWillUnmount() {
    const { hover, continuous } = this.props

    if (hover) {
      this.container.removeEventListener("mouseenter", this._spin)
      this.container.removeEventListener("mouseleave", this._reset)
    } else if (continuous) {
      clearTimeout(this._timeout)
    }
  }

  /**
   * Get all faces for a cube
   *
   * @param {'inner' | 'outer' } type
   * @return {array} - An array of nodes
   */
  _getFaces(type) {
    const { iteration } = this.state

    // Keep the thicker border on
    // the outside on each iteration
    const borderWidthMap = {
      0: {
        left: [1, 1, 1, 6],
        right: [6, 1, 1, 1],
        top: [1, 1, 1, 1],
        bottom: [6, 1, 1, 6]
      },
      1: {
        left: [1, 1, 1, 1],
        right: [1, 1, 1, 1],
        top: [1, 1, 1, 1],
        bottom: [1, 1, 1, 1]
      },
      2: {
        left: [1, 1, 6, 6],
        right: [6, 6, 1, 1],
        top: [6, 1, 1, 6],
        bottom: [1, 6, 6, 1]
      },
      3: {
        left: [6, 1, 1, 1],
        right: [1, 6, 1, 1],
        top: [1, 1, 1, 1],
        bottom: [6, 6, 1, 1]
      },
      4: {
        left: [1, 1, 6, 1],
        right: [1, 1, 1, 6],
        top: [1, 1, 1, 1],
        bottom: [1, 1, 6, 6]
      },
      5: {
        left: [1, 6, 1, 1],
        right: [1, 1, 6, 1],
        top: [1, 1, 1, 1],
        bottom: [1, 6, 6, 1]
      }
    }

    return [
      "rotateX(0deg)",
      "rotateX(-90deg)",
      "rotateX(90deg)",
      "rotateY(-90deg)",
      "rotateY(90deg)",
      "rotateY(180deg)"
    ].map((rotation, i) => {
      const borderStyles =
        type === "outer"
          ? {
              borderTopWidth: borderWidthMap[i].top[iteration],
              borderRightWidth: borderWidthMap[i].right[iteration],
              borderBottomWidth: borderWidthMap[i].bottom[iteration],
              borderLeftWidth: borderWidthMap[i].left[iteration]
            }
          : {}

      return (
        <section
          key={i}
          className="cube__face"
          style={{
            transform: `${rotation} translateZ(${this.props.depth / 2}px)`,
            ...borderStyles
          }}
        />
      )
    })
  }

  /**
   * Get a random axis
   *
   * @return {string} - A random axis (i.e. x, y, or z)
   */
  _getRandomAxis() {
    const axes = Object.keys(this.state)

    return axes[Math.floor(Math.random() * axes.length)]
  }

  /**
   * Spin the cubes in opposite directions semi-randomly
   *
   * @param {object} e - Native event
   */
  _spin = e => {
    const obj = {}
    const axis = this._getRandomAxis()
    const sign = Math.random() < 0.5 ? -1 : 1

    obj[axis] = sign * 90

    this.setState(obj)
  }

  /**
   * Rotate the cubes back to their original position
   *
   * @param {object} e - Native event
   */
  _reset = e => {
    this.setState({
      x: 0,
      y: 0,
      z: 0
    })
  }
}
