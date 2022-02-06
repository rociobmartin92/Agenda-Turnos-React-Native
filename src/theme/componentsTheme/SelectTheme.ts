import InputTheme from './InputTheme'

const defaultProps = {
  ...InputTheme.defaultProps,
  fontSize: 'md',
  variant: 'unstyled',
  color: 'text.50',
}

export default {
  baseStyle: InputTheme.baseStyle,
  defaultProps,
  variants: InputTheme.variants,
  sizes: InputTheme.sizes,
}
