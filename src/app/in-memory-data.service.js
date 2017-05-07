"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Superman' },
            { id: 12, name: 'Batman' },
            { id: 13, name: 'Green Lantern' },
            { id: 14, name: 'Martian Manhunter' },
            { id: 15, name: 'Flash' },
            { id: 16, name: 'Wonder Woman' },
            { id: 17, name: 'Aquaman' },
            { id: 18, name: 'Superboy' },
            { id: 19, name: 'Supergirl' },
            { id: 20, name: 'Cyborg' }
        ];
        var villains = [
            { id: 11, name: 'Lex Luthor' },
            { id: 12, name: 'Joker' },
            { id: 13, name: 'Red Lantern' },
            { id: 14, name: 'Red Martian' },
            { id: 15, name: 'Captain Cold' },
            { id: 16, name: 'Mirror Master' },
            { id: 17, name: 'Darkseid' },
            { id: 18, name: 'Brainiac' },
            { id: 19, name: 'General Zod' },
            { id: 20, name: 'Doomsday' }
        ];
        return { heroes: heroes, villains: villains };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map