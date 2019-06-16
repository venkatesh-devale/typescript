import { Repo } from "./Repo";

export class User {
    private login: string;
    private fullName: string;
    private repoCount: number;
    private followerCount: number;
    private _repos: Repo[];

    constructor(userResponse: any) {
        let { login, name, public_repos, followers } = userResponse;

        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this._repos = [];
    }

    setRepos(repoList: Repo[]) {
        this._repos = repoList;
    }
} 