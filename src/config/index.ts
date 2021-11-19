import {join} from "path";
import {loggerConfig} from "./logger";

export const rootDir = join(__dirname, "..");

export const config: Partial<TsED.Configuration> = {
  rootDir,
  logger: loggerConfig,
  // additional shared configuration
};
