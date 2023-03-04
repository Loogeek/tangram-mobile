import React, { CSSProperties, ReactElement } from "react";
import classNames from "classnames";

export interface NativeProps<S extends string = never> {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
  tabIndex?: number;
}

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  };

  if (props.className) {
    p.className = classNames(element.props.className, props.className);
  }

  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }

  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }

  for (const k in props) {
    if (props.hasOwnProperty(k)) {
      if (k.startsWith("data-") || k.startsWith("aria-")) {
        p[k] = props[k];
      }
    }
  }

  return React.cloneElement(element, p);
}
