import { DetailObj } from './detail';

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: DetailObj;
  location: DetailObj;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
