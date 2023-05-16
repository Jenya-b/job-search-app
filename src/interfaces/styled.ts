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
    headerMob: { height: number };
  };
  borders: {
    controls: { borderRadius: number };
    block: { borderRadius: number };
  };
  cursor: string;
  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
  order: {
    mainIndex: number;
    firstIndex: number;
    mediumIndex: number;
    lastIndex: number;
  };
}
