import { GithubAPIService } from "./services/GithubAPIService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

const githubAPIService = new GithubAPIService();

if(process.argv.length < 3) {
    console.log("Please provide the username like npm start <github-username>");
} else {
    let username = process.argv[2];
    githubAPIService.getuserInfo(username, (user: User) => {
        githubAPIService.getRepos(username, (repoList: Repo[]) => {
            let sortedRepos = _.sortBy(repoList, (repo: Repo) => {
                return repo.forkCount * -1;
            });
            let filteredRepos = _.take(sortedRepos, 2);
            user.setRepos(filteredRepos);
            console.log(user);
        });
    });
    
}


