/** Capitalize the first letter of a string
 *
 * @param {string} str - The string to capitalize
 *
 * @example
 * capitalize('hello world') // 'Hello world'
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
