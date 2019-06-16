import * as request from 'request';
import { User } from '../User';
import { Repo } from '../Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'venkatesh-devale-sjsu'
    },
    json: true
}

export class GithubAPIService {
    getuserInfo(username: string, callback: (user: User) => any) {
        request.get(`https://api.github.com/users/${username}`, OPTIONS, (error: any, response: any, body: any) => {
            callback(new User(body));
        });
    }

    getRepos(username: string, callback: (repos: Repo[]) => any) {
        request.get(`https://api.github.com/users/${username}/repos`, OPTIONS, (error: any, response: any, body: any) => {
            let repos: Repo[] = body.map((repo: Repo) => new Repo(repo));
            callback(repos);

        }); 
    }
}