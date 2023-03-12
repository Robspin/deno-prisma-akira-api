
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model BotStatus
 * 
 */
export type BotStatus = {
  id: number
  key: string
  hasPosition: boolean
  direction: string
  updatedAt: Date
}

/**
 * Model PageViews
 * 
 */
export type PageViews = {
  id: number
  pageKey: string
  views: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BotStatuses
 * const botStatuses = await prisma.botStatus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BotStatuses
   * const botStatuses = await prisma.botStatus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.botStatus`: Exposes CRUD operations for the **BotStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotStatuses
    * const botStatuses = await prisma.botStatus.findMany()
    * ```
    */
  get botStatus(): Prisma.BotStatusDelegate<GlobalReject>;

  /**
   * `prisma.pageViews`: Exposes CRUD operations for the **PageViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViews
    * const pageViews = await prisma.pageViews.findMany()
    * ```
    */
  get pageViews(): Prisma.PageViewsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BotStatus: 'BotStatus',
    PageViews: 'PageViews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BotStatus
   */


  export type AggregateBotStatus = {
    _count: BotStatusCountAggregateOutputType | null
    _avg: BotStatusAvgAggregateOutputType | null
    _sum: BotStatusSumAggregateOutputType | null
    _min: BotStatusMinAggregateOutputType | null
    _max: BotStatusMaxAggregateOutputType | null
  }

  export type BotStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type BotStatusSumAggregateOutputType = {
    id: number | null
  }

  export type BotStatusMinAggregateOutputType = {
    id: number | null
    key: string | null
    hasPosition: boolean | null
    direction: string | null
    updatedAt: Date | null
  }

  export type BotStatusMaxAggregateOutputType = {
    id: number | null
    key: string | null
    hasPosition: boolean | null
    direction: string | null
    updatedAt: Date | null
  }

  export type BotStatusCountAggregateOutputType = {
    id: number
    key: number
    hasPosition: number
    direction: number
    updatedAt: number
    _all: number
  }


  export type BotStatusAvgAggregateInputType = {
    id?: true
  }

  export type BotStatusSumAggregateInputType = {
    id?: true
  }

  export type BotStatusMinAggregateInputType = {
    id?: true
    key?: true
    hasPosition?: true
    direction?: true
    updatedAt?: true
  }

  export type BotStatusMaxAggregateInputType = {
    id?: true
    key?: true
    hasPosition?: true
    direction?: true
    updatedAt?: true
  }

  export type BotStatusCountAggregateInputType = {
    id?: true
    key?: true
    hasPosition?: true
    direction?: true
    updatedAt?: true
    _all?: true
  }

  export type BotStatusAggregateArgs = {
    /**
     * Filter which BotStatus to aggregate.
     */
    where?: BotStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatuses to fetch.
     */
    orderBy?: Enumerable<BotStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotStatuses
    **/
    _count?: true | BotStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotStatusMaxAggregateInputType
  }

  export type GetBotStatusAggregateType<T extends BotStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateBotStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotStatus[P]>
      : GetScalarType<T[P], AggregateBotStatus[P]>
  }




  export type BotStatusGroupByArgs = {
    where?: BotStatusWhereInput
    orderBy?: Enumerable<BotStatusOrderByWithAggregationInput>
    by: BotStatusScalarFieldEnum[]
    having?: BotStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotStatusCountAggregateInputType | true
    _avg?: BotStatusAvgAggregateInputType
    _sum?: BotStatusSumAggregateInputType
    _min?: BotStatusMinAggregateInputType
    _max?: BotStatusMaxAggregateInputType
  }


  export type BotStatusGroupByOutputType = {
    id: number
    key: string
    hasPosition: boolean
    direction: string
    updatedAt: Date
    _count: BotStatusCountAggregateOutputType | null
    _avg: BotStatusAvgAggregateOutputType | null
    _sum: BotStatusSumAggregateOutputType | null
    _min: BotStatusMinAggregateOutputType | null
    _max: BotStatusMaxAggregateOutputType | null
  }

  type GetBotStatusGroupByPayload<T extends BotStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BotStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotStatusGroupByOutputType[P]>
            : GetScalarType<T[P], BotStatusGroupByOutputType[P]>
        }
      >
    >


  export type BotStatusSelect = {
    id?: boolean
    key?: boolean
    hasPosition?: boolean
    direction?: boolean
    updatedAt?: boolean
  }


  export type BotStatusGetPayload<S extends boolean | null | undefined | BotStatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BotStatus :
    S extends undefined ? never :
    S extends { include: any } & (BotStatusArgs | BotStatusFindManyArgs)
    ? BotStatus 
    : S extends { select: any } & (BotStatusArgs | BotStatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BotStatus ? BotStatus[P] : never
  } 
      : BotStatus


  type BotStatusCountArgs = 
    Omit<BotStatusFindManyArgs, 'select' | 'include'> & {
      select?: BotStatusCountAggregateInputType | true
    }

  export interface BotStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BotStatus that matches the filter.
     * @param {BotStatusFindUniqueArgs} args - Arguments to find a BotStatus
     * @example
     * // Get one BotStatus
     * const botStatus = await prisma.botStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BotStatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BotStatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BotStatus'> extends True ? Prisma__BotStatusClient<BotStatusGetPayload<T>> : Prisma__BotStatusClient<BotStatusGetPayload<T> | null, null>

    /**
     * Find one BotStatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BotStatusFindUniqueOrThrowArgs} args - Arguments to find a BotStatus
     * @example
     * // Get one BotStatus
     * const botStatus = await prisma.botStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BotStatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BotStatusFindUniqueOrThrowArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Find the first BotStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusFindFirstArgs} args - Arguments to find a BotStatus
     * @example
     * // Get one BotStatus
     * const botStatus = await prisma.botStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BotStatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BotStatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BotStatus'> extends True ? Prisma__BotStatusClient<BotStatusGetPayload<T>> : Prisma__BotStatusClient<BotStatusGetPayload<T> | null, null>

    /**
     * Find the first BotStatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusFindFirstOrThrowArgs} args - Arguments to find a BotStatus
     * @example
     * // Get one BotStatus
     * const botStatus = await prisma.botStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BotStatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BotStatusFindFirstOrThrowArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Find zero or more BotStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotStatuses
     * const botStatuses = await prisma.botStatus.findMany()
     * 
     * // Get first 10 BotStatuses
     * const botStatuses = await prisma.botStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botStatusWithIdOnly = await prisma.botStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BotStatusFindManyArgs>(
      args?: SelectSubset<T, BotStatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<BotStatusGetPayload<T>>>

    /**
     * Create a BotStatus.
     * @param {BotStatusCreateArgs} args - Arguments to create a BotStatus.
     * @example
     * // Create one BotStatus
     * const BotStatus = await prisma.botStatus.create({
     *   data: {
     *     // ... data to create a BotStatus
     *   }
     * })
     * 
    **/
    create<T extends BotStatusCreateArgs>(
      args: SelectSubset<T, BotStatusCreateArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Create many BotStatuses.
     *     @param {BotStatusCreateManyArgs} args - Arguments to create many BotStatuses.
     *     @example
     *     // Create many BotStatuses
     *     const botStatus = await prisma.botStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BotStatusCreateManyArgs>(
      args?: SelectSubset<T, BotStatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BotStatus.
     * @param {BotStatusDeleteArgs} args - Arguments to delete one BotStatus.
     * @example
     * // Delete one BotStatus
     * const BotStatus = await prisma.botStatus.delete({
     *   where: {
     *     // ... filter to delete one BotStatus
     *   }
     * })
     * 
    **/
    delete<T extends BotStatusDeleteArgs>(
      args: SelectSubset<T, BotStatusDeleteArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Update one BotStatus.
     * @param {BotStatusUpdateArgs} args - Arguments to update one BotStatus.
     * @example
     * // Update one BotStatus
     * const botStatus = await prisma.botStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BotStatusUpdateArgs>(
      args: SelectSubset<T, BotStatusUpdateArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Delete zero or more BotStatuses.
     * @param {BotStatusDeleteManyArgs} args - Arguments to filter BotStatuses to delete.
     * @example
     * // Delete a few BotStatuses
     * const { count } = await prisma.botStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BotStatusDeleteManyArgs>(
      args?: SelectSubset<T, BotStatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotStatuses
     * const botStatus = await prisma.botStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BotStatusUpdateManyArgs>(
      args: SelectSubset<T, BotStatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotStatus.
     * @param {BotStatusUpsertArgs} args - Arguments to update or create a BotStatus.
     * @example
     * // Update or create a BotStatus
     * const botStatus = await prisma.botStatus.upsert({
     *   create: {
     *     // ... data to create a BotStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotStatus we want to update
     *   }
     * })
    **/
    upsert<T extends BotStatusUpsertArgs>(
      args: SelectSubset<T, BotStatusUpsertArgs>
    ): Prisma__BotStatusClient<BotStatusGetPayload<T>>

    /**
     * Count the number of BotStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusCountArgs} args - Arguments to filter BotStatuses to count.
     * @example
     * // Count the number of BotStatuses
     * const count = await prisma.botStatus.count({
     *   where: {
     *     // ... the filter for the BotStatuses we want to count
     *   }
     * })
    **/
    count<T extends BotStatusCountArgs>(
      args?: Subset<T, BotStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BotStatusAggregateArgs>(args: Subset<T, BotStatusAggregateArgs>): Prisma.PrismaPromise<GetBotStatusAggregateType<T>>

    /**
     * Group by BotStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotStatusGroupByArgs} args - Group by arguments.
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
      T extends BotStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotStatusGroupByArgs['orderBy'] }
        : { orderBy?: BotStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BotStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BotStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BotStatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BotStatus base type for findUnique actions
   */
  export type BotStatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter, which BotStatus to fetch.
     */
    where: BotStatusWhereUniqueInput
  }

  /**
   * BotStatus findUnique
   */
  export interface BotStatusFindUniqueArgs extends BotStatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BotStatus findUniqueOrThrow
   */
  export type BotStatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter, which BotStatus to fetch.
     */
    where: BotStatusWhereUniqueInput
  }


  /**
   * BotStatus base type for findFirst actions
   */
  export type BotStatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter, which BotStatus to fetch.
     */
    where?: BotStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatuses to fetch.
     */
    orderBy?: Enumerable<BotStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStatuses.
     */
    cursor?: BotStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStatuses.
     */
    distinct?: Enumerable<BotStatusScalarFieldEnum>
  }

  /**
   * BotStatus findFirst
   */
  export interface BotStatusFindFirstArgs extends BotStatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BotStatus findFirstOrThrow
   */
  export type BotStatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter, which BotStatus to fetch.
     */
    where?: BotStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatuses to fetch.
     */
    orderBy?: Enumerable<BotStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotStatuses.
     */
    cursor?: BotStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotStatuses.
     */
    distinct?: Enumerable<BotStatusScalarFieldEnum>
  }


  /**
   * BotStatus findMany
   */
  export type BotStatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter, which BotStatuses to fetch.
     */
    where?: BotStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotStatuses to fetch.
     */
    orderBy?: Enumerable<BotStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotStatuses.
     */
    cursor?: BotStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotStatuses.
     */
    skip?: number
    distinct?: Enumerable<BotStatusScalarFieldEnum>
  }


  /**
   * BotStatus create
   */
  export type BotStatusCreateArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * The data needed to create a BotStatus.
     */
    data: XOR<BotStatusCreateInput, BotStatusUncheckedCreateInput>
  }


  /**
   * BotStatus createMany
   */
  export type BotStatusCreateManyArgs = {
    /**
     * The data used to create many BotStatuses.
     */
    data: Enumerable<BotStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BotStatus update
   */
  export type BotStatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * The data needed to update a BotStatus.
     */
    data: XOR<BotStatusUpdateInput, BotStatusUncheckedUpdateInput>
    /**
     * Choose, which BotStatus to update.
     */
    where: BotStatusWhereUniqueInput
  }


  /**
   * BotStatus updateMany
   */
  export type BotStatusUpdateManyArgs = {
    /**
     * The data used to update BotStatuses.
     */
    data: XOR<BotStatusUpdateManyMutationInput, BotStatusUncheckedUpdateManyInput>
    /**
     * Filter which BotStatuses to update
     */
    where?: BotStatusWhereInput
  }


  /**
   * BotStatus upsert
   */
  export type BotStatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * The filter to search for the BotStatus to update in case it exists.
     */
    where: BotStatusWhereUniqueInput
    /**
     * In case the BotStatus found by the `where` argument doesn't exist, create a new BotStatus with this data.
     */
    create: XOR<BotStatusCreateInput, BotStatusUncheckedCreateInput>
    /**
     * In case the BotStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotStatusUpdateInput, BotStatusUncheckedUpdateInput>
  }


  /**
   * BotStatus delete
   */
  export type BotStatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
    /**
     * Filter which BotStatus to delete.
     */
    where: BotStatusWhereUniqueInput
  }


  /**
   * BotStatus deleteMany
   */
  export type BotStatusDeleteManyArgs = {
    /**
     * Filter which BotStatuses to delete
     */
    where?: BotStatusWhereInput
  }


  /**
   * BotStatus without action
   */
  export type BotStatusArgs = {
    /**
     * Select specific fields to fetch from the BotStatus
     */
    select?: BotStatusSelect | null
  }



  /**
   * Model PageViews
   */


  export type AggregatePageViews = {
    _count: PageViewsCountAggregateOutputType | null
    _avg: PageViewsAvgAggregateOutputType | null
    _sum: PageViewsSumAggregateOutputType | null
    _min: PageViewsMinAggregateOutputType | null
    _max: PageViewsMaxAggregateOutputType | null
  }

  export type PageViewsAvgAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type PageViewsSumAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type PageViewsMinAggregateOutputType = {
    id: number | null
    pageKey: string | null
    views: number | null
  }

  export type PageViewsMaxAggregateOutputType = {
    id: number | null
    pageKey: string | null
    views: number | null
  }

  export type PageViewsCountAggregateOutputType = {
    id: number
    pageKey: number
    views: number
    _all: number
  }


  export type PageViewsAvgAggregateInputType = {
    id?: true
    views?: true
  }

  export type PageViewsSumAggregateInputType = {
    id?: true
    views?: true
  }

  export type PageViewsMinAggregateInputType = {
    id?: true
    pageKey?: true
    views?: true
  }

  export type PageViewsMaxAggregateInputType = {
    id?: true
    pageKey?: true
    views?: true
  }

  export type PageViewsCountAggregateInputType = {
    id?: true
    pageKey?: true
    views?: true
    _all?: true
  }

  export type PageViewsAggregateArgs = {
    /**
     * Filter which PageViews to aggregate.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: Enumerable<PageViewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViews
    **/
    _count?: true | PageViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewsMaxAggregateInputType
  }

  export type GetPageViewsAggregateType<T extends PageViewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePageViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageViews[P]>
      : GetScalarType<T[P], AggregatePageViews[P]>
  }




  export type PageViewsGroupByArgs = {
    where?: PageViewsWhereInput
    orderBy?: Enumerable<PageViewsOrderByWithAggregationInput>
    by: PageViewsScalarFieldEnum[]
    having?: PageViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageViewsCountAggregateInputType | true
    _avg?: PageViewsAvgAggregateInputType
    _sum?: PageViewsSumAggregateInputType
    _min?: PageViewsMinAggregateInputType
    _max?: PageViewsMaxAggregateInputType
  }


  export type PageViewsGroupByOutputType = {
    id: number
    pageKey: string
    views: number
    _count: PageViewsCountAggregateOutputType | null
    _avg: PageViewsAvgAggregateOutputType | null
    _sum: PageViewsSumAggregateOutputType | null
    _min: PageViewsMinAggregateOutputType | null
    _max: PageViewsMaxAggregateOutputType | null
  }

  type GetPageViewsGroupByPayload<T extends PageViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PageViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewsGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewsGroupByOutputType[P]>
        }
      >
    >


  export type PageViewsSelect = {
    id?: boolean
    pageKey?: boolean
    views?: boolean
  }


  export type PageViewsGetPayload<S extends boolean | null | undefined | PageViewsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PageViews :
    S extends undefined ? never :
    S extends { include: any } & (PageViewsArgs | PageViewsFindManyArgs)
    ? PageViews 
    : S extends { select: any } & (PageViewsArgs | PageViewsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PageViews ? PageViews[P] : never
  } 
      : PageViews


  type PageViewsCountArgs = 
    Omit<PageViewsFindManyArgs, 'select' | 'include'> & {
      select?: PageViewsCountAggregateInputType | true
    }

  export interface PageViewsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PageViews that matches the filter.
     * @param {PageViewsFindUniqueArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PageViewsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PageViewsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PageViews'> extends True ? Prisma__PageViewsClient<PageViewsGetPayload<T>> : Prisma__PageViewsClient<PageViewsGetPayload<T> | null, null>

    /**
     * Find one PageViews that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PageViewsFindUniqueOrThrowArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PageViewsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PageViewsFindUniqueOrThrowArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Find the first PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindFirstArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PageViewsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PageViewsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PageViews'> extends True ? Prisma__PageViewsClient<PageViewsGetPayload<T>> : Prisma__PageViewsClient<PageViewsGetPayload<T> | null, null>

    /**
     * Find the first PageViews that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindFirstOrThrowArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PageViewsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PageViewsFindFirstOrThrowArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Find zero or more PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViews
     * const pageViews = await prisma.pageViews.findMany()
     * 
     * // Get first 10 PageViews
     * const pageViews = await prisma.pageViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewsWithIdOnly = await prisma.pageViews.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PageViewsFindManyArgs>(
      args?: SelectSubset<T, PageViewsFindManyArgs>
    ): Prisma.PrismaPromise<Array<PageViewsGetPayload<T>>>

    /**
     * Create a PageViews.
     * @param {PageViewsCreateArgs} args - Arguments to create a PageViews.
     * @example
     * // Create one PageViews
     * const PageViews = await prisma.pageViews.create({
     *   data: {
     *     // ... data to create a PageViews
     *   }
     * })
     * 
    **/
    create<T extends PageViewsCreateArgs>(
      args: SelectSubset<T, PageViewsCreateArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Create many PageViews.
     *     @param {PageViewsCreateManyArgs} args - Arguments to create many PageViews.
     *     @example
     *     // Create many PageViews
     *     const pageViews = await prisma.pageViews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PageViewsCreateManyArgs>(
      args?: SelectSubset<T, PageViewsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PageViews.
     * @param {PageViewsDeleteArgs} args - Arguments to delete one PageViews.
     * @example
     * // Delete one PageViews
     * const PageViews = await prisma.pageViews.delete({
     *   where: {
     *     // ... filter to delete one PageViews
     *   }
     * })
     * 
    **/
    delete<T extends PageViewsDeleteArgs>(
      args: SelectSubset<T, PageViewsDeleteArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Update one PageViews.
     * @param {PageViewsUpdateArgs} args - Arguments to update one PageViews.
     * @example
     * // Update one PageViews
     * const pageViews = await prisma.pageViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PageViewsUpdateArgs>(
      args: SelectSubset<T, PageViewsUpdateArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Delete zero or more PageViews.
     * @param {PageViewsDeleteManyArgs} args - Arguments to filter PageViews to delete.
     * @example
     * // Delete a few PageViews
     * const { count } = await prisma.pageViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PageViewsDeleteManyArgs>(
      args?: SelectSubset<T, PageViewsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViews
     * const pageViews = await prisma.pageViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PageViewsUpdateManyArgs>(
      args: SelectSubset<T, PageViewsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageViews.
     * @param {PageViewsUpsertArgs} args - Arguments to update or create a PageViews.
     * @example
     * // Update or create a PageViews
     * const pageViews = await prisma.pageViews.upsert({
     *   create: {
     *     // ... data to create a PageViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageViews we want to update
     *   }
     * })
    **/
    upsert<T extends PageViewsUpsertArgs>(
      args: SelectSubset<T, PageViewsUpsertArgs>
    ): Prisma__PageViewsClient<PageViewsGetPayload<T>>

    /**
     * Count the number of PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsCountArgs} args - Arguments to filter PageViews to count.
     * @example
     * // Count the number of PageViews
     * const count = await prisma.pageViews.count({
     *   where: {
     *     // ... the filter for the PageViews we want to count
     *   }
     * })
    **/
    count<T extends PageViewsCountArgs>(
      args?: Subset<T, PageViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageViewsAggregateArgs>(args: Subset<T, PageViewsAggregateArgs>): Prisma.PrismaPromise<GetPageViewsAggregateType<T>>

    /**
     * Group by PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsGroupByArgs} args - Group by arguments.
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
      T extends PageViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewsGroupByArgs['orderBy'] }
        : { orderBy?: PageViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PageViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PageViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PageViewsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PageViews base type for findUnique actions
   */
  export type PageViewsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter, which PageViews to fetch.
     */
    where: PageViewsWhereUniqueInput
  }

  /**
   * PageViews findUnique
   */
  export interface PageViewsFindUniqueArgs extends PageViewsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PageViews findUniqueOrThrow
   */
  export type PageViewsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter, which PageViews to fetch.
     */
    where: PageViewsWhereUniqueInput
  }


  /**
   * PageViews base type for findFirst actions
   */
  export type PageViewsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: Enumerable<PageViewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: Enumerable<PageViewsScalarFieldEnum>
  }

  /**
   * PageViews findFirst
   */
  export interface PageViewsFindFirstArgs extends PageViewsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PageViews findFirstOrThrow
   */
  export type PageViewsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: Enumerable<PageViewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: Enumerable<PageViewsScalarFieldEnum>
  }


  /**
   * PageViews findMany
   */
  export type PageViewsFindManyArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: Enumerable<PageViewsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    distinct?: Enumerable<PageViewsScalarFieldEnum>
  }


  /**
   * PageViews create
   */
  export type PageViewsCreateArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * The data needed to create a PageViews.
     */
    data: XOR<PageViewsCreateInput, PageViewsUncheckedCreateInput>
  }


  /**
   * PageViews createMany
   */
  export type PageViewsCreateManyArgs = {
    /**
     * The data used to create many PageViews.
     */
    data: Enumerable<PageViewsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PageViews update
   */
  export type PageViewsUpdateArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * The data needed to update a PageViews.
     */
    data: XOR<PageViewsUpdateInput, PageViewsUncheckedUpdateInput>
    /**
     * Choose, which PageViews to update.
     */
    where: PageViewsWhereUniqueInput
  }


  /**
   * PageViews updateMany
   */
  export type PageViewsUpdateManyArgs = {
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewsUpdateManyMutationInput, PageViewsUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewsWhereInput
  }


  /**
   * PageViews upsert
   */
  export type PageViewsUpsertArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * The filter to search for the PageViews to update in case it exists.
     */
    where: PageViewsWhereUniqueInput
    /**
     * In case the PageViews found by the `where` argument doesn't exist, create a new PageViews with this data.
     */
    create: XOR<PageViewsCreateInput, PageViewsUncheckedCreateInput>
    /**
     * In case the PageViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewsUpdateInput, PageViewsUncheckedUpdateInput>
  }


  /**
   * PageViews delete
   */
  export type PageViewsDeleteArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
    /**
     * Filter which PageViews to delete.
     */
    where: PageViewsWhereUniqueInput
  }


  /**
   * PageViews deleteMany
   */
  export type PageViewsDeleteManyArgs = {
    /**
     * Filter which PageViews to delete
     */
    where?: PageViewsWhereInput
  }


  /**
   * PageViews without action
   */
  export type PageViewsArgs = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BotStatusScalarFieldEnum: {
    id: 'id',
    key: 'key',
    hasPosition: 'hasPosition',
    direction: 'direction',
    updatedAt: 'updatedAt'
  };

  export type BotStatusScalarFieldEnum = (typeof BotStatusScalarFieldEnum)[keyof typeof BotStatusScalarFieldEnum]


  export const PageViewsScalarFieldEnum: {
    id: 'id',
    pageKey: 'pageKey',
    views: 'views'
  };

  export type PageViewsScalarFieldEnum = (typeof PageViewsScalarFieldEnum)[keyof typeof PageViewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type BotStatusWhereInput = {
    AND?: Enumerable<BotStatusWhereInput>
    OR?: Enumerable<BotStatusWhereInput>
    NOT?: Enumerable<BotStatusWhereInput>
    id?: IntFilter | number
    key?: StringFilter | string
    hasPosition?: BoolFilter | boolean
    direction?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BotStatusOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    hasPosition?: SortOrder
    direction?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatusWhereUniqueInput = {
    id?: number
    key?: string
  }

  export type BotStatusOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    hasPosition?: SortOrder
    direction?: SortOrder
    updatedAt?: SortOrder
    _count?: BotStatusCountOrderByAggregateInput
    _avg?: BotStatusAvgOrderByAggregateInput
    _max?: BotStatusMaxOrderByAggregateInput
    _min?: BotStatusMinOrderByAggregateInput
    _sum?: BotStatusSumOrderByAggregateInput
  }

  export type BotStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BotStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<BotStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BotStatusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    key?: StringWithAggregatesFilter | string
    hasPosition?: BoolWithAggregatesFilter | boolean
    direction?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PageViewsWhereInput = {
    AND?: Enumerable<PageViewsWhereInput>
    OR?: Enumerable<PageViewsWhereInput>
    NOT?: Enumerable<PageViewsWhereInput>
    id?: IntFilter | number
    pageKey?: StringFilter | string
    views?: IntFilter | number
  }

  export type PageViewsOrderByWithRelationInput = {
    id?: SortOrder
    pageKey?: SortOrder
    views?: SortOrder
  }

  export type PageViewsWhereUniqueInput = {
    id?: number
    pageKey?: string
  }

  export type PageViewsOrderByWithAggregationInput = {
    id?: SortOrder
    pageKey?: SortOrder
    views?: SortOrder
    _count?: PageViewsCountOrderByAggregateInput
    _avg?: PageViewsAvgOrderByAggregateInput
    _max?: PageViewsMaxOrderByAggregateInput
    _min?: PageViewsMinOrderByAggregateInput
    _sum?: PageViewsSumOrderByAggregateInput
  }

  export type PageViewsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PageViewsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PageViewsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PageViewsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    pageKey?: StringWithAggregatesFilter | string
    views?: IntWithAggregatesFilter | number
  }

  export type BotStatusCreateInput = {
    key: string
    hasPosition: boolean
    direction: string
    updatedAt?: Date | string
  }

  export type BotStatusUncheckedCreateInput = {
    id?: number
    key: string
    hasPosition: boolean
    direction: string
    updatedAt?: Date | string
  }

  export type BotStatusUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    hasPosition?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    hasPosition?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatusCreateManyInput = {
    id?: number
    key: string
    hasPosition: boolean
    direction: string
    updatedAt?: Date | string
  }

  export type BotStatusUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    hasPosition?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BotStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    hasPosition?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewsCreateInput = {
    pageKey: string
    views: number
  }

  export type PageViewsUncheckedCreateInput = {
    id?: number
    pageKey: string
    views: number
  }

  export type PageViewsUpdateInput = {
    pageKey?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type PageViewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageKey?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type PageViewsCreateManyInput = {
    id?: number
    pageKey: string
    views: number
  }

  export type PageViewsUpdateManyMutationInput = {
    pageKey?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type PageViewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageKey?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BotStatusCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    hasPosition?: SortOrder
    direction?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BotStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    hasPosition?: SortOrder
    direction?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatusMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    hasPosition?: SortOrder
    direction?: SortOrder
    updatedAt?: SortOrder
  }

  export type BotStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PageViewsCountOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    views?: SortOrder
  }

  export type PageViewsAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type PageViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    views?: SortOrder
  }

  export type PageViewsMinOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    views?: SortOrder
  }

  export type PageViewsSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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