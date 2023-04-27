import { path } from 'modules/router/path';
import type { IMenu } from 'interfaces/menu';

export const menu: IMenu[] = [
  { title: 'Поиск Вакансий', href: path.home },
  { title: 'Избранное', href: path.selectedJobs },
];
