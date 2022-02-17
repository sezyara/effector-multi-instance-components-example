export namespace UserList {
  export interface RequestParams {
    page: number
  }

  export interface ResponseData {
    count: number
    next: string | null
    previous: string | null
    results: Array<User>
  }

  export interface User {
    birth_year: string
    created: string
    eye_color: string
    films: string
    gender: string
    hair_color: string
    height: string
    homeworld: string
    edited: string
    mass: string
    name: string
    skin_color: string
    species: Array<string>
    starships: Array<string>
    url: string
    vehicles: Array<string>
  }
}
