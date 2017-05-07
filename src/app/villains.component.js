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
var villain_service_1 = require("./villain.service");
var VillainsComponent = (function () {
    function VillainsComponent(villainService, router) {
        this.villainService = villainService;
        this.router = router;
    }
    VillainsComponent.prototype.getVillains = function () {
        var _this = this;
        this.villainService
            .getVillains()
            .then(function (villains) { return _this.villains = villains; });
    };
    VillainsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.villainService.create(name)
            .then(function (villain) {
            _this.villains.push(villain);
            _this.selectedVillain = null;
        });
    };
    VillainsComponent.prototype.delete = function (villain) {
        var _this = this;
        this.villainService
            .delete(villain.id)
            .then(function () {
            _this.villains = _this.villains.filter(function (h) { return h !== villain; });
            if (_this.selectedVillain === villain) {
                _this.selectedVillain = null;
            }
        });
    };
    VillainsComponent.prototype.ngOnInit = function () {
        this.getVillains();
    };
    VillainsComponent.prototype.onSelect = function (villain) {
        this.selectedVillain = villain;
    };
    VillainsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/villain-detail', this.selectedVillain.id]);
    };
    return VillainsComponent;
}());
VillainsComponent = __decorate([
    core_1.Component({
        selector: 'my-villains',
        templateUrl: './villains.component.html',
        styleUrls: ['./villains.component.css']
    }),
    __metadata("design:paramtypes", [villain_service_1.VillainService,
        router_1.Router])
], VillainsComponent);
exports.VillainsComponent = VillainsComponent;
//# sourceMappingURL=villains.component.js.map