export interface IImage {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IAlbum extends Array<IImage> {};

