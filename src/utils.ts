export function variantGetParameter(
  prefix: string,
  matcher: string,
  separators: string[],
): [string, string] | undefined {
  if (!matcher.startsWith(prefix)) {
    return undefined
  }

  const body = matcher.slice(prefix.length)

  let separatorIndex = -1
  let foundSeparator = ''

  for (const separator of separators) {
    const index = body.indexOf(separator)
    if (index !== -1 && (separatorIndex === -1 || index < separatorIndex)) {
      separatorIndex = index
      foundSeparator = separator
    }
  }

  if (separatorIndex === -1) {
    return undefined
  }

  const match = body.slice(0, separatorIndex)
  const rest = body.slice(separatorIndex + foundSeparator.length)

  return [match, rest]
}
