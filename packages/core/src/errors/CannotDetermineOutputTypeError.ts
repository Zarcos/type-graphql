import {
  PropertyMetadata,
  TargetMetadata,
} from "@src/metadata/storage/definitions/common";
import { BuiltTypeMetadata } from "@src/metadata/builder/definitions/common";
import CannotDetermineTypeError from "@src/errors/CannotDetermineTypeError";

export default class CannotDetermineOutputTypeError extends CannotDetermineTypeError {
  constructor(metadata: TargetMetadata & PropertyMetadata & BuiltTypeMetadata) {
    super("output", metadata);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
