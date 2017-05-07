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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var villain_service_1 = require("./villain.service");
var VillainDetailComponent = (function () {
    function VillainDetailComponent(villainService, route, location) {
        this.villainService = villainService;
        this.route = route;
        this.location = location;
    }
    VillainDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.villainService.getVillain(+params['id']); })
            .subscribe(function (villain) { return _this.villain = villain; });
    };
    VillainDetailComponent.prototype.save = function () {
        var _this = this;
        this.villainService.update(this.villain)
            .then(function () { return _this.goBack(); });
    };
    VillainDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return VillainDetailComponent;
}());
VillainDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './villain-detail.component.html',
        styleUrls: ['./villain-detail.component.css']
    }),
    __metadata("design:paramtypes", [villain_service_1.VillainService,
        router_1.ActivatedRoute,
        common_1.Location])
], VillainDetailComponent);
exports.VillainDetailComponent = VillainDetailComponent;
//# sourceMappingURL=villain-detail.component.js.map