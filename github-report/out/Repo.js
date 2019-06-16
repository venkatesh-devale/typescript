"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        var name = repo.name, description = repo.description, url = repo.url, size = repo.size, forks_count = repo.forks_count;
        this.name = name;
        this.description = description;
        this.url = url;
        this.size = size;
        this.forkCount = forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
