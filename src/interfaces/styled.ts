export interface ITheme {
  colors: {
    backgroundBase: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    textBase: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
  };
  size: {
    container: { width: string };
    header: { height: number };
  };
  borders: {
    controls: { borderRadius: number };
    block: { borderRadius: number };
  };
  cursor: string;
}
