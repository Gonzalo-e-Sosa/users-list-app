export interface name{
    title: string
    first: string
    last: string
}

interface street{
    number: number
    name: string
}

interface coordinates{
    latitude: string
    longitude: string
}

interface timezones{
    offset: string
    description: string
}

export interface location{
    street: street
    city: string
    state: string
    country: string
    postcode: number
    coordinates: coordinates
    timezone: timezones
}

type email = `${string}@${string}.com`

type api_url = 'https://randomuser.me/api/'

interface login{
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

interface dob{
    date: string
    age: number
}

interface registered{
    date: string
    age: number
}

interface id{
    name: string
    value: string
}

export interface picture{
    large: `${api_url}portraits/men/54.jpg`
    medium: `${api_url}portraits/med/men/54.jpg`
    thumbnail: `${api_url}portraits/thumb/men/54.jpg`
}

export interface user 
{
    gender: string
    name: name
    location: location
    email: email,
    login: login 
    dob: dob
    registered: registered
    phone: string,
    cell: string,
    id: id 
    picture: picture
    nat: string
}

export type users = user[];
export type header = 'Foto' | 'Nombre' | 'Apellido' | 'País' | 'Acciones';
export type action = 'Create' | 'Update' | 'Delete';