export interface CountryI{
    name: {
        common: string;
        official: string;
    };
    latlng: Array<number>;
    capital: Array<string>;
    currencies: {
        [key:string]: CurrencyI;
    };
    status: string;
    region: string;
    languages: {
        [key:string]: string;
    };
    area: number;
    borders: Array<string>;
    population: number;
    continent: Array<string>;
    timezone: Array<string>;
    capitalInfo : {
        latlng : Array<number>;
    }
    gini:{
        [key:string]: string;
    }
    flag: string;
}

export interface CurrencyI {
    name: string;
    symbol: string;
}