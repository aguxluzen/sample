var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = /** @class */ (function () {
        function AppComponent() {
        }
        AppComponent.prototype.onSubmit = function () {
        };
        AppComponent = __decorate([
            core_1.Component({
                templateUrl: "app.component.html",
                styles: [
                    "\n            .example-form {\n                min-width: 150px;\n                max-width: 500px;\n                width: 100%;\n            }\n\n            .example-full-width {\n                width: 100%;\n            }\n        "
                ]
            })
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map