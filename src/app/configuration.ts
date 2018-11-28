import { InjectionToken } from "@angular/core";

export const CONFIG = new InjectionToken<string>('config');


export interface Configuration {
  maxResults: number;
}
