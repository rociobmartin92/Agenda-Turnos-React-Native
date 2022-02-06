/* eslint-disable no-underscore-dangle */
import { mode, transparentize } from 'native-base/lib/commonjs/theme/tools'
import { Platform } from 'react-native'

const colorSchemeDefault = ({ colorScheme: c }: any) => {
  if (c === 'secondary') return `${c}.400`
  return `${c}.500`
}

const colorSchemeDefaultHover = ({ colorScheme: c }: any) => {
  if (c === 'secondary') return `${c}.600`
  return `${c}.700`
}

const colorSchemeDefaultLink = ({ colorScheme: c }: any) => `${c}.400`

const disabledBackgroundColor = 'background.700'
const disabledStrokeColor = 'background.700'
const disabledTextColor = 'background.500'

const baseStyle = (props: any) => {
  const { primary } = props.theme.colors
  const focusRing =
    Platform.OS === 'web'
      ? mode(
          { boxShadow: `${primary[400]} 0px 0px 0px 2px`, zIndex: 1 },
          { boxShadow: `${primary[500]} 0px 0px 0px 2px`, zIndex: 1 }
        )(props)
      : {}

  const loadingPointer = props.isLoading ? 'default' : 'pointer'

  return {
    borderRadius: 'sm',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      cursor: props.isDisabled ? 'not-allowed' : loadingPointer,
    },
    _text: {
      fontWeight: 'medium',
    },
    _focusVisible: {
      style: props.variant !== 'unstyled' ? { ...focusRing } : {},
    },
    _stack: {
      space: 2,
      alignItems: 'center',
    },
    _loading: {
      opacity: '80',
    },
    _disabled: {
      opacity: '50',
    },
    _spinner: {
      size: 'sm',
    },
  }
}

function variantGhost(props: any) {
  const { colorScheme: c } = props
  return {
    _text: {
      color: props.isDisabled ? disabledTextColor : 'text.50',
    },
    bg: 'transparent',
    margin: 0,
    padding: 0,
    _web: {
      outlineWidth: '0',
    },
    _hover: {
      borderColor: colorSchemeDefault(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _focusVisible: {
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _pressed: {
      borderColor: mode(`${c}.600`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.300`, `${c}.500`)(props), 0.5)(props.theme),
    },
    _spinner: {
      size: 'sm',
    },
  }
}

function variantOutline(props: any) {
  const { colorScheme: c } = props
  const borderColor = `${c}.500`
  const _hover = {
    borderWidth: 1,
    borderColor,
    bg: colorSchemeDefaultHover(props),
  }
  return {
    ...variantGhost(props),
    borderWidth: 1,
    borderColor: props.isDisabled ? disabledStrokeColor : borderColor,
    _hover,
    _loading: {
      _text: { display: 'none' },
    },
    _focus: {},
    _pressed: _hover,
    _text: { color: 'text.50', fontWeight: 700 },
  }
}

function variantSolid(props: any) {
  const { colorScheme: c } = props
  let bg = `${c}.500`
  if (props.isDisabled) {
    bg = disabledBackgroundColor
  }

  const styleObject = {
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: `${c}.600`,
    },
    _pressed: {
      bg: `${c}.700`,
    },
    _focus: {
      bg: `${c}.600`,
    },
    _loading: {
      bg: disabledBackgroundColor,
      _text: { display: 'none' },
    },
    _disabled: { bg: disabledBackgroundColor },
    _text: {
      color: 'text.50',
      fontSize: 'md',
      fontWeight: '600',
    },
  }

  return styleObject
}

function variantSubtle(props: any) {
  const { colorScheme: c } = props
  let bg = `${c}.100`
  bg = mode(bg, `${c}.200`)(props)
  let color
  if (props.isDisabled) {
    bg = mode(`muted.300`, `muted.500`)(props)
  } else {
    color = mode(`${c}.500`, `${c}.600`)(props)
  }
  const styleObject = {
    _text: {
      color,
    },
    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      _text: { color: mode(`${c}.600`, `${c}.700`)(props) },
      bg: mode(`${c}.200`, `${c}.300`)(props),
    },
    _pressed: {
      _text: { color: mode(`${c}.700`, `${c}.800`)(props) },
      bg: mode(`${c}.300`, `${c}.400`)(props),
    },
  }

  return styleObject
}

function variantLink(props: any) {
  const colorLink = colorSchemeDefaultLink(props)
  const _hover = {
    _text: {
      color: colorLink,
      textDecorationLine: 'underline',
    },
    bg: 'transparent',
  }

  return {
    ...variantGhost(props),
    bg: 'transparent',
    _text: {
      textDecorationLine: Platform.select({
        ios: 'none',
        web: 'none',
      }),
      color: props.isDisabled ? disabledTextColor : colorLink,
    },
    _hover,
    _focusVisible: {
      bg: 'transparent',
    },
    _pressed: _hover,
    _disabled: {
      _text: {
        color: 'text.500',
      },
    },
  }
}

function variantUnstyled() {
  return {}
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  subtle: variantSubtle,
  link: variantLink,
  unstyled: variantUnstyled,
}

export default {
  baseStyle,
  variants,
  sizes: {},
  defaultProps: {
    _pressed: { opacity: 0 },
    w: '100%',
    h: 50,
    colorScheme: 'primary',
    variant: 'solid',
    fontWeight: 'medium',
  },
}
