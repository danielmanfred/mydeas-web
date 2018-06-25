export interface Project {
    _id: string
    name: string
    description: string
    date: Date
    logo: string
    isActive: boolean
    tags: string[]
    category: string
    owner: string
}