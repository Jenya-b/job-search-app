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
  },
  cursor: 'pointer',
};
