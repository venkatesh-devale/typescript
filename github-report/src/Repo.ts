export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(repo: any) {
        let { name, description, url, size, forks_count } = repo;

        this.name = name;
        this.description = description;
        this.url = url;
        this.size = size;
        this.forkCount = forks_count;
    }
}