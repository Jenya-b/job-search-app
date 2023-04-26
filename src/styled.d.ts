import 'styled-components';

import type { ITheme } from 'interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
