import { ParentComponent, Ref, onMount, JSX } from "solid-js";
import { Dynamic, DynamicProps } from "solid-js/web";

type PrimitiveComponent<E extends keyof JSX.IntrinsicElements> =
  ParentComponent<
    {
      ref?: Ref<HTMLElement>;
    } & JSX.IntrinsicElements[E]
  >;

type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveComponent<E>;
};

const NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul",
] as const;

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

<div></div>;

const Primitive = NODES.reduce((primitive, node) => {
  const Node: PrimitiveComponent<typeof node> = (props) => {
    onMount(() => ((window as any)[Symbol.for("solid-radix")] = true));

    return (
      <Dynamic component={node} ref={props.ref}>
        {props.children}
      </Dynamic>
    );
  };

  return { ...primitive, [node]: Node };
}, {} as Primitives);

/* -----------------------------------------------------------------------------------------------*/

const Root = Primitive;

export { Primitive, Root };