import {Body} from "matter-js";
import {Graphics, Sprite, Text, Ticker} from "pixi.js";

export interface IObject {
  drawable?: Text | Sprite | Graphics;
  body?: Body;
  onUpdate?: (object: IObject, ticker: Ticker) => unknown;
}
