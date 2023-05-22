import { JSXElement, ParentProps } from "solid-js";

type BaseSlotComponent<TProps> = (props: TProps) => JSXElement;

interface RegularProps extends ParentProps {
  asChild?: false;
}

interface SlottableProps {
  asChild: true;
  children: (props: any) => JSXElement;
}

type SlotComponent<TUserProps = {}> = BaseSlotComponent<
  (TUserProps & SlottableProps) | (TUserProps & RegularProps)
>;

export const Slot: SlotComponent = (props) => {
  if (props.asChild === true) {
    return props.children({});
  } else {
    return props.children;
  }
};
