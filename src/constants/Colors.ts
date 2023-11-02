const tintColorDark = '#fff'

export const colors = {
  primary: '#0C2964',
  secondary: '#F39404',
  danger: '#F33545',

  cyan: '#0CE8A6',
  textColor: '#C4C4C4',
  write: '#ffffff',
  gray40: '#666666',
  black: '#000',
}

export default {
  ...colors,
  light: {
    text: '#000',
    buttonDanger: colors.danger,
    placeholderText: colors.textColor,
    background: '#fff',
    tint: colors.primary,
    tabTextSelected: colors.secondary,
    tabDefault: colors.textColor,
    tabBackgroundDefault: colors.primary,
    tabIconSelected: colors.secondary,
    searchInputBackground: colors.cyan,
    stationDetailLabelText: colors.primary,
    stationDetailDescriptionText: '#000',
    stationDetailTitle: colors.primary,
    stationDetailSwitchButton: colors.primary,
    stationDetailStatusOpen: colors.cyan,
  },
  dark: {
    text: '#ABABAB',
    buttonDanger: colors.danger,
    placeholderText: colors.textColor,
    background: '#000',
    tabTextSelected: colors.secondary,
    tint: tintColorDark,
    tabBackgroundDefault: '#2D2D2D',
    tabDefault: colors.textColor,
    tabIconSelected: tintColorDark,
    searchInputBackground: colors.cyan,
    stationDetailLabelText: colors.primary,
    stationDetailDescriptionText: '#000',
    stationDetailTitle: colors.primary,
    stationDetailSwitchButton: colors.primary,
    stationDetailStatusOpen: colors.cyan,
  },
}
