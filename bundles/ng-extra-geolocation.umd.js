/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 * 
 * This file is part of ng-extra.
 * 
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('rxjs/observable/interval'), require('rxjs/operators/mergeMap')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', 'rxjs/observable/interval', 'rxjs/operators/mergeMap'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['ng-extra'] = global.ng['ng-extra'] || {}, global.ng['ng-extra'].geolocation = global.ng['ng-extra'].geolocation || {}),global.ng.core,global.Rx,global.Rx.Observable,global.Rx.operators));
}(this, (function (exports,_angular_core,rxjs_Observable,rxjs_observable_interval,rxjs_operators_mergeMap) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of ng-extra.
 *
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
/**
 * Service to get or watch current position (geolocation)
 */
var Geolocation = /** @class */ (function () {
    function Geolocation() {
        this.geolocationAvailable = navigator != null && navigator.geolocation != null;
    }
    /**
     * Gets a stream that emits when the current position is acquired via
     * the HTML5 Geolocation API
     * @param options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @returns A stream of the acquired position
     */
    /**
     * Gets a stream that emits when the current position is acquired via
     * the HTML5 Geolocation API
     * @param {?=} options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @return {?} A stream of the acquired position
     */
    Geolocation.prototype.getCurrentPosition = /**
     * Gets a stream that emits when the current position is acquired via
     * the HTML5 Geolocation API
     * @param {?=} options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @return {?} A stream of the acquired position
     */
    function (options) {
        var _this = this;
        return new rxjs_Observable.Observable(function (subscriber) {
            if (!_this.geolocationAvailable) {
                subscriber.error();
            }
            navigator.geolocation.getCurrentPosition(function (position) {
                subscriber.next(position);
                subscriber.complete();
            }, function (err) {
                subscriber.error(err);
            }, options);
        });
    };
    /**
     * Gets a stream that emits when the position acquired via
     * the HTML5 Geolocation API at intervals of `intervalMs` milliseconds
     * @param options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @param intervalMs Milliseconds between each position acquisition
     * @returns A stream of the acquired position
     */
    /**
     * Gets a stream that emits when the position acquired via
     * the HTML5 Geolocation API at intervals of `intervalMs` milliseconds
     * @param {?=} options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @param {?=} intervalMs Milliseconds between each position acquisition
     * @return {?} A stream of the acquired position
     */
    Geolocation.prototype.watchPosition = /**
     * Gets a stream that emits when the position acquired via
     * the HTML5 Geolocation API at intervals of `intervalMs` milliseconds
     * @param {?=} options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @param {?=} intervalMs Milliseconds between each position acquisition
     * @return {?} A stream of the acquired position
     */
    function (options, intervalMs) {
        var _this = this;
        if (intervalMs === void 0) { intervalMs = 1000; }
        return rxjs_observable_interval.interval(intervalMs).pipe(rxjs_operators_mergeMap.mergeMap(function () { return _this.getCurrentPosition(options); }));
    };
    Geolocation.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    Geolocation.ctorParameters = function () { return []; };
    return Geolocation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of ng-extra.
 *
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
var GeolocationModule = /** @class */ (function () {
    function GeolocationModule() {
    }
    GeolocationModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [Geolocation]
                },] },
    ];
    /** @nocollapse */
    GeolocationModule.ctorParameters = function () { return []; };
    return GeolocationModule;
}());

exports.Geolocation = Geolocation;
exports.GeolocationModule = GeolocationModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-extra-geolocation.umd.js.map
