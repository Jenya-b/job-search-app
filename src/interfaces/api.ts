export interface AuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
}

interface ICatalogues {
  id: number;
  key: number;
  positions: [];
  title: string;
}
export interface IVacancies {
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  catalogues: ICatalogues[];
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: string;
  id: number;
}

export interface VacanciesResponse {
  more: true;
  objects: IVacancies[];
  subscription_active: false;
  subscription_id: number;
  total: number;
}

export interface CataloguesResponse {
  title_rus: string;
  key: number;
}
