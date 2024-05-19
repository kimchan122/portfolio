import kaboom from 'kaboom';

const k = kaboom({
    // global: true,
    // fullscreen: true,
    scale: 4,
    background: [0, 0, 0],
    // crisp: true,
});

export const SPEED = 200;
export const SCALE = 2;

export const FLOORLAYOUT = [
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    "000000000000000000000000000000",
    "000000000001111111111111110000",
    "000000011111111111111111110000",
    "000111111111111111111111110000",
    "000111111111111111111111110000",
    "000000011111111111111111110000",
    "000000000001111111111111110000",
    "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
];

export const MAPLAYOUT = [
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    "0000000000lbbbbbbbbbbbbbbbc000",
    "000000lbbbh000000000000000e000",
    "00abbbh0000000000000000000e000",
    "00d00000000000000000000000e000",
    "00d00000000000000000000000e000",
    "00fgggc0000000000000000000e000",
    "000000ngggc000000000000000e000",
    "0000000000ngggggggggggggggh000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
    // "000000000000000000000000000000",
];

export default k;