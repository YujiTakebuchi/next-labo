import variable from "../styles/var.module.scss";

export const responsiveCSS = (
  property: string,
  val: string,
  valSp?: string,
  bp: string = variable.breakpoint
) => `${property}: ${val};@media (max-width: ${bp}px) {${property}: ${valSp};}`;

interface ParamObject {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}
type ListenerFunc = (this: HTMLElement, ev: Event) => any;

export const attachScrollEventListener = (
  elem: any,
  listener: ListenerFunc,
  options?: ParamObject
) => {
  elem.addEventListener("scroll", listener, options);
  elem.addEventListener("mousewheel", listener, options);
  elem.addEventListener("touchmove", listener, options);
};

export const detachScrollEventListener = (
  elem: any,
  listener: ListenerFunc,
  options?: ParamObject
) => {
  elem.removeEventListener("scroll", listener, options);
  elem.removeEventListener("mousewheel", listener, options);
  elem.removeEventListener("touchmove", listener, options);
};
