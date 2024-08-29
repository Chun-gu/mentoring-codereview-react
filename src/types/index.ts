import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from 'react';

type RefOpt = 'ref' | 'noRef';
type ChildrenOpt = 'children' | 'noChildren';
type Opts = RefOpt | ChildrenOpt;

type OptOf<T extends Opts | void> = T extends Opts
  ? T extends RefOpt
    ? RefOpt
    : ChildrenOpt
  : never;

type RequireKey<T extends object, R extends keyof T = keyof T> = Omit<T, R> & Required<Pick<T, R>>;

export type ComponentPropsWith<
  E extends ElementType,
  RC1 extends Exclude<Opts, OptOf<RC2>> | void = void,
  RC2 extends Exclude<Opts, OptOf<RC1>> | void = void,
> = [
  'noRef' extends RC1 | RC2 ? ComponentPropsWithoutRef<E> : ComponentPropsWithRef<E>,
  Extract<RC1 | RC2, 'ref' | 'children'>,
  'noChildren' extends RC1 | RC2 ? 'children' : never,
] extends [
  infer Props extends ComponentProps<E>,
  infer RequiredKey extends 'ref' | 'children' | never,
  infer OmittedKey extends 'children' | never,
]
  ? Omit<RequireKey<Props, RequiredKey>, OmittedKey>
  : never;
