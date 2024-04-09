export interface NewHotelsTypes{
    title?:string;
    description?:string;
    feature?:string;
    id?:string;
    location?:string;
    name?:string;
    pernight?:number;
    perweek?:number;
    region?:string;
    riview?:number;
    website?:string,
    img_url?:string;
    Absolutes?:boolean
  }

export interface FetchingCountry {
    name: {
        common: string;
        official: string;
      };
      flags: {
        svg: string;
      };
      population: number;
      region: string;
      capital: string;
      tld?: string[];
      currencies?: {
        [key: string]: {
          name: string;
          symbol: string;
        };
      };
      languages?: {
        [key: string]: string;
      };
      borders?: string[];
}