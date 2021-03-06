import joi from 'joi';

export default function validatePayloadAndThrowIfNotValid<T = unknown>(
  schema: joi.Schema,
  payload: unknown
): T {
  const validationResult = schema.validate(payload);
  if (validationResult.error) {
    throw validationResult.error;
  }
  return validationResult.value;
}
