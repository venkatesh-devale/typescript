"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        var login = userResponse.login, name = userResponse.name, public_repos = userResponse.public_repos, followers = userResponse.followers;
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this._repos = [];
    }
    User.prototype.setRepos = function (repoList) {
        this._repos = repoList;
    };
    return User;
}());
exports.User = User;
