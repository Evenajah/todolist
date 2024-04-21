export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];
  let prefix = '';

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      prefix += firstStr[i];
    } else {
      break;
    }
  }

  return prefix;
}
