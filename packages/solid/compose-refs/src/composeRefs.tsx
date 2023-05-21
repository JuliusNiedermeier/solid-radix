export type CallbackRef<TInstance> = (instance: TInstance) => void;

export function composeRefs<TInstance>(
  ...refs: (CallbackRef<TInstance> | undefined)[]
) {
  return (instance: TInstance) => refs.forEach((ref) => ref?.(instance));
}
