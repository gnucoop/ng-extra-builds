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
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@gnucoop/ng-extra/geolocation')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@gnucoop/ng-extra/geolocation'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['ng-extra'] = global.ng['ng-extra'] || {}),global.ng.core,global.gc.nge.geolocation));
}(this, (function (exports,_angular_core,_gnucoop_ngExtra_geolocation) { 'use strict';

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
 * Current version of Ng-Extra.
 */
var VERSION = new _angular_core.Version('0.1.0-eb59d7c');

exports.VERSION = VERSION;
exports.Geolocation = _gnucoop_ngExtra_geolocation.Geolocation;
exports.GeolocationModule = _gnucoop_ngExtra_geolocation.GeolocationModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-extra.umd.js.map
