import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
      "<rootDir>/src/__test__/__mocks__/fileMock.ts",
    "^~/(.*)": "<rootDir>/src/$1",
    "@mui/system/(.*)": "<rootDir>/node_modules/@mui/system/$1",
  },

  resolver: undefined,
};

export default config;
