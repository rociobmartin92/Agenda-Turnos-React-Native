export default {
  baseStyle: {
    p: 2,
    borderRadius: 4,
    paddingTop: 0,
    paddingBottom: 1.5,
    paddingHorizontal: 0,
    margin: 0,
    paddingLeft: 0,
    _disabled: {
      opacity: 1,
      bg: 'background.700',
      color: 'text.500',
    },
    _text: {
      color: 'text.50',
    },
  },
  defaultProps: {
    selectionColor: 'text.50',
    isFullWidth: true,
    variant: 'unstyled',
    color: 'text.50',
    fontSize: 'md',
    bg: 'background.600',
    autoCapitalize: 'none',
    _focusVisible: {},
  },
  variants: {},
  sizes: {},
}
