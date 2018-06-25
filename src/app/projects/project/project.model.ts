export interface Project {
    _id: string
    name: string
    description: string
    date: Date
    logo: string
    isActive: boolean
    tags: string[]
    category: {_id: string, name: string}
    owner: {_id: string, name: string}
}