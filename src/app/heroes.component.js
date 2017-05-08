"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.powers = ['Flying', 'Invisibility', 'Fire', 'Immortality', 'Super Strength'];
        this.model = { id: 0, name: "" };
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes;
            _this.model.id = _this.getLastID();
        });
        //this.hero.id = this.getLastID();
        //   this.heroService
        //   .getCustomers()
        //   .then((customers)=>{
        //     this.customers=customers;
        //   });
        //  alert(JSON.stringify(this.customers));
    };
    // add(name: string): void {
    //   name = name.trim();
    //   if (!name) { return; }
    //   this.heroService.create(name)
    //     .then(hero => {
    //       this.heroes.push(hero);
    //       this.selectedHero = null;
    //     });
    // }
    HeroesComponent.prototype.add = function () {
        var _this = this;
        //name = name.trim();
        if (!this.model) {
            return;
        }
        this.heroService.create(this.model)
            .then(function (hero) {
            //this.heroes.push();
            _this.getHeroes();
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero-detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.getLastID = function () {
        var max = 0;
        this.heroes.forEach(function (member, index) {
            // console.log(member, index);
            if (member.id > max) {
                max = member.id;
                // console.log("Max now: " + max);
            }
        });
        return max += 1;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map