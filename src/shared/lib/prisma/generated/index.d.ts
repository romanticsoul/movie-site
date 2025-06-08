
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model PersonInMedia
 * 
 */
export type PersonInMedia = $Result.DefaultSelection<Prisma.$PersonInMediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MediaType: {
  movie: 'movie',
  tv_series: 'tv_series',
  anime: 'anime',
  cartoon: 'cartoon',
  animated_series: 'animated_series'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const Status: {
  announced: 'announced',
  completed: 'completed',
  filming: 'filming',
  post_production: 'post_production',
  pre_production: 'pre_production'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personInMedia`: Exposes CRUD operations for the **PersonInMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonInMedias
    * const personInMedias = await prisma.personInMedia.findMany()
    * ```
    */
  get personInMedia(): Prisma.PersonInMediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Country: 'Country',
    Genre: 'Genre',
    Media: 'Media',
    Person: 'Person',
    PersonInMedia: 'PersonInMedia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "country" | "genre" | "media" | "person" | "personInMedia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      PersonInMedia: {
        payload: Prisma.$PersonInMediaPayload<ExtArgs>
        fields: Prisma.PersonInMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonInMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonInMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          findFirst: {
            args: Prisma.PersonInMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonInMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          findMany: {
            args: Prisma.PersonInMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>[]
          }
          create: {
            args: Prisma.PersonInMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          createMany: {
            args: Prisma.PersonInMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonInMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>[]
          }
          delete: {
            args: Prisma.PersonInMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          update: {
            args: Prisma.PersonInMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          deleteMany: {
            args: Prisma.PersonInMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonInMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonInMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>[]
          }
          upsert: {
            args: Prisma.PersonInMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonInMediaPayload>
          }
          aggregate: {
            args: Prisma.PersonInMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonInMedia>
          }
          groupBy: {
            args: Prisma.PersonInMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonInMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonInMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonInMediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    country?: CountryOmit
    genre?: GenreOmit
    media?: MediaOmit
    person?: PersonOmit
    personInMedia?: PersonInMediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    Media: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | CountryCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    Media: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | GenreCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    PersonInMedia: number
    Country: number
    Genre: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonInMedia?: boolean | MediaCountOutputTypeCountPersonInMediaArgs
    Country?: boolean | MediaCountOutputTypeCountCountryArgs
    Genre?: boolean | MediaCountOutputTypeCountGenreArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountPersonInMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonInMediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    PersonInMedia: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonInMedia?: boolean | PersonCountOutputTypeCountPersonInMediaArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPersonInMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonInMediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Media?: boolean | Country$MediaArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | Country$MediaArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      Media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Media<T extends Country$MediaArgs<ExtArgs> = {}>(args?: Subset<T, Country$MediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.Media
   */
  export type Country$MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Media?: boolean | Genre$MediaArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | Genre$MediaArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      Media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Media<T extends Genre$MediaArgs<ExtArgs> = {}>(args?: Subset<T, Genre$MediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.Media
   */
  export type Genre$MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    tmdb_id: number | null
    year: number | null
    rating_kp: number | null
    rating_age: number | null
    rating_imdb: number | null
    rating_tmdb: number | null
    votes_kp: number | null
    votes_imdb: number | null
    votes_tmdb: number | null
    movie_length: number | null
    top_10: number | null
    top_250: number | null
    series_length: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    tmdb_id: number | null
    year: number | null
    rating_kp: number | null
    rating_age: number | null
    rating_imdb: number | null
    rating_tmdb: number | null
    votes_kp: number | null
    votes_imdb: number | null
    votes_tmdb: number | null
    movie_length: number | null
    top_10: number | null
    top_250: number | null
    series_length: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    imdb_id: string | null
    tmdb_id: number | null
    title: string | null
    description: string | null
    short_description: string | null
    slogan: string | null
    type: $Enums.MediaType | null
    is_series: boolean | null
    status: $Enums.Status | null
    year: number | null
    rating_kp: number | null
    rating_age: number | null
    rating_imdb: number | null
    rating_tmdb: number | null
    votes_kp: number | null
    votes_imdb: number | null
    votes_tmdb: number | null
    movie_length: number | null
    poster: string | null
    backdrop: string | null
    logo: string | null
    top_10: number | null
    top_250: number | null
    series_length: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    imdb_id: string | null
    tmdb_id: number | null
    title: string | null
    description: string | null
    short_description: string | null
    slogan: string | null
    type: $Enums.MediaType | null
    is_series: boolean | null
    status: $Enums.Status | null
    year: number | null
    rating_kp: number | null
    rating_age: number | null
    rating_imdb: number | null
    rating_tmdb: number | null
    votes_kp: number | null
    votes_imdb: number | null
    votes_tmdb: number | null
    movie_length: number | null
    poster: string | null
    backdrop: string | null
    logo: string | null
    top_10: number | null
    top_250: number | null
    series_length: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    imdb_id: number
    tmdb_id: number
    title: number
    description: number
    short_description: number
    slogan: number
    type: number
    is_series: number
    status: number
    year: number
    rating_kp: number
    rating_age: number
    rating_imdb: number
    rating_tmdb: number
    votes_kp: number
    votes_imdb: number
    votes_tmdb: number
    movie_length: number
    poster: number
    backdrop: number
    logo: number
    top_10: number
    top_250: number
    series_length: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    tmdb_id?: true
    year?: true
    rating_kp?: true
    rating_age?: true
    rating_imdb?: true
    rating_tmdb?: true
    votes_kp?: true
    votes_imdb?: true
    votes_tmdb?: true
    movie_length?: true
    top_10?: true
    top_250?: true
    series_length?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    tmdb_id?: true
    year?: true
    rating_kp?: true
    rating_age?: true
    rating_imdb?: true
    rating_tmdb?: true
    votes_kp?: true
    votes_imdb?: true
    votes_tmdb?: true
    movie_length?: true
    top_10?: true
    top_250?: true
    series_length?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    imdb_id?: true
    tmdb_id?: true
    title?: true
    description?: true
    short_description?: true
    slogan?: true
    type?: true
    is_series?: true
    status?: true
    year?: true
    rating_kp?: true
    rating_age?: true
    rating_imdb?: true
    rating_tmdb?: true
    votes_kp?: true
    votes_imdb?: true
    votes_tmdb?: true
    movie_length?: true
    poster?: true
    backdrop?: true
    logo?: true
    top_10?: true
    top_250?: true
    series_length?: true
    updated_at?: true
    created_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    imdb_id?: true
    tmdb_id?: true
    title?: true
    description?: true
    short_description?: true
    slogan?: true
    type?: true
    is_series?: true
    status?: true
    year?: true
    rating_kp?: true
    rating_age?: true
    rating_imdb?: true
    rating_tmdb?: true
    votes_kp?: true
    votes_imdb?: true
    votes_tmdb?: true
    movie_length?: true
    poster?: true
    backdrop?: true
    logo?: true
    top_10?: true
    top_250?: true
    series_length?: true
    updated_at?: true
    created_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    imdb_id?: true
    tmdb_id?: true
    title?: true
    description?: true
    short_description?: true
    slogan?: true
    type?: true
    is_series?: true
    status?: true
    year?: true
    rating_kp?: true
    rating_age?: true
    rating_imdb?: true
    rating_tmdb?: true
    votes_kp?: true
    votes_imdb?: true
    votes_tmdb?: true
    movie_length?: true
    poster?: true
    backdrop?: true
    logo?: true
    top_10?: true
    top_250?: true
    series_length?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    imdb_id: string | null
    tmdb_id: number | null
    title: string
    description: string
    short_description: string | null
    slogan: string | null
    type: $Enums.MediaType
    is_series: boolean | null
    status: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age: number | null
    rating_imdb: number | null
    rating_tmdb: number | null
    votes_kp: number
    votes_imdb: number | null
    votes_tmdb: number | null
    movie_length: number | null
    poster: string
    backdrop: string | null
    logo: string | null
    top_10: number | null
    top_250: number | null
    series_length: number | null
    updated_at: Date
    created_at: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imdb_id?: boolean
    tmdb_id?: boolean
    title?: boolean
    description?: boolean
    short_description?: boolean
    slogan?: boolean
    type?: boolean
    is_series?: boolean
    status?: boolean
    year?: boolean
    rating_kp?: boolean
    rating_age?: boolean
    rating_imdb?: boolean
    rating_tmdb?: boolean
    votes_kp?: boolean
    votes_imdb?: boolean
    votes_tmdb?: boolean
    movie_length?: boolean
    poster?: boolean
    backdrop?: boolean
    logo?: boolean
    top_10?: boolean
    top_250?: boolean
    series_length?: boolean
    updated_at?: boolean
    created_at?: boolean
    PersonInMedia?: boolean | Media$PersonInMediaArgs<ExtArgs>
    Country?: boolean | Media$CountryArgs<ExtArgs>
    Genre?: boolean | Media$GenreArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imdb_id?: boolean
    tmdb_id?: boolean
    title?: boolean
    description?: boolean
    short_description?: boolean
    slogan?: boolean
    type?: boolean
    is_series?: boolean
    status?: boolean
    year?: boolean
    rating_kp?: boolean
    rating_age?: boolean
    rating_imdb?: boolean
    rating_tmdb?: boolean
    votes_kp?: boolean
    votes_imdb?: boolean
    votes_tmdb?: boolean
    movie_length?: boolean
    poster?: boolean
    backdrop?: boolean
    logo?: boolean
    top_10?: boolean
    top_250?: boolean
    series_length?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imdb_id?: boolean
    tmdb_id?: boolean
    title?: boolean
    description?: boolean
    short_description?: boolean
    slogan?: boolean
    type?: boolean
    is_series?: boolean
    status?: boolean
    year?: boolean
    rating_kp?: boolean
    rating_age?: boolean
    rating_imdb?: boolean
    rating_tmdb?: boolean
    votes_kp?: boolean
    votes_imdb?: boolean
    votes_tmdb?: boolean
    movie_length?: boolean
    poster?: boolean
    backdrop?: boolean
    logo?: boolean
    top_10?: boolean
    top_250?: boolean
    series_length?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    imdb_id?: boolean
    tmdb_id?: boolean
    title?: boolean
    description?: boolean
    short_description?: boolean
    slogan?: boolean
    type?: boolean
    is_series?: boolean
    status?: boolean
    year?: boolean
    rating_kp?: boolean
    rating_age?: boolean
    rating_imdb?: boolean
    rating_tmdb?: boolean
    votes_kp?: boolean
    votes_imdb?: boolean
    votes_tmdb?: boolean
    movie_length?: boolean
    poster?: boolean
    backdrop?: boolean
    logo?: boolean
    top_10?: boolean
    top_250?: boolean
    series_length?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imdb_id" | "tmdb_id" | "title" | "description" | "short_description" | "slogan" | "type" | "is_series" | "status" | "year" | "rating_kp" | "rating_age" | "rating_imdb" | "rating_tmdb" | "votes_kp" | "votes_imdb" | "votes_tmdb" | "movie_length" | "poster" | "backdrop" | "logo" | "top_10" | "top_250" | "series_length" | "updated_at" | "created_at", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonInMedia?: boolean | Media$PersonInMediaArgs<ExtArgs>
    Country?: boolean | Media$CountryArgs<ExtArgs>
    Genre?: boolean | Media$GenreArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      PersonInMedia: Prisma.$PersonInMediaPayload<ExtArgs>[]
      Country: Prisma.$CountryPayload<ExtArgs>[]
      Genre: Prisma.$GenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imdb_id: string | null
      tmdb_id: number | null
      title: string
      description: string
      short_description: string | null
      slogan: string | null
      type: $Enums.MediaType
      is_series: boolean | null
      status: $Enums.Status | null
      year: number
      rating_kp: number
      rating_age: number | null
      rating_imdb: number | null
      rating_tmdb: number | null
      votes_kp: number
      votes_imdb: number | null
      votes_tmdb: number | null
      movie_length: number | null
      poster: string
      backdrop: string | null
      logo: string | null
      top_10: number | null
      top_250: number | null
      series_length: number | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PersonInMedia<T extends Media$PersonInMediaArgs<ExtArgs> = {}>(args?: Subset<T, Media$PersonInMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Country<T extends Media$CountryArgs<ExtArgs> = {}>(args?: Subset<T, Media$CountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Genre<T extends Media$GenreArgs<ExtArgs> = {}>(args?: Subset<T, Media$GenreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly imdb_id: FieldRef<"Media", 'String'>
    readonly tmdb_id: FieldRef<"Media", 'Int'>
    readonly title: FieldRef<"Media", 'String'>
    readonly description: FieldRef<"Media", 'String'>
    readonly short_description: FieldRef<"Media", 'String'>
    readonly slogan: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly is_series: FieldRef<"Media", 'Boolean'>
    readonly status: FieldRef<"Media", 'Status'>
    readonly year: FieldRef<"Media", 'Int'>
    readonly rating_kp: FieldRef<"Media", 'Float'>
    readonly rating_age: FieldRef<"Media", 'Int'>
    readonly rating_imdb: FieldRef<"Media", 'Float'>
    readonly rating_tmdb: FieldRef<"Media", 'Float'>
    readonly votes_kp: FieldRef<"Media", 'Int'>
    readonly votes_imdb: FieldRef<"Media", 'Int'>
    readonly votes_tmdb: FieldRef<"Media", 'Int'>
    readonly movie_length: FieldRef<"Media", 'Int'>
    readonly poster: FieldRef<"Media", 'String'>
    readonly backdrop: FieldRef<"Media", 'String'>
    readonly logo: FieldRef<"Media", 'String'>
    readonly top_10: FieldRef<"Media", 'Int'>
    readonly top_250: FieldRef<"Media", 'Int'>
    readonly series_length: FieldRef<"Media", 'Int'>
    readonly updated_at: FieldRef<"Media", 'DateTime'>
    readonly created_at: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.PersonInMedia
   */
  export type Media$PersonInMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    where?: PersonInMediaWhereInput
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    cursor?: PersonInMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonInMediaScalarFieldEnum | PersonInMediaScalarFieldEnum[]
  }

  /**
   * Media.Country
   */
  export type Media$CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Media.Genre
   */
  export type Media$GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    photo: string | null
    name: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    photo: string | null
    name: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    photo: number
    name: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    photo?: true
    name?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    photo?: true
    name?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    photo: string | null
    name: string
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
    PersonInMedia?: boolean | Person$PersonInMediaArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    photo?: boolean
    name?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo" | "name", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonInMedia?: boolean | Person$PersonInMediaArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      PersonInMedia: Prisma.$PersonInMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photo: string | null
      name: string
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PersonInMedia<T extends Person$PersonInMediaArgs<ExtArgs> = {}>(args?: Subset<T, Person$PersonInMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly photo: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.PersonInMedia
   */
  export type Person$PersonInMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    where?: PersonInMediaWhereInput
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    cursor?: PersonInMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonInMediaScalarFieldEnum | PersonInMediaScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model PersonInMedia
   */

  export type AggregatePersonInMedia = {
    _count: PersonInMediaCountAggregateOutputType | null
    _avg: PersonInMediaAvgAggregateOutputType | null
    _sum: PersonInMediaSumAggregateOutputType | null
    _min: PersonInMediaMinAggregateOutputType | null
    _max: PersonInMediaMaxAggregateOutputType | null
  }

  export type PersonInMediaAvgAggregateOutputType = {
    media_id: number | null
    person_id: number | null
  }

  export type PersonInMediaSumAggregateOutputType = {
    media_id: number | null
    person_id: number | null
  }

  export type PersonInMediaMinAggregateOutputType = {
    media_id: number | null
    person_id: number | null
    description: string | null
    profession: string | null
  }

  export type PersonInMediaMaxAggregateOutputType = {
    media_id: number | null
    person_id: number | null
    description: string | null
    profession: string | null
  }

  export type PersonInMediaCountAggregateOutputType = {
    media_id: number
    person_id: number
    description: number
    profession: number
    _all: number
  }


  export type PersonInMediaAvgAggregateInputType = {
    media_id?: true
    person_id?: true
  }

  export type PersonInMediaSumAggregateInputType = {
    media_id?: true
    person_id?: true
  }

  export type PersonInMediaMinAggregateInputType = {
    media_id?: true
    person_id?: true
    description?: true
    profession?: true
  }

  export type PersonInMediaMaxAggregateInputType = {
    media_id?: true
    person_id?: true
    description?: true
    profession?: true
  }

  export type PersonInMediaCountAggregateInputType = {
    media_id?: true
    person_id?: true
    description?: true
    profession?: true
    _all?: true
  }

  export type PersonInMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonInMedia to aggregate.
     */
    where?: PersonInMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonInMedias to fetch.
     */
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonInMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonInMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonInMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonInMedias
    **/
    _count?: true | PersonInMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonInMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonInMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonInMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonInMediaMaxAggregateInputType
  }

  export type GetPersonInMediaAggregateType<T extends PersonInMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonInMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonInMedia[P]>
      : GetScalarType<T[P], AggregatePersonInMedia[P]>
  }




  export type PersonInMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonInMediaWhereInput
    orderBy?: PersonInMediaOrderByWithAggregationInput | PersonInMediaOrderByWithAggregationInput[]
    by: PersonInMediaScalarFieldEnum[] | PersonInMediaScalarFieldEnum
    having?: PersonInMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonInMediaCountAggregateInputType | true
    _avg?: PersonInMediaAvgAggregateInputType
    _sum?: PersonInMediaSumAggregateInputType
    _min?: PersonInMediaMinAggregateInputType
    _max?: PersonInMediaMaxAggregateInputType
  }

  export type PersonInMediaGroupByOutputType = {
    media_id: number
    person_id: number
    description: string | null
    profession: string | null
    _count: PersonInMediaCountAggregateOutputType | null
    _avg: PersonInMediaAvgAggregateOutputType | null
    _sum: PersonInMediaSumAggregateOutputType | null
    _min: PersonInMediaMinAggregateOutputType | null
    _max: PersonInMediaMaxAggregateOutputType | null
  }

  type GetPersonInMediaGroupByPayload<T extends PersonInMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonInMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonInMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonInMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonInMediaGroupByOutputType[P]>
        }
      >
    >


  export type PersonInMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    person_id?: boolean
    description?: boolean
    profession?: boolean
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personInMedia"]>

  export type PersonInMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    person_id?: boolean
    description?: boolean
    profession?: boolean
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personInMedia"]>

  export type PersonInMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    person_id?: boolean
    description?: boolean
    profession?: boolean
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personInMedia"]>

  export type PersonInMediaSelectScalar = {
    media_id?: boolean
    person_id?: boolean
    description?: boolean
    profession?: boolean
  }

  export type PersonInMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"media_id" | "person_id" | "description" | "profession", ExtArgs["result"]["personInMedia"]>
  export type PersonInMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PersonInMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PersonInMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Media?: boolean | MediaDefaultArgs<ExtArgs>
    Person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PersonInMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonInMedia"
    objects: {
      Media: Prisma.$MediaPayload<ExtArgs>
      Person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      media_id: number
      person_id: number
      description: string | null
      profession: string | null
    }, ExtArgs["result"]["personInMedia"]>
    composites: {}
  }

  type PersonInMediaGetPayload<S extends boolean | null | undefined | PersonInMediaDefaultArgs> = $Result.GetResult<Prisma.$PersonInMediaPayload, S>

  type PersonInMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonInMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonInMediaCountAggregateInputType | true
    }

  export interface PersonInMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonInMedia'], meta: { name: 'PersonInMedia' } }
    /**
     * Find zero or one PersonInMedia that matches the filter.
     * @param {PersonInMediaFindUniqueArgs} args - Arguments to find a PersonInMedia
     * @example
     * // Get one PersonInMedia
     * const personInMedia = await prisma.personInMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonInMediaFindUniqueArgs>(args: SelectSubset<T, PersonInMediaFindUniqueArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonInMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonInMediaFindUniqueOrThrowArgs} args - Arguments to find a PersonInMedia
     * @example
     * // Get one PersonInMedia
     * const personInMedia = await prisma.personInMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonInMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonInMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonInMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaFindFirstArgs} args - Arguments to find a PersonInMedia
     * @example
     * // Get one PersonInMedia
     * const personInMedia = await prisma.personInMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonInMediaFindFirstArgs>(args?: SelectSubset<T, PersonInMediaFindFirstArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonInMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaFindFirstOrThrowArgs} args - Arguments to find a PersonInMedia
     * @example
     * // Get one PersonInMedia
     * const personInMedia = await prisma.personInMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonInMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonInMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonInMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonInMedias
     * const personInMedias = await prisma.personInMedia.findMany()
     * 
     * // Get first 10 PersonInMedias
     * const personInMedias = await prisma.personInMedia.findMany({ take: 10 })
     * 
     * // Only select the `media_id`
     * const personInMediaWithMedia_idOnly = await prisma.personInMedia.findMany({ select: { media_id: true } })
     * 
     */
    findMany<T extends PersonInMediaFindManyArgs>(args?: SelectSubset<T, PersonInMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonInMedia.
     * @param {PersonInMediaCreateArgs} args - Arguments to create a PersonInMedia.
     * @example
     * // Create one PersonInMedia
     * const PersonInMedia = await prisma.personInMedia.create({
     *   data: {
     *     // ... data to create a PersonInMedia
     *   }
     * })
     * 
     */
    create<T extends PersonInMediaCreateArgs>(args: SelectSubset<T, PersonInMediaCreateArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonInMedias.
     * @param {PersonInMediaCreateManyArgs} args - Arguments to create many PersonInMedias.
     * @example
     * // Create many PersonInMedias
     * const personInMedia = await prisma.personInMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonInMediaCreateManyArgs>(args?: SelectSubset<T, PersonInMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonInMedias and returns the data saved in the database.
     * @param {PersonInMediaCreateManyAndReturnArgs} args - Arguments to create many PersonInMedias.
     * @example
     * // Create many PersonInMedias
     * const personInMedia = await prisma.personInMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonInMedias and only return the `media_id`
     * const personInMediaWithMedia_idOnly = await prisma.personInMedia.createManyAndReturn({
     *   select: { media_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonInMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonInMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonInMedia.
     * @param {PersonInMediaDeleteArgs} args - Arguments to delete one PersonInMedia.
     * @example
     * // Delete one PersonInMedia
     * const PersonInMedia = await prisma.personInMedia.delete({
     *   where: {
     *     // ... filter to delete one PersonInMedia
     *   }
     * })
     * 
     */
    delete<T extends PersonInMediaDeleteArgs>(args: SelectSubset<T, PersonInMediaDeleteArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonInMedia.
     * @param {PersonInMediaUpdateArgs} args - Arguments to update one PersonInMedia.
     * @example
     * // Update one PersonInMedia
     * const personInMedia = await prisma.personInMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonInMediaUpdateArgs>(args: SelectSubset<T, PersonInMediaUpdateArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonInMedias.
     * @param {PersonInMediaDeleteManyArgs} args - Arguments to filter PersonInMedias to delete.
     * @example
     * // Delete a few PersonInMedias
     * const { count } = await prisma.personInMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonInMediaDeleteManyArgs>(args?: SelectSubset<T, PersonInMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonInMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonInMedias
     * const personInMedia = await prisma.personInMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonInMediaUpdateManyArgs>(args: SelectSubset<T, PersonInMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonInMedias and returns the data updated in the database.
     * @param {PersonInMediaUpdateManyAndReturnArgs} args - Arguments to update many PersonInMedias.
     * @example
     * // Update many PersonInMedias
     * const personInMedia = await prisma.personInMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonInMedias and only return the `media_id`
     * const personInMediaWithMedia_idOnly = await prisma.personInMedia.updateManyAndReturn({
     *   select: { media_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonInMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonInMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonInMedia.
     * @param {PersonInMediaUpsertArgs} args - Arguments to update or create a PersonInMedia.
     * @example
     * // Update or create a PersonInMedia
     * const personInMedia = await prisma.personInMedia.upsert({
     *   create: {
     *     // ... data to create a PersonInMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonInMedia we want to update
     *   }
     * })
     */
    upsert<T extends PersonInMediaUpsertArgs>(args: SelectSubset<T, PersonInMediaUpsertArgs<ExtArgs>>): Prisma__PersonInMediaClient<$Result.GetResult<Prisma.$PersonInMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonInMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaCountArgs} args - Arguments to filter PersonInMedias to count.
     * @example
     * // Count the number of PersonInMedias
     * const count = await prisma.personInMedia.count({
     *   where: {
     *     // ... the filter for the PersonInMedias we want to count
     *   }
     * })
    **/
    count<T extends PersonInMediaCountArgs>(
      args?: Subset<T, PersonInMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonInMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonInMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonInMediaAggregateArgs>(args: Subset<T, PersonInMediaAggregateArgs>): Prisma.PrismaPromise<GetPersonInMediaAggregateType<T>>

    /**
     * Group by PersonInMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonInMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonInMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonInMediaGroupByArgs['orderBy'] }
        : { orderBy?: PersonInMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonInMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonInMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonInMedia model
   */
  readonly fields: PersonInMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonInMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonInMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonInMedia model
   */
  interface PersonInMediaFieldRefs {
    readonly media_id: FieldRef<"PersonInMedia", 'Int'>
    readonly person_id: FieldRef<"PersonInMedia", 'Int'>
    readonly description: FieldRef<"PersonInMedia", 'String'>
    readonly profession: FieldRef<"PersonInMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonInMedia findUnique
   */
  export type PersonInMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter, which PersonInMedia to fetch.
     */
    where: PersonInMediaWhereUniqueInput
  }

  /**
   * PersonInMedia findUniqueOrThrow
   */
  export type PersonInMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter, which PersonInMedia to fetch.
     */
    where: PersonInMediaWhereUniqueInput
  }

  /**
   * PersonInMedia findFirst
   */
  export type PersonInMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter, which PersonInMedia to fetch.
     */
    where?: PersonInMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonInMedias to fetch.
     */
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonInMedias.
     */
    cursor?: PersonInMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonInMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonInMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonInMedias.
     */
    distinct?: PersonInMediaScalarFieldEnum | PersonInMediaScalarFieldEnum[]
  }

  /**
   * PersonInMedia findFirstOrThrow
   */
  export type PersonInMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter, which PersonInMedia to fetch.
     */
    where?: PersonInMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonInMedias to fetch.
     */
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonInMedias.
     */
    cursor?: PersonInMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonInMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonInMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonInMedias.
     */
    distinct?: PersonInMediaScalarFieldEnum | PersonInMediaScalarFieldEnum[]
  }

  /**
   * PersonInMedia findMany
   */
  export type PersonInMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter, which PersonInMedias to fetch.
     */
    where?: PersonInMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonInMedias to fetch.
     */
    orderBy?: PersonInMediaOrderByWithRelationInput | PersonInMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonInMedias.
     */
    cursor?: PersonInMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonInMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonInMedias.
     */
    skip?: number
    distinct?: PersonInMediaScalarFieldEnum | PersonInMediaScalarFieldEnum[]
  }

  /**
   * PersonInMedia create
   */
  export type PersonInMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonInMedia.
     */
    data: XOR<PersonInMediaCreateInput, PersonInMediaUncheckedCreateInput>
  }

  /**
   * PersonInMedia createMany
   */
  export type PersonInMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonInMedias.
     */
    data: PersonInMediaCreateManyInput | PersonInMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonInMedia createManyAndReturn
   */
  export type PersonInMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * The data used to create many PersonInMedias.
     */
    data: PersonInMediaCreateManyInput | PersonInMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonInMedia update
   */
  export type PersonInMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonInMedia.
     */
    data: XOR<PersonInMediaUpdateInput, PersonInMediaUncheckedUpdateInput>
    /**
     * Choose, which PersonInMedia to update.
     */
    where: PersonInMediaWhereUniqueInput
  }

  /**
   * PersonInMedia updateMany
   */
  export type PersonInMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonInMedias.
     */
    data: XOR<PersonInMediaUpdateManyMutationInput, PersonInMediaUncheckedUpdateManyInput>
    /**
     * Filter which PersonInMedias to update
     */
    where?: PersonInMediaWhereInput
    /**
     * Limit how many PersonInMedias to update.
     */
    limit?: number
  }

  /**
   * PersonInMedia updateManyAndReturn
   */
  export type PersonInMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * The data used to update PersonInMedias.
     */
    data: XOR<PersonInMediaUpdateManyMutationInput, PersonInMediaUncheckedUpdateManyInput>
    /**
     * Filter which PersonInMedias to update
     */
    where?: PersonInMediaWhereInput
    /**
     * Limit how many PersonInMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonInMedia upsert
   */
  export type PersonInMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonInMedia to update in case it exists.
     */
    where: PersonInMediaWhereUniqueInput
    /**
     * In case the PersonInMedia found by the `where` argument doesn't exist, create a new PersonInMedia with this data.
     */
    create: XOR<PersonInMediaCreateInput, PersonInMediaUncheckedCreateInput>
    /**
     * In case the PersonInMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonInMediaUpdateInput, PersonInMediaUncheckedUpdateInput>
  }

  /**
   * PersonInMedia delete
   */
  export type PersonInMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
    /**
     * Filter which PersonInMedia to delete.
     */
    where: PersonInMediaWhereUniqueInput
  }

  /**
   * PersonInMedia deleteMany
   */
  export type PersonInMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonInMedias to delete
     */
    where?: PersonInMediaWhereInput
    /**
     * Limit how many PersonInMedias to delete.
     */
    limit?: number
  }

  /**
   * PersonInMedia without action
   */
  export type PersonInMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonInMedia
     */
    select?: PersonInMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonInMedia
     */
    omit?: PersonInMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInMediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    imdb_id: 'imdb_id',
    tmdb_id: 'tmdb_id',
    title: 'title',
    description: 'description',
    short_description: 'short_description',
    slogan: 'slogan',
    type: 'type',
    is_series: 'is_series',
    status: 'status',
    year: 'year',
    rating_kp: 'rating_kp',
    rating_age: 'rating_age',
    rating_imdb: 'rating_imdb',
    rating_tmdb: 'rating_tmdb',
    votes_kp: 'votes_kp',
    votes_imdb: 'votes_imdb',
    votes_tmdb: 'votes_tmdb',
    movie_length: 'movie_length',
    poster: 'poster',
    backdrop: 'backdrop',
    logo: 'logo',
    top_10: 'top_10',
    top_250: 'top_250',
    series_length: 'series_length',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PersonInMediaScalarFieldEnum: {
    media_id: 'media_id',
    person_id: 'person_id',
    description: 'description',
    profession: 'profession'
  };

  export type PersonInMediaScalarFieldEnum = (typeof PersonInMediaScalarFieldEnum)[keyof typeof PersonInMediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    Media?: MediaListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Media?: MediaOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    Media?: MediaListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    Media?: MediaListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Media?: MediaOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    Media?: MediaListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    imdb_id?: StringNullableFilter<"Media"> | string | null
    tmdb_id?: IntNullableFilter<"Media"> | number | null
    title?: StringFilter<"Media"> | string
    description?: StringFilter<"Media"> | string
    short_description?: StringNullableFilter<"Media"> | string | null
    slogan?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    is_series?: BoolNullableFilter<"Media"> | boolean | null
    status?: EnumStatusNullableFilter<"Media"> | $Enums.Status | null
    year?: IntFilter<"Media"> | number
    rating_kp?: FloatFilter<"Media"> | number
    rating_age?: IntNullableFilter<"Media"> | number | null
    rating_imdb?: FloatNullableFilter<"Media"> | number | null
    rating_tmdb?: FloatNullableFilter<"Media"> | number | null
    votes_kp?: IntFilter<"Media"> | number
    votes_imdb?: IntNullableFilter<"Media"> | number | null
    votes_tmdb?: IntNullableFilter<"Media"> | number | null
    movie_length?: IntNullableFilter<"Media"> | number | null
    poster?: StringFilter<"Media"> | string
    backdrop?: StringNullableFilter<"Media"> | string | null
    logo?: StringNullableFilter<"Media"> | string | null
    top_10?: IntNullableFilter<"Media"> | number | null
    top_250?: IntNullableFilter<"Media"> | number | null
    series_length?: IntNullableFilter<"Media"> | number | null
    updated_at?: DateTimeFilter<"Media"> | Date | string
    created_at?: DateTimeFilter<"Media"> | Date | string
    PersonInMedia?: PersonInMediaListRelationFilter
    Country?: CountryListRelationFilter
    Genre?: GenreListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    imdb_id?: SortOrderInput | SortOrder
    tmdb_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    short_description?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    type?: SortOrder
    is_series?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrderInput | SortOrder
    rating_imdb?: SortOrderInput | SortOrder
    rating_tmdb?: SortOrderInput | SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrderInput | SortOrder
    votes_tmdb?: SortOrderInput | SortOrder
    movie_length?: SortOrderInput | SortOrder
    poster?: SortOrder
    backdrop?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    top_10?: SortOrderInput | SortOrder
    top_250?: SortOrderInput | SortOrder
    series_length?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    PersonInMedia?: PersonInMediaOrderByRelationAggregateInput
    Country?: CountryOrderByRelationAggregateInput
    Genre?: GenreOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    imdb_id?: StringNullableFilter<"Media"> | string | null
    tmdb_id?: IntNullableFilter<"Media"> | number | null
    title?: StringFilter<"Media"> | string
    description?: StringFilter<"Media"> | string
    short_description?: StringNullableFilter<"Media"> | string | null
    slogan?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    is_series?: BoolNullableFilter<"Media"> | boolean | null
    status?: EnumStatusNullableFilter<"Media"> | $Enums.Status | null
    year?: IntFilter<"Media"> | number
    rating_kp?: FloatFilter<"Media"> | number
    rating_age?: IntNullableFilter<"Media"> | number | null
    rating_imdb?: FloatNullableFilter<"Media"> | number | null
    rating_tmdb?: FloatNullableFilter<"Media"> | number | null
    votes_kp?: IntFilter<"Media"> | number
    votes_imdb?: IntNullableFilter<"Media"> | number | null
    votes_tmdb?: IntNullableFilter<"Media"> | number | null
    movie_length?: IntNullableFilter<"Media"> | number | null
    poster?: StringFilter<"Media"> | string
    backdrop?: StringNullableFilter<"Media"> | string | null
    logo?: StringNullableFilter<"Media"> | string | null
    top_10?: IntNullableFilter<"Media"> | number | null
    top_250?: IntNullableFilter<"Media"> | number | null
    series_length?: IntNullableFilter<"Media"> | number | null
    updated_at?: DateTimeFilter<"Media"> | Date | string
    created_at?: DateTimeFilter<"Media"> | Date | string
    PersonInMedia?: PersonInMediaListRelationFilter
    Country?: CountryListRelationFilter
    Genre?: GenreListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    imdb_id?: SortOrderInput | SortOrder
    tmdb_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    short_description?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    type?: SortOrder
    is_series?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrderInput | SortOrder
    rating_imdb?: SortOrderInput | SortOrder
    rating_tmdb?: SortOrderInput | SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrderInput | SortOrder
    votes_tmdb?: SortOrderInput | SortOrder
    movie_length?: SortOrderInput | SortOrder
    poster?: SortOrder
    backdrop?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    top_10?: SortOrderInput | SortOrder
    top_250?: SortOrderInput | SortOrder
    series_length?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    imdb_id?: StringNullableWithAggregatesFilter<"Media"> | string | null
    tmdb_id?: IntNullableWithAggregatesFilter<"Media"> | number | null
    title?: StringWithAggregatesFilter<"Media"> | string
    description?: StringWithAggregatesFilter<"Media"> | string
    short_description?: StringNullableWithAggregatesFilter<"Media"> | string | null
    slogan?: StringNullableWithAggregatesFilter<"Media"> | string | null
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    is_series?: BoolNullableWithAggregatesFilter<"Media"> | boolean | null
    status?: EnumStatusNullableWithAggregatesFilter<"Media"> | $Enums.Status | null
    year?: IntWithAggregatesFilter<"Media"> | number
    rating_kp?: FloatWithAggregatesFilter<"Media"> | number
    rating_age?: IntNullableWithAggregatesFilter<"Media"> | number | null
    rating_imdb?: FloatNullableWithAggregatesFilter<"Media"> | number | null
    rating_tmdb?: FloatNullableWithAggregatesFilter<"Media"> | number | null
    votes_kp?: IntWithAggregatesFilter<"Media"> | number
    votes_imdb?: IntNullableWithAggregatesFilter<"Media"> | number | null
    votes_tmdb?: IntNullableWithAggregatesFilter<"Media"> | number | null
    movie_length?: IntNullableWithAggregatesFilter<"Media"> | number | null
    poster?: StringWithAggregatesFilter<"Media"> | string
    backdrop?: StringNullableWithAggregatesFilter<"Media"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Media"> | string | null
    top_10?: IntNullableWithAggregatesFilter<"Media"> | number | null
    top_250?: IntNullableWithAggregatesFilter<"Media"> | number | null
    series_length?: IntNullableWithAggregatesFilter<"Media"> | number | null
    updated_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    photo?: StringNullableFilter<"Person"> | string | null
    name?: StringFilter<"Person"> | string
    PersonInMedia?: PersonInMediaListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    PersonInMedia?: PersonInMediaOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    photo?: StringNullableFilter<"Person"> | string | null
    name?: StringFilter<"Person"> | string
    PersonInMedia?: PersonInMediaListRelationFilter
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    photo?: StringNullableWithAggregatesFilter<"Person"> | string | null
    name?: StringWithAggregatesFilter<"Person"> | string
  }

  export type PersonInMediaWhereInput = {
    AND?: PersonInMediaWhereInput | PersonInMediaWhereInput[]
    OR?: PersonInMediaWhereInput[]
    NOT?: PersonInMediaWhereInput | PersonInMediaWhereInput[]
    media_id?: IntFilter<"PersonInMedia"> | number
    person_id?: IntFilter<"PersonInMedia"> | number
    description?: StringNullableFilter<"PersonInMedia"> | string | null
    profession?: StringNullableFilter<"PersonInMedia"> | string | null
    Media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    Person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type PersonInMediaOrderByWithRelationInput = {
    media_id?: SortOrder
    person_id?: SortOrder
    description?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    Media?: MediaOrderByWithRelationInput
    Person?: PersonOrderByWithRelationInput
  }

  export type PersonInMediaWhereUniqueInput = Prisma.AtLeast<{
    media_id_person_id?: PersonInMediaMedia_idPerson_idCompoundUniqueInput
    AND?: PersonInMediaWhereInput | PersonInMediaWhereInput[]
    OR?: PersonInMediaWhereInput[]
    NOT?: PersonInMediaWhereInput | PersonInMediaWhereInput[]
    media_id?: IntFilter<"PersonInMedia"> | number
    person_id?: IntFilter<"PersonInMedia"> | number
    description?: StringNullableFilter<"PersonInMedia"> | string | null
    profession?: StringNullableFilter<"PersonInMedia"> | string | null
    Media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    Person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "media_id_person_id">

  export type PersonInMediaOrderByWithAggregationInput = {
    media_id?: SortOrder
    person_id?: SortOrder
    description?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    _count?: PersonInMediaCountOrderByAggregateInput
    _avg?: PersonInMediaAvgOrderByAggregateInput
    _max?: PersonInMediaMaxOrderByAggregateInput
    _min?: PersonInMediaMinOrderByAggregateInput
    _sum?: PersonInMediaSumOrderByAggregateInput
  }

  export type PersonInMediaScalarWhereWithAggregatesInput = {
    AND?: PersonInMediaScalarWhereWithAggregatesInput | PersonInMediaScalarWhereWithAggregatesInput[]
    OR?: PersonInMediaScalarWhereWithAggregatesInput[]
    NOT?: PersonInMediaScalarWhereWithAggregatesInput | PersonInMediaScalarWhereWithAggregatesInput[]
    media_id?: IntWithAggregatesFilter<"PersonInMedia"> | number
    person_id?: IntWithAggregatesFilter<"PersonInMedia"> | number
    description?: StringNullableWithAggregatesFilter<"PersonInMedia"> | string | null
    profession?: StringNullableWithAggregatesFilter<"PersonInMedia"> | string | null
  }

  export type CountryCreateInput = {
    name: string
    Media?: MediaCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    Media?: MediaUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Media?: MediaUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Media?: MediaUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
    Media?: MediaCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    Media?: MediaUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Media?: MediaUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Media?: MediaUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaCreateNestedManyWithoutMediaInput
    Country?: CountryCreateNestedManyWithoutMediaInput
    Genre?: GenreCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaUncheckedCreateNestedManyWithoutMediaInput
    Country?: CountryUncheckedCreateNestedManyWithoutMediaInput
    Genre?: GenreUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUpdateManyWithoutMediaNestedInput
    Country?: CountryUpdateManyWithoutMediaNestedInput
    Genre?: GenreUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUncheckedUpdateManyWithoutMediaNestedInput
    Country?: CountryUncheckedUpdateManyWithoutMediaNestedInput
    Genre?: GenreUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id: number
    photo?: string | null
    name: string
    PersonInMedia?: PersonInMediaCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id: number
    photo?: string | null
    name: string
    PersonInMedia?: PersonInMediaUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    PersonInMedia?: PersonInMediaUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    PersonInMedia?: PersonInMediaUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id: number
    photo?: string | null
    name: string
  }

  export type PersonUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonInMediaCreateInput = {
    description?: string | null
    profession?: string | null
    Media: MediaCreateNestedOneWithoutPersonInMediaInput
    Person: PersonCreateNestedOneWithoutPersonInMediaInput
  }

  export type PersonInMediaUncheckedCreateInput = {
    media_id: number
    person_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    Media?: MediaUpdateOneRequiredWithoutPersonInMediaNestedInput
    Person?: PersonUpdateOneRequiredWithoutPersonInMediaNestedInput
  }

  export type PersonInMediaUncheckedUpdateInput = {
    media_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonInMediaCreateManyInput = {
    media_id: number
    person_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonInMediaUncheckedUpdateManyInput = {
    media_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonInMediaListRelationFilter = {
    every?: PersonInMediaWhereInput
    some?: PersonInMediaWhereInput
    none?: PersonInMediaWhereInput
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonInMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    imdb_id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    short_description?: SortOrder
    slogan?: SortOrder
    type?: SortOrder
    is_series?: SortOrder
    status?: SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrder
    rating_imdb?: SortOrder
    rating_tmdb?: SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrder
    votes_tmdb?: SortOrder
    movie_length?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    logo?: SortOrder
    top_10?: SortOrder
    top_250?: SortOrder
    series_length?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrder
    rating_imdb?: SortOrder
    rating_tmdb?: SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrder
    votes_tmdb?: SortOrder
    movie_length?: SortOrder
    top_10?: SortOrder
    top_250?: SortOrder
    series_length?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    imdb_id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    short_description?: SortOrder
    slogan?: SortOrder
    type?: SortOrder
    is_series?: SortOrder
    status?: SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrder
    rating_imdb?: SortOrder
    rating_tmdb?: SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrder
    votes_tmdb?: SortOrder
    movie_length?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    logo?: SortOrder
    top_10?: SortOrder
    top_250?: SortOrder
    series_length?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    imdb_id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    short_description?: SortOrder
    slogan?: SortOrder
    type?: SortOrder
    is_series?: SortOrder
    status?: SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrder
    rating_imdb?: SortOrder
    rating_tmdb?: SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrder
    votes_tmdb?: SortOrder
    movie_length?: SortOrder
    poster?: SortOrder
    backdrop?: SortOrder
    logo?: SortOrder
    top_10?: SortOrder
    top_250?: SortOrder
    series_length?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    year?: SortOrder
    rating_kp?: SortOrder
    rating_age?: SortOrder
    rating_imdb?: SortOrder
    rating_tmdb?: SortOrder
    votes_kp?: SortOrder
    votes_imdb?: SortOrder
    votes_tmdb?: SortOrder
    movie_length?: SortOrder
    top_10?: SortOrder
    top_250?: SortOrder
    series_length?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type PersonInMediaMedia_idPerson_idCompoundUniqueInput = {
    media_id: number
    person_id: number
  }

  export type PersonInMediaCountOrderByAggregateInput = {
    media_id?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    profession?: SortOrder
  }

  export type PersonInMediaAvgOrderByAggregateInput = {
    media_id?: SortOrder
    person_id?: SortOrder
  }

  export type PersonInMediaMaxOrderByAggregateInput = {
    media_id?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    profession?: SortOrder
  }

  export type PersonInMediaMinOrderByAggregateInput = {
    media_id?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    profession?: SortOrder
  }

  export type PersonInMediaSumOrderByAggregateInput = {
    media_id?: SortOrder
    person_id?: SortOrder
  }

  export type MediaCreateNestedManyWithoutCountryInput = {
    create?: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput> | MediaCreateWithoutCountryInput[] | MediaUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCountryInput | MediaCreateOrConnectWithoutCountryInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput> | MediaCreateWithoutCountryInput[] | MediaUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCountryInput | MediaCreateOrConnectWithoutCountryInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MediaUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput> | MediaCreateWithoutCountryInput[] | MediaUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCountryInput | MediaCreateOrConnectWithoutCountryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCountryInput | MediaUpsertWithWhereUniqueWithoutCountryInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCountryInput | MediaUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCountryInput | MediaUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediaUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput> | MediaCreateWithoutCountryInput[] | MediaUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCountryInput | MediaCreateOrConnectWithoutCountryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCountryInput | MediaUpsertWithWhereUniqueWithoutCountryInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCountryInput | MediaUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCountryInput | MediaUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MediaCreateNestedManyWithoutGenreInput = {
    create?: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput> | MediaCreateWithoutGenreInput[] | MediaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutGenreInput | MediaCreateOrConnectWithoutGenreInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput> | MediaCreateWithoutGenreInput[] | MediaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutGenreInput | MediaCreateOrConnectWithoutGenreInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput> | MediaCreateWithoutGenreInput[] | MediaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutGenreInput | MediaCreateOrConnectWithoutGenreInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutGenreInput | MediaUpsertWithWhereUniqueWithoutGenreInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutGenreInput | MediaUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutGenreInput | MediaUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput> | MediaCreateWithoutGenreInput[] | MediaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutGenreInput | MediaCreateOrConnectWithoutGenreInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutGenreInput | MediaUpsertWithWhereUniqueWithoutGenreInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutGenreInput | MediaUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutGenreInput | MediaUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type PersonInMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput> | PersonInMediaCreateWithoutMediaInput[] | PersonInMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutMediaInput | PersonInMediaCreateOrConnectWithoutMediaInput[]
    createMany?: PersonInMediaCreateManyMediaInputEnvelope
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
  }

  export type CountryCreateNestedManyWithoutMediaInput = {
    create?: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput> | CountryCreateWithoutMediaInput[] | CountryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutMediaInput | CountryCreateOrConnectWithoutMediaInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type GenreCreateNestedManyWithoutMediaInput = {
    create?: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput> | GenreCreateWithoutMediaInput[] | GenreUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMediaInput | GenreCreateOrConnectWithoutMediaInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PersonInMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput> | PersonInMediaCreateWithoutMediaInput[] | PersonInMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutMediaInput | PersonInMediaCreateOrConnectWithoutMediaInput[]
    createMany?: PersonInMediaCreateManyMediaInputEnvelope
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput> | CountryCreateWithoutMediaInput[] | CountryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutMediaInput | CountryCreateOrConnectWithoutMediaInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput> | GenreCreateWithoutMediaInput[] | GenreUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMediaInput | GenreCreateOrConnectWithoutMediaInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonInMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput> | PersonInMediaCreateWithoutMediaInput[] | PersonInMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutMediaInput | PersonInMediaCreateOrConnectWithoutMediaInput[]
    upsert?: PersonInMediaUpsertWithWhereUniqueWithoutMediaInput | PersonInMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PersonInMediaCreateManyMediaInputEnvelope
    set?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    disconnect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    delete?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    update?: PersonInMediaUpdateWithWhereUniqueWithoutMediaInput | PersonInMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PersonInMediaUpdateManyWithWhereWithoutMediaInput | PersonInMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
  }

  export type CountryUpdateManyWithoutMediaNestedInput = {
    create?: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput> | CountryCreateWithoutMediaInput[] | CountryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutMediaInput | CountryCreateOrConnectWithoutMediaInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutMediaInput | CountryUpsertWithWhereUniqueWithoutMediaInput[]
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutMediaInput | CountryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutMediaInput | CountryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type GenreUpdateManyWithoutMediaNestedInput = {
    create?: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput> | GenreCreateWithoutMediaInput[] | GenreUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMediaInput | GenreCreateOrConnectWithoutMediaInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMediaInput | GenreUpsertWithWhereUniqueWithoutMediaInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMediaInput | GenreUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMediaInput | GenreUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PersonInMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput> | PersonInMediaCreateWithoutMediaInput[] | PersonInMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutMediaInput | PersonInMediaCreateOrConnectWithoutMediaInput[]
    upsert?: PersonInMediaUpsertWithWhereUniqueWithoutMediaInput | PersonInMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PersonInMediaCreateManyMediaInputEnvelope
    set?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    disconnect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    delete?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    update?: PersonInMediaUpdateWithWhereUniqueWithoutMediaInput | PersonInMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PersonInMediaUpdateManyWithWhereWithoutMediaInput | PersonInMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput> | CountryCreateWithoutMediaInput[] | CountryUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutMediaInput | CountryCreateOrConnectWithoutMediaInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutMediaInput | CountryUpsertWithWhereUniqueWithoutMediaInput[]
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutMediaInput | CountryUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutMediaInput | CountryUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput> | GenreCreateWithoutMediaInput[] | GenreUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMediaInput | GenreCreateOrConnectWithoutMediaInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMediaInput | GenreUpsertWithWhereUniqueWithoutMediaInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMediaInput | GenreUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMediaInput | GenreUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PersonInMediaCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput> | PersonInMediaCreateWithoutPersonInput[] | PersonInMediaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutPersonInput | PersonInMediaCreateOrConnectWithoutPersonInput[]
    createMany?: PersonInMediaCreateManyPersonInputEnvelope
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
  }

  export type PersonInMediaUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput> | PersonInMediaCreateWithoutPersonInput[] | PersonInMediaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutPersonInput | PersonInMediaCreateOrConnectWithoutPersonInput[]
    createMany?: PersonInMediaCreateManyPersonInputEnvelope
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
  }

  export type PersonInMediaUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput> | PersonInMediaCreateWithoutPersonInput[] | PersonInMediaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutPersonInput | PersonInMediaCreateOrConnectWithoutPersonInput[]
    upsert?: PersonInMediaUpsertWithWhereUniqueWithoutPersonInput | PersonInMediaUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonInMediaCreateManyPersonInputEnvelope
    set?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    disconnect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    delete?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    update?: PersonInMediaUpdateWithWhereUniqueWithoutPersonInput | PersonInMediaUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonInMediaUpdateManyWithWhereWithoutPersonInput | PersonInMediaUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
  }

  export type PersonInMediaUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput> | PersonInMediaCreateWithoutPersonInput[] | PersonInMediaUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonInMediaCreateOrConnectWithoutPersonInput | PersonInMediaCreateOrConnectWithoutPersonInput[]
    upsert?: PersonInMediaUpsertWithWhereUniqueWithoutPersonInput | PersonInMediaUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonInMediaCreateManyPersonInputEnvelope
    set?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    disconnect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    delete?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    connect?: PersonInMediaWhereUniqueInput | PersonInMediaWhereUniqueInput[]
    update?: PersonInMediaUpdateWithWhereUniqueWithoutPersonInput | PersonInMediaUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonInMediaUpdateManyWithWhereWithoutPersonInput | PersonInMediaUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
  }

  export type MediaCreateNestedOneWithoutPersonInMediaInput = {
    create?: XOR<MediaCreateWithoutPersonInMediaInput, MediaUncheckedCreateWithoutPersonInMediaInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPersonInMediaInput
    connect?: MediaWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutPersonInMediaInput = {
    create?: XOR<PersonCreateWithoutPersonInMediaInput, PersonUncheckedCreateWithoutPersonInMediaInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPersonInMediaInput
    connect?: PersonWhereUniqueInput
  }

  export type MediaUpdateOneRequiredWithoutPersonInMediaNestedInput = {
    create?: XOR<MediaCreateWithoutPersonInMediaInput, MediaUncheckedCreateWithoutPersonInMediaInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPersonInMediaInput
    upsert?: MediaUpsertWithoutPersonInMediaInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutPersonInMediaInput, MediaUpdateWithoutPersonInMediaInput>, MediaUncheckedUpdateWithoutPersonInMediaInput>
  }

  export type PersonUpdateOneRequiredWithoutPersonInMediaNestedInput = {
    create?: XOR<PersonCreateWithoutPersonInMediaInput, PersonUncheckedCreateWithoutPersonInMediaInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPersonInMediaInput
    upsert?: PersonUpsertWithoutPersonInMediaInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPersonInMediaInput, PersonUpdateWithoutPersonInMediaInput>, PersonUncheckedUpdateWithoutPersonInMediaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MediaCreateWithoutCountryInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaCreateNestedManyWithoutMediaInput
    Genre?: GenreCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutCountryInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaUncheckedCreateNestedManyWithoutMediaInput
    Genre?: GenreUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutCountryInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutCountryInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutCountryInput, MediaUncheckedUpdateWithoutCountryInput>
    create: XOR<MediaCreateWithoutCountryInput, MediaUncheckedCreateWithoutCountryInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutCountryInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutCountryInput, MediaUncheckedUpdateWithoutCountryInput>
  }

  export type MediaUpdateManyWithWhereWithoutCountryInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutCountryInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    imdb_id?: StringNullableFilter<"Media"> | string | null
    tmdb_id?: IntNullableFilter<"Media"> | number | null
    title?: StringFilter<"Media"> | string
    description?: StringFilter<"Media"> | string
    short_description?: StringNullableFilter<"Media"> | string | null
    slogan?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    is_series?: BoolNullableFilter<"Media"> | boolean | null
    status?: EnumStatusNullableFilter<"Media"> | $Enums.Status | null
    year?: IntFilter<"Media"> | number
    rating_kp?: FloatFilter<"Media"> | number
    rating_age?: IntNullableFilter<"Media"> | number | null
    rating_imdb?: FloatNullableFilter<"Media"> | number | null
    rating_tmdb?: FloatNullableFilter<"Media"> | number | null
    votes_kp?: IntFilter<"Media"> | number
    votes_imdb?: IntNullableFilter<"Media"> | number | null
    votes_tmdb?: IntNullableFilter<"Media"> | number | null
    movie_length?: IntNullableFilter<"Media"> | number | null
    poster?: StringFilter<"Media"> | string
    backdrop?: StringNullableFilter<"Media"> | string | null
    logo?: StringNullableFilter<"Media"> | string | null
    top_10?: IntNullableFilter<"Media"> | number | null
    top_250?: IntNullableFilter<"Media"> | number | null
    series_length?: IntNullableFilter<"Media"> | number | null
    updated_at?: DateTimeFilter<"Media"> | Date | string
    created_at?: DateTimeFilter<"Media"> | Date | string
  }

  export type MediaCreateWithoutGenreInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaCreateNestedManyWithoutMediaInput
    Country?: CountryCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutGenreInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    PersonInMedia?: PersonInMediaUncheckedCreateNestedManyWithoutMediaInput
    Country?: CountryUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutGenreInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutGenreInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutGenreInput, MediaUncheckedUpdateWithoutGenreInput>
    create: XOR<MediaCreateWithoutGenreInput, MediaUncheckedCreateWithoutGenreInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutGenreInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutGenreInput, MediaUncheckedUpdateWithoutGenreInput>
  }

  export type MediaUpdateManyWithWhereWithoutGenreInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutGenreInput>
  }

  export type PersonInMediaCreateWithoutMediaInput = {
    description?: string | null
    profession?: string | null
    Person: PersonCreateNestedOneWithoutPersonInMediaInput
  }

  export type PersonInMediaUncheckedCreateWithoutMediaInput = {
    person_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaCreateOrConnectWithoutMediaInput = {
    where: PersonInMediaWhereUniqueInput
    create: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput>
  }

  export type PersonInMediaCreateManyMediaInputEnvelope = {
    data: PersonInMediaCreateManyMediaInput | PersonInMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type CountryCreateWithoutMediaInput = {
    name: string
  }

  export type CountryUncheckedCreateWithoutMediaInput = {
    id?: number
    name: string
  }

  export type CountryCreateOrConnectWithoutMediaInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput>
  }

  export type GenreCreateWithoutMediaInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutMediaInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutMediaInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput>
  }

  export type PersonInMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: PersonInMediaWhereUniqueInput
    update: XOR<PersonInMediaUpdateWithoutMediaInput, PersonInMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<PersonInMediaCreateWithoutMediaInput, PersonInMediaUncheckedCreateWithoutMediaInput>
  }

  export type PersonInMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: PersonInMediaWhereUniqueInput
    data: XOR<PersonInMediaUpdateWithoutMediaInput, PersonInMediaUncheckedUpdateWithoutMediaInput>
  }

  export type PersonInMediaUpdateManyWithWhereWithoutMediaInput = {
    where: PersonInMediaScalarWhereInput
    data: XOR<PersonInMediaUpdateManyMutationInput, PersonInMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type PersonInMediaScalarWhereInput = {
    AND?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
    OR?: PersonInMediaScalarWhereInput[]
    NOT?: PersonInMediaScalarWhereInput | PersonInMediaScalarWhereInput[]
    media_id?: IntFilter<"PersonInMedia"> | number
    person_id?: IntFilter<"PersonInMedia"> | number
    description?: StringNullableFilter<"PersonInMedia"> | string | null
    profession?: StringNullableFilter<"PersonInMedia"> | string | null
  }

  export type CountryUpsertWithWhereUniqueWithoutMediaInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutMediaInput, CountryUncheckedUpdateWithoutMediaInput>
    create: XOR<CountryCreateWithoutMediaInput, CountryUncheckedCreateWithoutMediaInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutMediaInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutMediaInput, CountryUncheckedUpdateWithoutMediaInput>
  }

  export type CountryUpdateManyWithWhereWithoutMediaInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutMediaInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
  }

  export type GenreUpsertWithWhereUniqueWithoutMediaInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutMediaInput, GenreUncheckedUpdateWithoutMediaInput>
    create: XOR<GenreCreateWithoutMediaInput, GenreUncheckedCreateWithoutMediaInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutMediaInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutMediaInput, GenreUncheckedUpdateWithoutMediaInput>
  }

  export type GenreUpdateManyWithWhereWithoutMediaInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutMediaInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
  }

  export type PersonInMediaCreateWithoutPersonInput = {
    description?: string | null
    profession?: string | null
    Media: MediaCreateNestedOneWithoutPersonInMediaInput
  }

  export type PersonInMediaUncheckedCreateWithoutPersonInput = {
    media_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaCreateOrConnectWithoutPersonInput = {
    where: PersonInMediaWhereUniqueInput
    create: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput>
  }

  export type PersonInMediaCreateManyPersonInputEnvelope = {
    data: PersonInMediaCreateManyPersonInput | PersonInMediaCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PersonInMediaUpsertWithWhereUniqueWithoutPersonInput = {
    where: PersonInMediaWhereUniqueInput
    update: XOR<PersonInMediaUpdateWithoutPersonInput, PersonInMediaUncheckedUpdateWithoutPersonInput>
    create: XOR<PersonInMediaCreateWithoutPersonInput, PersonInMediaUncheckedCreateWithoutPersonInput>
  }

  export type PersonInMediaUpdateWithWhereUniqueWithoutPersonInput = {
    where: PersonInMediaWhereUniqueInput
    data: XOR<PersonInMediaUpdateWithoutPersonInput, PersonInMediaUncheckedUpdateWithoutPersonInput>
  }

  export type PersonInMediaUpdateManyWithWhereWithoutPersonInput = {
    where: PersonInMediaScalarWhereInput
    data: XOR<PersonInMediaUpdateManyMutationInput, PersonInMediaUncheckedUpdateManyWithoutPersonInput>
  }

  export type MediaCreateWithoutPersonInMediaInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    Country?: CountryCreateNestedManyWithoutMediaInput
    Genre?: GenreCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutPersonInMediaInput = {
    id: number
    imdb_id?: string | null
    tmdb_id?: number | null
    title: string
    description: string
    short_description?: string | null
    slogan?: string | null
    type: $Enums.MediaType
    is_series?: boolean | null
    status?: $Enums.Status | null
    year: number
    rating_kp: number
    rating_age?: number | null
    rating_imdb?: number | null
    rating_tmdb?: number | null
    votes_kp: number
    votes_imdb?: number | null
    votes_tmdb?: number | null
    movie_length?: number | null
    poster: string
    backdrop?: string | null
    logo?: string | null
    top_10?: number | null
    top_250?: number | null
    series_length?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    Country?: CountryUncheckedCreateNestedManyWithoutMediaInput
    Genre?: GenreUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutPersonInMediaInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutPersonInMediaInput, MediaUncheckedCreateWithoutPersonInMediaInput>
  }

  export type PersonCreateWithoutPersonInMediaInput = {
    id: number
    photo?: string | null
    name: string
  }

  export type PersonUncheckedCreateWithoutPersonInMediaInput = {
    id: number
    photo?: string | null
    name: string
  }

  export type PersonCreateOrConnectWithoutPersonInMediaInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPersonInMediaInput, PersonUncheckedCreateWithoutPersonInMediaInput>
  }

  export type MediaUpsertWithoutPersonInMediaInput = {
    update: XOR<MediaUpdateWithoutPersonInMediaInput, MediaUncheckedUpdateWithoutPersonInMediaInput>
    create: XOR<MediaCreateWithoutPersonInMediaInput, MediaUncheckedCreateWithoutPersonInMediaInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutPersonInMediaInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutPersonInMediaInput, MediaUncheckedUpdateWithoutPersonInMediaInput>
  }

  export type MediaUpdateWithoutPersonInMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Country?: CountryUpdateManyWithoutMediaNestedInput
    Genre?: GenreUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutPersonInMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Country?: CountryUncheckedUpdateManyWithoutMediaNestedInput
    Genre?: GenreUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type PersonUpsertWithoutPersonInMediaInput = {
    update: XOR<PersonUpdateWithoutPersonInMediaInput, PersonUncheckedUpdateWithoutPersonInMediaInput>
    create: XOR<PersonCreateWithoutPersonInMediaInput, PersonUncheckedCreateWithoutPersonInMediaInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPersonInMediaInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPersonInMediaInput, PersonUncheckedUpdateWithoutPersonInMediaInput>
  }

  export type PersonUpdateWithoutPersonInMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUncheckedUpdateWithoutPersonInMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MediaUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUpdateManyWithoutMediaNestedInput
    Genre?: GenreUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUncheckedUpdateManyWithoutMediaNestedInput
    Genre?: GenreUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUpdateManyWithoutMediaNestedInput
    Country?: CountryUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonInMedia?: PersonInMediaUncheckedUpdateManyWithoutMediaNestedInput
    Country?: CountryUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    imdb_id?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    year?: IntFieldUpdateOperationsInput | number
    rating_kp?: FloatFieldUpdateOperationsInput | number
    rating_age?: NullableIntFieldUpdateOperationsInput | number | null
    rating_imdb?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
    votes_kp?: IntFieldUpdateOperationsInput | number
    votes_imdb?: NullableIntFieldUpdateOperationsInput | number | null
    votes_tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    movie_length?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: StringFieldUpdateOperationsInput | string
    backdrop?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    top_10?: NullableIntFieldUpdateOperationsInput | number | null
    top_250?: NullableIntFieldUpdateOperationsInput | number | null
    series_length?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonInMediaCreateManyMediaInput = {
    person_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaUpdateWithoutMediaInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    Person?: PersonUpdateOneRequiredWithoutPersonInMediaNestedInput
  }

  export type PersonInMediaUncheckedUpdateWithoutMediaInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonInMediaUncheckedUpdateManyWithoutMediaInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonInMediaCreateManyPersonInput = {
    media_id: number
    description?: string | null
    profession?: string | null
  }

  export type PersonInMediaUpdateWithoutPersonInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    Media?: MediaUpdateOneRequiredWithoutPersonInMediaNestedInput
  }

  export type PersonInMediaUncheckedUpdateWithoutPersonInput = {
    media_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonInMediaUncheckedUpdateManyWithoutPersonInput = {
    media_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}