
export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompanies = {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
};

export type ProductionCountries = {
  logo_path: string;
  name: string;
};

export type SpokenLanguages = {
  logo_path: string;
  name: string;
};

export type Detail = {
    adult: false;
    backdrop_path: string;
    // belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
};
