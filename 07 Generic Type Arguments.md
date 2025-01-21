# Why We Need Generic Type Arguments

If primitive (and literal) types are data, you can think of generics as functions that operate on that data. Just like functions often need arguments, we need some way to provide inputs to generic types.

## How To Use Generic Arguments

Instead of using parentheses `()` to pass arguments, with generics we use angled brackets: `<` and `>`. Other than syntax, there are many similarities between function arguments and generic type arguments.

> **Note:** You can even provide defaults for generic arguments! See the relevant challenge for generic defaults.

There are two primary situations to use this syntax:
1. When working strictly within the type system
2. When working with JavaScript constructs like functions and constants

### Universe 1: Strictly in the Type System

Example interface with a generic type:

```typescript
interface Row<T> {
  label: string;
  value: T;
  disabled: boolean;
}
