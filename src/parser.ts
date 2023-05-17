import { MaskOptions, MaskType } from './mask'
import { MaskTokens } from './tokens'

const parseJson = (value: string): any => JSON.parse(value.replaceAll("'", '"'))

export const parseInput = (
  input: HTMLInputElement,
  defaults: MaskOptions = {}
): MaskOptions => {
  const opts = { ...defaults }

  if (input.dataset.mask != null && input.dataset.mask !== '') {
    opts.mask = parseMask(input.dataset.mask)
  }
  if (input.dataset.maskEager != null) {
    opts.eager = parseOpts(input.dataset.maskEager)
  }
  if (input.dataset.maskReversed != null) {
    opts.reversed = parseOpts(input.dataset.maskReversed)
  }
  if (input.dataset.maskTokensReplace != null) {
    opts.tokensReplace = parseOpts(input.dataset.maskTokensReplace)
  }
  if (input.dataset.maskTokens != null) {
    opts.tokens = parseTokens(input.dataset.maskTokens)
  }

  return opts
}

const parseOpts = (value: string): boolean =>
  value !== '' ? Boolean(JSON.parse(value)) : true

const parseMask = (value: string): MaskType =>
  value.startsWith('[') && value.endsWith(']') ? parseJson(value) : value

const parseTokens = (value: string): MaskTokens => {
  if (value.startsWith('{') && value.endsWith('}')) {
    return parseJson(value)
  }

  const tokens: MaskTokens = {}
  value.split('|').forEach((token) => {
    const parts = token.split(':')
    tokens[parts[0]] = {
      pattern: new RegExp(parts[1]),
      optional: parts[2] === 'optional',
      multiple: parts[2] === 'multiple',
      repeated: parts[2] === 'repeated'
    }
  })

  return tokens
}
