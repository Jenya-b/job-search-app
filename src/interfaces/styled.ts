export interface ITheme {
  colors: {
    backgroundBase: string;
    textBase: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
  };
  size: {
    container: { width: string };
    header: { height: number };
  };
}
