export interface Image {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IAlbum extends Array<Image> {};

