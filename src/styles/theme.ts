import type { ITheme } from 'interfaces/styled';
import { colors } from 'constants/colors';

export const theme: ITheme = {
  colors: {
    backgroundBase: colors.white,
    backgroundPrimary: colors.blue500Main,
    backgroundSecondary: colors.blue100,
    textBase: colors.black,
    textPrimary: colors.blue500Main,
    textSecondary: colors.grey500,
    textTertiary: colors.white,
    border: colors.grey200,
  },
  size: {
    container: { width: '1fr minmax(auto, 1116px) 1fr' },
    header: { height: 84 },
    headerMob: { height: 60 },
  },
  borders: {
    controls: { borderRadius: 8 },
    block: { borderRadius: 12 },
  },
  cursor: 'pointer',
  media: {
    extraLarge: '(max-width: 1279px)',
    large: '(max-width: 1023px)',
    medium: '(max-width: 767px)',
    small: '(max-width: 479px)',
  },
  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },
};
