// 43

// type MyExclude<T, U> = T extends U ? never : T;

// type Result = MyExclude<"a" | "b" | "c", "a">;

// 189

// type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
//   ? R extends Promise<any>
//     ? MyAwaited<R>
//     : R
//   : never;

// type ExampleType = Promise<string>;

// type Result = MyAwaited<ExampleType>; // string

// 268

// type If<C extends boolean, T, F> = C extends true ? T : F;

// type A = If<true, "a", "b">; // expected to be 'a'
// type B = If<false, "a", "b">; // expected to be 'b'

// Concat

// type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U];

// type Result = Concat<[1], [2]>; // expected to be [1, 2]
// type Test = Concat<[], [1]>;

// 533

// type Includes<T extends readonly any[], U> = U extends [infer F, ...infer R] ? (F extends U ? true : Includes<R, U>): false

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? (IsEqual<U, F> extends true ? true : Includes<R, U>) : false
type IsEqual<A, B> = ((<T>() => T extends A ? true : false) extends (<T>() => T  extends B ? true : false) ? true : false )

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">; // expected to be `false`
