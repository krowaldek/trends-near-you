export const removeHash = (input: string) => {
  const regexp = /(^|\s)(#[a-z\d-]+)/ig
  const hashtags = input.match(regexp)
  if (hashtags) {
    return input.slice(1, input.length)
  }
  return input
}
