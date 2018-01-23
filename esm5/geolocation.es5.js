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
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { mergeMap } from 'rxjs/operators/mergeMap';

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
        return new Observable(function (subscriber) {
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
        return interval(intervalMs).pipe(mergeMap(function () { return _this.getCurrentPosition(options); }));
    };
    Geolocation.decorators = [
        { type: Injectable },
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
        { type: NgModule, args: [{
                    providers: [Geolocation]
                },] },
    ];
    /** @nocollapse */
    GeolocationModule.ctorParameters = function () { return []; };
    return GeolocationModule;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Geolocation, GeolocationModule };
//# sourceMappingURL=geolocation.es5.js.map
