export type NavbarLinkType = {
    name: string,
    icon: string | null,
    url: string,
    options: NavbarLinkOptionType[] | never[]
}

export type NavbarLinkOptionType = {
    name: string,
    url: string
}

export interface TrendInterface {
    heading: string,
    category: string,
    description: string,
    icon: string | null,
    cover: string | null,
    url: string,
}

export interface PostInterface {
    id: number,
    username: string,
    usersAvatar: string,
    contentPicture: string | null,
    message: string,
    votes: number,
    commentsAmount: number,
    time: string
}

