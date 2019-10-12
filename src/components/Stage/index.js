import { Body, Sprite, Stage, TileMap, World } from 'react-game-kit';
import React from "react";
import characterSprite from "../../assets/Adventurer/sheet.png";
import runSprite from "../../assets/Adventurer/run.png";
import villageBg from "../../assets/Village/full.png";
import windowSize from 'react-window-size';

class GameStage extends React.Component {
    render() {
        console.log(this.props, this.context);
        const { windowWidth, windowHeight } = this.props;

        return (
            <Stage width={windowWidth} height={windowHeight}>
                <World>
                    <Body>
                        <TileMap
                            src={villageBg}
                            tileSize={128}
                            columns={24}
                            rows={4}
                            layers={[
                                [
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                ],
                            ]}
                        />
                        <Sprite
                            repeat={false}
                            src={characterSprite}
                            scale={this.context.scale * 2}
                            state={0}
                            steps={[9, 9, 0, 4, 5]}
                        />
                    </Body>
                </World>
            </Stage>
        )
    }
}

export default windowSize(GameStage);