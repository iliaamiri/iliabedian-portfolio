export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const placeholdersBase64 = {
  green:
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMM2t5RDwAFBgIS0xdMPAAAAABJRU5ErkJggg==',
  darkGreen:
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUDGMwBgABgwCcl+Ti5QAAAABJRU5ErkJggg==',
  faintedWhite:
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+eWjMQAI3wMTcz+rcAAAAABJRU5ErkJggg==',
};
