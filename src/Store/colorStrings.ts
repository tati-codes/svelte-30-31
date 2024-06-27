import type { Color, cssColor } from "../../types";

type colorStrigns = {
  [key in Color]: cssColor
}

export const colorStrings: colorStrigns = {
  gray: {
    light: "#d0d5db",
    medium: "#9aa3b0",
    dark: "#637383",
  },
  orange: {
    light: "#fdccae",
    medium: "#ef925a",
    dark: "#e15806",
  },
  blue: {
    light: "#abddff",
    medium: "#56a7df",
    dark: "#0071bf",
  },
  green: {
    light: "#e5d8ab",
    medium: "#c0b87f",
    dark: "#9a9753",
  },
  red: {
    light: "#fcb2b6",
    medium: "#ef5e66",
    dark: "#e10915",
  },
  violet: {
    light: "#d7bdff",
    medium: "#b482ff",
    dark: "#9147ff",
  },
  yellow: {
    light: "#f4de9d",
    medium: "#e8c44f",
    dark: "#dcaa00",
  },
  forest: {
    light: "#b6edba",
    medium: "#6dc173",
    dark: "#24942b",
  },
  purple: {
    light: "#efa2e8",
    medium: "#be5eb5",
    dark: "#8c1982",
  },
  pink: {
    light: "#e1c0c9",
    medium: "#cb98a3",
    dark: "#b46f7c",
  },
  aqua: {
    light: "#94ffed",
    medium: "#4ac1ad",
    dark: "#00826c",
  },
};
