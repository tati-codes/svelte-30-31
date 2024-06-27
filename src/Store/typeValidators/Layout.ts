const layouts = ["CLASSIC", "MODERN"] as const;
export type Layout = (typeof layouts)[number];
const isLayout = (str: any | Layout): str is Layout => str === "CLASSIC" || str === "MODERN";
