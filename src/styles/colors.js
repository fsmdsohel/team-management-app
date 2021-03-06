const ASBESTOS = "#666666";
const MIDNIGHT_BLUE = "#2c3e50";
const EMERALD = "#2ecc71";
const ALIZARIN = "#e74c3c";
const SILVER = "#bdc3c7";

const common = {
  PRIMARY: "#246afd",
  SUCCESS: EMERALD,
  ERROR: ALIZARIN,
};

const light = {
  ...common,
  BACKGROUND: "#fff",
  TEXT: MIDNIGHT_BLUE,
  TEXT_SECONDARY: ASBESTOS,
};

const dark = {
  ...common,
  BACKGROUND: MIDNIGHT_BLUE,
  TEXT: "#fff",
  TEXT_SECONDARY: SILVER,
};

export const colors = {light, dark};
