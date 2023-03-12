const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BotStatusScalarFieldEnum = makeEnum({
  id: 'id',
  key: 'key',
  state: 'state'
});

exports.Prisma.PageViewsScalarFieldEnum = makeEnum({
  id: 'id',
  pageKey: 'pageKey',
  views: 'views'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  BotStatus: 'BotStatus',
  PageViews: 'PageViews'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/robinsteeman/Desktop/sandbox/personal-projects/deno/deno-prisma-akira-api/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.11.0",
  "engineVersion": "aead147aa326ccb985dcfed5b065b4fdabd44b19",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": true
}
config.dirname = dirname
config.document = dmmf

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICAgIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICAgIHByb3ZpZGVyID0gIm15c3FsIgogICAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEJvdFN0YXR1cyB7CiAgICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAgIGtleSAgICAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlCiAgICBzdGF0ZSAgICAgICAgICAgU3RyaW5nCn0KCm1vZGVsIFBhZ2VWaWV3cyB7CiAgICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAgIHBhZ2VLZXkgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlCiAgICB2aWV3cyAgICAgICAgICAgSW50Cn0K'
config.inlineSchemaHash = '6837b5b261ce1cd7666909e7666ad60c64ba973911e460a74d55157d22b95741'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

