export interface Project {
    name: string,
    description: string,
    date: Date,
    logo: string,
    isActive: boolean,
    tags: string[],
    //news: News[],
    //category: mongoose.Types.ObjectId | Category,
    //owner: mongoose.Types.ObjectId | User,
    //partners: [mongoose.Types.ObjectId] | User[],
    //candidates: [mongoose.Types.ObjectId] | User[]
}