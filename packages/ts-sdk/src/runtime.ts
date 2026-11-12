/**
 * Helpers that work where `process` and `Buffer` may be missing (browsers, edge runtimes).
 */

/** Reads an environment variable. Returns undefined when `process` is not defined. */
export const readEnv = (name: string): string | undefined => {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  return env?.[name];
};

/** Base64 of the UTF-8 bytes of `text`. Uses btoa, not Buffer. */
export const base64Encode = (text: string): string => {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
};
