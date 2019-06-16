"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubAPIService_1 = require("./services/GithubAPIService");
var _ = __importStar(require("lodash"));
var githubAPIService = new GithubAPIService_1.GithubAPIService();
if (process.argv.length < 3) {
    console.log("Please provide the username like npm start <github-username>");
}
else {
    var username_1 = process.argv[2];
    githubAPIService.getuserInfo(username_1, function (user) {
        githubAPIService.getRepos(username_1, function (repoList) {
            var sortedRepos = _.sortBy(repoList, function (repo) {
                return repo.forkCount * -1;
            });
            var filteredRepos = _.take(sortedRepos, 2);
            user.setRepos(filteredRepos);
            console.log(user);
        });
    });
}
