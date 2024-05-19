import React, { useEffect, useState } from 'react';
import k, { FLOORLAYOUT, MAPLAYOUT, SCALE, SPEED } from "../utils/kaboomConfig";

const GameComponent = () => {

    useEffect(() => {
        k.loadSpriteAtlas("/assets/spritesheet4.png", {
            "void": { x: 0, y: 16, width: 16, height: 16, },
            "floor": { x: 16, y: 64, width: 16, height: 16, },
            "wall_left_top": { x: 0, y: 48, width: 16, height: 16, },
            "wall_top": { x: 16, y: 48, width: 16, height: 16, },
            "wall_right_top": { x: 32, y: 48, width: 16, height: 16, },
            "wall_left": { x: 0, y: 64, width: 16, height: 16, },
            "wall_right": { x: 32, y: 64, width: 16, height: 16, },
            "wall_left_bottom": { x: 0, y: 80, width: 16, height: 16, },
            "wall_bottom": { x: 16, y: 80, width: 16, height: 16, },
            "wall_right_bottom": { x: 32, y: 80, width: 16, height: 16, },
            "void_wall_left_and_bottom": { x: 0, y: 96, width: 16, height: 16, },
            "void_wall_bottom": { x: 16, y: 96, width: 16, height: 16, },
            "void_wall_right_and_bottom": { x: 32, y: 96, width: 16, height: 16, },
            "void_wall_right": { x: 0, y: 112, width: 16, height: 16, },
            "void_wall_left": { x: 16, y: 112, width: 16, height: 16, },
            "void_pillar_right": { x: 32, y: 112, width: 16, height: 16, },
            "void_pillar_left": { x: 48, y: 112, width: 16, height: 16, },
            "player": {
                sliceX: 4, sliceY: 4, x: 48, y: 0, width: 64, height: 64,
                anims: {
                    idleleft: { from: 4, to: 4, speed: 1, loop: false, },
                    walkleft: { from: 4, to: 7, speed: 6, loop: true, },
                    idleright: { from: 12, to: 12, speed: 1, loop: false, },
                    walkright: { from: 12, to: 15, speed: 6, loop: true, },
                    idleup: { from: 8, to: 8, speed: 1, loop: false, },
                    walkup: { from: 8, to: 11, speed: 6, loop: true, },
                    idledown: { from: 0, to: 0, speed: 1, loop: false, },
                    walkdown: { from: 0, to: 3, speed: 6, loop: true, },
                },
            }
        });

        k.scene("game", () => {
            k.addLevel(FLOORLAYOUT, {
                tileWidth: 16 * SCALE,
                tileHeight: 16 * SCALE,
                tiles: {
                    "1": () => [
                        k.sprite("floor"),
                        k.scale(SCALE),
                        k.offscreen({ hide: true, pause: false })
                    ],
                }
            });
            k.addLevel(MAPLAYOUT, {
                tileWidth: 16 * SCALE,
                tileHeight: 16 * SCALE,
                tiles: {
                    "0": () => [
                        k.sprite("void"),
                        k.scale(SCALE),
                    ],
                    "a": () => [
                        k.sprite("wall_left_top"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "b": () => [
                        k.sprite("wall_top"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "c": () => [
                        k.sprite("wall_right_top"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "d": () => [
                        k.sprite("wall_left"),
                        k.area({ shape: new Rect(vec2(0, 0), 2, 16) }),
                        body({ isStatic: true }),
                        tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "e": () => [
                        k.sprite("wall_right"),
                        k.area({ shape: new Rect(vec2(14, 0), 2, 16) }),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "f": () => [
                        k.sprite("wall_left_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "g": () => [
                        k.sprite("wall_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "h": () => [
                        k.sprite("wall_right_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "i": () => [
                        k.sprite("void_wall_left_and_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "j": () => [
                        k.sprite("void_wall_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "k": () => [
                        k.sprite("void_wall_right_and_bottom"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "l": () => [
                        k.sprite("void_wall_right"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "m": () => [
                        k.sprite("void_wall_left"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "n": () => [
                        k.sprite("void_pillar_right"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                    "o": () => [
                        k.sprite("void_pillar_left"),
                        k.area(),
                        k.body({ isStatic: true }),
                        k.tile({ isObstacle: true }),
                        k.scale(SCALE),
                    ],
                },
            });

            const player = k.add([
                k.sprite("player", { anim: "idledown" }),
                k.area(),
                k.body(),
                k.anchor("center"),
                k.tile(),
                k.pos(64 * SCALE, 64 * SCALE),
                k.scale(SCALE),
            ]);

            player.onUpdate(() => {
                k.camPos(player.pos);
            });

            const movePlayer = (dx, dy) => {
                const { x, y } = player.pos;
                const { vecx, vecy } = (() => {
                    const tempx = dx / SPEED;
                    const tempy = dy / SPEED;
                    return { vecx: tempx, vecy: tempy };
                })();
                const directionTile = (() => {
                    if (vecx < 0 || vecy < 0) {
                        return MAPLAYOUT[Math.floor(((y + vecy) / 16 + vecy) / SCALE)][Math.floor(((x + vecx) / 16 + vecx) / SCALE)]
                    } else {
                        return MAPLAYOUT[Math.floor((y / 16 + vecy) / SCALE)][Math.floor((x / 16 + vecx) / SCALE)];
                    }
                })();
                // console.log(`${x % 16}`, y);
                // console.log(directionTile);
                if (directionTile === "0" || directionTile === "d" || directionTile === "e") {
                    if (directionTile === "d" && x % 16 === 4 && dx < 0) {
                        return false;
                    } else if (directionTile === "e" && x % 16 === 12 && dx > 0) {
                        return false;
                    } else return true;
                } else {
                    return false;
                }
            };

            const setWalkAnimation = (walkDirection) => {
                if ((player.curAnim() !== walkDirection) && (walkDirection !== "idle")) {
                    player.play(walkDirection);
                }
            };

            ;["left", "right", "up", "down"].forEach((direction) => {
                onKeyDown(direction, () => {
                    if (movePlayer(direction === "left" ? -SPEED : direction === "right" ? SPEED : 0, direction === "up" ? -SPEED : direction === "down" ? SPEED : 0)) {
                        player.move(direction === "left" ? -SPEED : direction === "right" ? SPEED : 0, direction === "up" ? -SPEED : direction === "down" ? SPEED : 0);
                    }
                    setWalkAnimation(`walk${direction}`);
                })
            });


            k.onKeyRelease("left", () => {
                player.play("idleleft");
            });
            k.onKeyRelease("right", () => {
                player.play("idleright");
            });
            k.onKeyRelease("up", () => {
                player.play("idleup");
            });
            k.onKeyRelease("down", () => {
                player.play("idledown");
            });
        });

        k.go("game");
    }, []);

    return <div id="game-container" />;
};

export default GameComponent;
