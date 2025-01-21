
# Comprehensive Guide to TypeScript Generics

## Table of Contents
1. [Introduction to Generics](#introduction-to-generics)
2. [Basic Generic Syntax](#basic-generic-syntax)
3. [Generic Type Parameters](#generic-type-parameters)
4. [Generic Constraints](#generic-constraints)
5. [Default Type Parameters](#default-type-parameters)
6. [Generics in Different Contexts](#generics-in-different-contexts)
7. [Advanced Patterns](#advanced-patterns)
8. [Best Practices](#best-practices)
9. [Common Use Cases](#common-use-cases)
10. [Challenge Solution](#challenge-solution)

## Introduction to Generics

Generics in TypeScript provide a way to create reusable components that work with multiple types while maintaining type safety. They allow us to:

- Create type-safe abstractions
- Avoid code duplication
- Maintain type information through complex operations
- Enable better code reuse patterns

**Analogy**: If types are different-shaped containers, generics are the adjustable dividers that let you safely organize different contents in the same container.

## Basic Generic Syntax

### Type Parameters

Declared using angle brackets `< >`:

```typescript
interface Wrapper<T> {
  value: T;
}
```

**Usage**:
```typescript
type NumberWrapper = Wrapper<number>;
// Equivalent to { value: number }

type StringWrapper = Wrapper<string>;
// Equivalent to { value: string }
```

#### Multiple Type Parameters
```typescript
type Pair<T, U> = {
  first: T;
  second: U;
};

type StringNumberPair = Pair<string, number>;
// { first: string; second: number }
```

## Generic Type Parameters

### Naming Conventions
- Use descriptive names when possible (e.g., `KeyType`, `ValueType`).
- Single letters are acceptable for simple cases (e.g., `T`, `U`, `V`).

**Common conventions**:
- `T`: Type
- `K`: Key type
- `V`: Value type
- `E`: Element type

### Parameter Scoping

```typescript
function identity<T>(arg: T): T {
  return arg;
}

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
```

## Generic Constraints

### Using `extends` Keyword

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
```

### Type Parameter Constraints

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

## Default Type Parameters

```typescript
interface PaginationOptions<ItemType = any> {
  items: ItemType[];
  pageSize: number;
  currentPage: number;
}

// Usage with default type
type AnyPagination = PaginationOptions;
```

## Generics in Different Contexts

1. **Functions**:
   ```typescript
   function reverse<T>(items: T[]): T[] {
     return items.reverse();
   }
   ```

2. **Classes**:
   ```typescript
   class Stack<T> {
     private items: T[] = [];
     
     push(item: T) {
       this.items.push(item);
     }
     
     pop(): T | undefined {
       return this.items.pop();
     }
   }
   ```

3. **Type Aliases**:
   ```typescript
   type Nullable<T> = T | null;
   ```

4. **Utility Types**:
   ```typescript
   type Partial<T> = { [P in keyof T]?: T[P] };
   type Readonly<T> = { readonly [P in keyof T]: T[P] };
   ```

## Advanced Patterns

### Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

### Mapped Types

```typescript
type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};
```

### Recursive Types

```typescript
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };
```

## Best Practices

- Use constraints judiciously — only add constraints when necessary.
- Prefer inference — let TypeScript infer types where possible.
- Document complex generics — use TSDoc comments for complicated type parameters.
- Avoid over-genericizing — not everything needs to be generic.
- Use default types for common use cases.
- Test edge cases — verify behavior with extreme types (`never`, `any`, union types).

## Common Use Cases

1. **API Response Wrappers**:
   ```typescript
   interface ApiResponse<T> {
     data: T;
     status: number;
     timestamp: Date;
   }
   ```

2. **State Management**:
   ```typescript
   type Reducer<State, Action> = (state: State, action: Action) => State;
   ```

3. **Collection Utilities**:
   ```typescript
   function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
     return arr.filter(predicate);
   }
   ```

4. **Higher-Order Components**:
   ```typescript
   function withLogging<TProps>(WrappedComponent: React.ComponentType<TProps>) {
     return (props: TProps) => {
       console.log('Rendering:', WrappedComponent.name);
       return <WrappedComponent {...props} />;
     };
   }
   ```

## Challenge Solution

### Grocery Store Implementation

```typescript
type GroceryStore<Name extends string, City extends string> = {
  name: Name;
  city: City;
};

type SuperStore = GroceryStore<'Super Grocer', 'New York'>;
// { name: 'Super Grocer'; city: 'New York' }
```

### Caprese Salad Implementation

```typescript
type GroceryItem<Name extends string, Price extends number, InStock extends boolean> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<'Caprese Salad', 14.99, true>;
/* Equivalent to:
{
  name: 'Caprese Salad';
  price: 14.99;
  inStock: true;
}
*/
```

### Extended Implementation with Constraints

```typescript
interface ProductConstraints {
  name: string;
  price: number;
  inStock: boolean;
}

type SafeGroceryItem<T extends ProductConstraints> = {
  name: T['name'];
  price: T['price'];
  inStock: T['inStock'];
};

type SafeCaprese = SafeGroceryItem<{
  name: 'Caprese Salad';
  price: 14.99;
  inStock: true;
}>;
```

## Further Reading
- [TypeScript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Advanced TypeScript Types Cheat Sheet](https://github.com/typescript-cheatsheets)
- [Generics in TypeScript: Use Case Study](https://dev.to/)
```
