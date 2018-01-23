import { Observable } from 'rxjs/Observable';
/**
 * Service to get or watch current position (geolocation)
 */
export declare class Geolocation {
    /** Whether the HTML5 Geolocation API is available */
    readonly geolocationAvailable: boolean;
    constructor();
    /**
     * Gets a stream that emits when the current position is acquired via
     * the HTML5 Geolocation API
     * @param options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @returns A stream of the acquired position
     */
    getCurrentPosition(options?: PositionOptions): Observable<Position>;
    /**
     * Gets a stream that emits when the position acquired via
     * the HTML5 Geolocation API at intervals of `intervalMs` milliseconds
     * @param options Option properties to pass as a parameter of Geolocation.getCurrentPosition()
     * @param intervalMs Milliseconds between each position acquisition
     * @returns A stream of the acquired position
     */
    watchPosition(options?: PositionOptions, intervalMs?: number): Observable<Position>;
}
