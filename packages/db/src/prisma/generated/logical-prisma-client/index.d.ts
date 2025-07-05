import * as runtime from "./runtime/library.js";

import $Types = runtime.Types
// general types
import $Public = runtime.Types.Public

import $Utils = runtime.Types.Utils

import $Extensions = runtime.Types.Extensions

import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>;
/**
 * Model patients
 * @
 * @allow ('all', auth().role == 'org:admin' || auth().role == 'admin')
 * @
 * @allow ('read', auth() != null)
 */
export type patients = $Result.DefaultSelection<Prisma.$patientsPayload>;
/**
 * Model organs
 * @
 * @allow ('all', auth().role == 'org:admin' || auth().role == 'admin')
 * @
 * @allow ('read', auth() != null)
 */
export type organs = $Result.DefaultSelection<Prisma.$organsPayload>;
/**
 * Model waitlist
 * @
 * @allow ('all', auth().role == 'org:admin' || auth().role == 'admin')
 * @
 * @allow ('read', auth() != null)
 */
export type waitlist = $Result.DefaultSelection<Prisma.$waitlistPayload>;
export type OrganType = $Enums.OrganType;
export type BloodType = $Enums.BloodType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patients.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
        extArgs: ExtArgs
    }>>;
    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Patients
     * const patients = await prisma.patients.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */
    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
    /**
     * `prisma.patients`: Exposes CRUD operations for the **patients** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Patients
     * const patients = await prisma.patients.findMany()
     * ```
     */
    get patients(): Prisma.patientsDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.organs`: Exposes CRUD operations for the **organs** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Organs
     * const organs = await prisma.organs.findMany()
     * ```
     */
    get organs(): Prisma.organsDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.waitlist`: Exposes CRUD operations for the **waitlist** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Waitlists
     * const waitlists = await prisma.waitlist.findMany()
     * ```
     */
    get waitlist(): Prisma.waitlistDelegate<ExtArgs, ClientOptions>;
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
    $use(cb: Prisma.Middleware): void;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>;
}

export const OrganType: typeof $Enums.OrganType;
export const BloodType: typeof $Enums.BloodType;

/**
 * Enums
 */
export namespace $Enums {
    export const OrganType: {
        KIDNEY: 'KIDNEY',
        LIVER: 'LIVER',
        LUNG: 'LUNG',
        HEART: 'HEART',
        PANCREAS: 'PANCREAS',
        INTESTINES: 'INTESTINES'
    };
    export type OrganType = (typeof OrganType)[keyof typeof OrganType];
    export const BloodType: {
        A_POS: 'A_POS',
        A_NEG: 'A_NEG',
        B_POS: 'B_POS',
        B_NEG: 'B_NEG',
        O_POS: 'O_POS',
        O_NEG: 'O_NEG',
        AB_POS: 'AB_POS',
        AB_NEG: 'AB_NEG'
    };
    export type BloodType = (typeof BloodType)[keyof typeof BloodType];
}

export namespace Prisma {

    export import DMMF = runtime.DMMF


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
     * Utility Types
     */


    export import JsonObject = runtime.JsonObject

    export import JsonArray = runtime.JsonArray

    export import JsonValue = runtime.JsonValue

    export import InputJsonObject = runtime.InputJsonObject

    export import InputJsonArray = runtime.InputJsonArray

    export import InputJsonValue = runtime.InputJsonValue

    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    export const prismaVersion: PrismaVersion;
    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;
    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;
    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;
    export const type: unique symbol;
    export const ModelName: {
        patients: 'patients',
        organs: 'organs',
        waitlist: 'waitlist'
    };
    export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>;
    /**
     * Enums
     */
    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted',
        ReadCommitted: 'ReadCommitted',
        RepeatableRead: 'RepeatableRead',
        Serializable: 'Serializable'
    };
    export const PatientsScalarFieldEnum: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deactivatedAt: 'deactivatedAt',
        patientId: 'patientId',
        latitude: 'latitude',
        longitude: 'longitude',
        firstName: 'firstName',
        lastName: 'lastName',
        age: 'age',
        ssn: 'ssn',
        bloodType: 'bloodType'
    };
    export const OrgansScalarFieldEnum: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deactivatedAt: 'deactivatedAt',
        organId: 'organId',
        donorId: 'donorId',
        recipientId: 'recipientId',
        latitude: 'latitude',
        longitude: 'longitude',
        organType: 'organType',
        bloodType: 'bloodType',
        organSize: 'organSize'
    };
    export const WaitlistScalarFieldEnum: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deactivatedAt: 'deactivatedAt',
        waitlistId: 'waitlistId',
        patientId: 'patientId',
        organType: 'organType',
        organSize: 'organSize',
        organSizeThreshold: 'organSizeThreshold'
    };
    export const SortOrder: {
        asc: 'asc',
        desc: 'desc'
    };
    export const QueryMode: {
        default: 'default',
        insensitive: 'insensitive'
    };
    export const NullsOrder: {
        first: 'first',
        last: 'last'
    };
    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;

    interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>;
    }

    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources;
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string;
        /** @default "colorless" */
        errorFormat?: ErrorFormat;
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
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number
            timeout?: number
            isolationLevel?: Prisma.TransactionIsolationLevel
        };
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
        omit?: Prisma.GlobalOmitConfig;
    }

    export interface patientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patients'], meta: { name: 'patients' } };
        /**
         * Fields of the patients model
         */
        readonly fields: patientsFieldRefs;
        /**
         * Find zero or one Patients that matches the filter.
         * @param {patientsFindUniqueArgs} args - Arguments to find a Patients
         * @example
         * // Get one Patients
         * const patients = await prisma.patients.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends patientsFindUniqueArgs>(args: SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {patientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
         * @example
         * // Get one Patients
         * const patients = await prisma.patients.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Patients that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsFindFirstArgs} args - Arguments to find a Patients
         * @example
         * // Get one Patients
         * const patients = await prisma.patients.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends patientsFindFirstArgs>(args?: SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Patients that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsFindFirstOrThrowArgs} args - Arguments to find a Patients
         * @example
         * // Get one Patients
         * const patients = await prisma.patients.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find zero or more Patients that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Patients
         * const patients = await prisma.patients.findMany()
         *
         * // Get first 10 Patients
         * const patients = await prisma.patients.findMany({ take: 10 })
         *
         * // Only select the `createdAt`
         * const patientsWithCreatedAtOnly = await prisma.patients.findMany({ select: { createdAt: true } })
         */
        findMany<T extends patientsFindManyArgs>(args?: SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
        /**
         * Create a Patients.
         * @param {patientsCreateArgs} args - Arguments to create a Patients.
         * @example
         * // Create one Patients
         * const Patients = await prisma.patients.create({
         *   data: {
         *     // ... data to create a Patients
         *   }
         * })
         */
        create<T extends patientsCreateArgs>(args: SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Create many Patients.
         * @param {patientsCreateManyArgs} args - Arguments to create many Patients.
         * @example
         * // Create many Patients
         * const patients = await prisma.patients.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends patientsCreateManyArgs>(args?: SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Patients and returns the data saved in the database.
         * @param {patientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
         * @example
         * // Create many Patients
         * const patients = await prisma.patients.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Patients and only return the `createdAt`
         * const patientsWithCreatedAtOnly = await prisma.patients.createManyAndReturn({
         *   select: { createdAt: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
        /**
         * Delete a Patients.
         * @param {patientsDeleteArgs} args - Arguments to delete one Patients.
         * @example
         * // Delete one Patients
         * const Patients = await prisma.patients.delete({
         *   where: {
         *     // ... filter to delete one Patients
         *   }
         * })
         */
        delete<T extends patientsDeleteArgs>(args: SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Update one Patients.
         * @param {patientsUpdateArgs} args - Arguments to update one Patients.
         * @example
         * // Update one Patients
         * const patients = await prisma.patients.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends patientsUpdateArgs>(args: SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Delete zero or more Patients.
         * @param {patientsDeleteManyArgs} args - Arguments to filter Patients to delete.
         * @example
         * // Delete a few Patients
         * const { count } = await prisma.patients.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends patientsDeleteManyArgs>(args?: SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Patients.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Patients
         * const patients = await prisma.patients.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends patientsUpdateManyArgs>(args: SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Patients and returns the data updated in the database.
         * @param {patientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
         * @example
         * // Update many Patients
         * const patients = await prisma.patients.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Patients and only return the `createdAt`
         * const patientsWithCreatedAtOnly = await prisma.patients.updateManyAndReturn({
         *   select: { createdAt: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
        /**
         * Create or update one Patients.
         * @param {patientsUpsertArgs} args - Arguments to update or create a Patients.
         * @example
         * // Update or create a Patients
         * const patients = await prisma.patients.upsert({
         *   create: {
         *     // ... data to create a Patients
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Patients we want to update
         *   }
         * })
         */
        upsert<T extends patientsUpsertArgs>(args: SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Count the number of Patients.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsCountArgs} args - Arguments to filter Patients to count.
         * @example
         * // Count the number of Patients
         * const count = await prisma.patients.count({
         *   where: {
         *     // ... the filter for the Patients we want to count
         *   }
         * })
         */
        count<T extends patientsCountArgs>(args?: Subset<T, patientsCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], PatientsCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Patients.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
         */
        aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>;
        /**
         * Group by Patients.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {patientsGroupByArgs} args - Group by arguments.
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
         */
        groupBy<T extends patientsGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientsGroupByArgs['orderBy'] }
        : { orderBy?: patientsGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
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
        }[OrderFields]>(args: SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for patients.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__patientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organsDonated<T extends patients$organsDonatedArgs<ExtArgs> = {}>(args?: Subset<T, patients$organsDonatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
        organsReceived<T extends patients$organsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, patients$organsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
        transplantNeeds<T extends patients$transplantNeedsArgs<ExtArgs> = {}>(args?: Subset<T, patients$transplantNeedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the patients model
     */
    interface patientsFieldRefs {
        readonly createdAt: FieldRef<"patients", 'DateTime'>;
        readonly updatedAt: FieldRef<"patients", 'DateTime'>;
        readonly deactivatedAt: FieldRef<"patients", 'DateTime'>;
        readonly patientId: FieldRef<"patients", 'String'>;
        readonly latitude: FieldRef<"patients", 'Float'>;
        readonly longitude: FieldRef<"patients", 'Float'>;
        readonly firstName: FieldRef<"patients", 'String'>;
        readonly lastName: FieldRef<"patients", 'String'>;
        readonly age: FieldRef<"patients", 'Int'>;
        readonly ssn: FieldRef<"patients", 'String'>;
        readonly bloodType: FieldRef<"patients", 'BloodType'>;
    }

    export interface organsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organs'], meta: { name: 'organs' } };
        /**
         * Fields of the organs model
         */
        readonly fields: organsFieldRefs;
        /**
         * Find zero or one Organs that matches the filter.
         * @param {organsFindUniqueArgs} args - Arguments to find a Organs
         * @example
         * // Get one Organs
         * const organs = await prisma.organs.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends organsFindUniqueArgs>(args: SelectSubset<T, organsFindUniqueArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find one Organs that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {organsFindUniqueOrThrowArgs} args - Arguments to find a Organs
         * @example
         * // Get one Organs
         * const organs = await prisma.organs.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends organsFindUniqueOrThrowArgs>(args: SelectSubset<T, organsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Organs that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsFindFirstArgs} args - Arguments to find a Organs
         * @example
         * // Get one Organs
         * const organs = await prisma.organs.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends organsFindFirstArgs>(args?: SelectSubset<T, organsFindFirstArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Organs that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsFindFirstOrThrowArgs} args - Arguments to find a Organs
         * @example
         * // Get one Organs
         * const organs = await prisma.organs.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends organsFindFirstOrThrowArgs>(args?: SelectSubset<T, organsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find zero or more Organs that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Organs
         * const organs = await prisma.organs.findMany()
         *
         * // Get first 10 Organs
         * const organs = await prisma.organs.findMany({ take: 10 })
         *
         * // Only select the `createdAt`
         * const organsWithCreatedAtOnly = await prisma.organs.findMany({ select: { createdAt: true } })
         */
        findMany<T extends organsFindManyArgs>(args?: SelectSubset<T, organsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
        /**
         * Create a Organs.
         * @param {organsCreateArgs} args - Arguments to create a Organs.
         * @example
         * // Create one Organs
         * const Organs = await prisma.organs.create({
         *   data: {
         *     // ... data to create a Organs
         *   }
         * })
         */
        create<T extends organsCreateArgs>(args: SelectSubset<T, organsCreateArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Create many Organs.
         * @param {organsCreateManyArgs} args - Arguments to create many Organs.
         * @example
         * // Create many Organs
         * const organs = await prisma.organs.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends organsCreateManyArgs>(args?: SelectSubset<T, organsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Organs and returns the data saved in the database.
         * @param {organsCreateManyAndReturnArgs} args - Arguments to create many Organs.
         * @example
         * // Create many Organs
         * const organs = await prisma.organs.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Organs and only return the `createdAt`
         * const organsWithCreatedAtOnly = await prisma.organs.createManyAndReturn({
         *   select: { createdAt: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends organsCreateManyAndReturnArgs>(args?: SelectSubset<T, organsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
        /**
         * Delete a Organs.
         * @param {organsDeleteArgs} args - Arguments to delete one Organs.
         * @example
         * // Delete one Organs
         * const Organs = await prisma.organs.delete({
         *   where: {
         *     // ... filter to delete one Organs
         *   }
         * })
         */
        delete<T extends organsDeleteArgs>(args: SelectSubset<T, organsDeleteArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Update one Organs.
         * @param {organsUpdateArgs} args - Arguments to update one Organs.
         * @example
         * // Update one Organs
         * const organs = await prisma.organs.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends organsUpdateArgs>(args: SelectSubset<T, organsUpdateArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Delete zero or more Organs.
         * @param {organsDeleteManyArgs} args - Arguments to filter Organs to delete.
         * @example
         * // Delete a few Organs
         * const { count } = await prisma.organs.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends organsDeleteManyArgs>(args?: SelectSubset<T, organsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Organs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Organs
         * const organs = await prisma.organs.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends organsUpdateManyArgs>(args: SelectSubset<T, organsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Organs and returns the data updated in the database.
         * @param {organsUpdateManyAndReturnArgs} args - Arguments to update many Organs.
         * @example
         * // Update many Organs
         * const organs = await prisma.organs.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Organs and only return the `createdAt`
         * const organsWithCreatedAtOnly = await prisma.organs.updateManyAndReturn({
         *   select: { createdAt: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        updateManyAndReturn<T extends organsUpdateManyAndReturnArgs>(args: SelectSubset<T, organsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
        /**
         * Create or update one Organs.
         * @param {organsUpsertArgs} args - Arguments to update or create a Organs.
         * @example
         * // Update or create a Organs
         * const organs = await prisma.organs.upsert({
         *   create: {
         *     // ... data to create a Organs
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Organs we want to update
         *   }
         * })
         */
        upsert<T extends organsUpsertArgs>(args: SelectSubset<T, organsUpsertArgs<ExtArgs>>): Prisma__organsClient<$Result.GetResult<Prisma.$organsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Count the number of Organs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsCountArgs} args - Arguments to filter Organs to count.
         * @example
         * // Count the number of Organs
         * const count = await prisma.organs.count({
         *   where: {
         *     // ... the filter for the Organs we want to count
         *   }
         * })
         */
        count<T extends organsCountArgs>(args?: Subset<T, organsCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], OrgansCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Organs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrgansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
         */
        aggregate<T extends OrgansAggregateArgs>(args: Subset<T, OrgansAggregateArgs>): Prisma.PrismaPromise<GetOrgansAggregateType<T>>;
        /**
         * Group by Organs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {organsGroupByArgs} args - Group by arguments.
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
         */
        groupBy<T extends organsGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organsGroupByArgs['orderBy'] }
        : { orderBy?: organsGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
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
        }[OrderFields]>(args: SubsetIntersection<T, organsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for organs.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__organsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        donor<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
        recipient<T extends organs$recipientArgs<ExtArgs> = {}>(args?: Subset<T, organs$recipientArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the organs model
     */
    interface organsFieldRefs {
        readonly createdAt: FieldRef<"organs", 'DateTime'>;
        readonly updatedAt: FieldRef<"organs", 'DateTime'>;
        readonly deactivatedAt: FieldRef<"organs", 'DateTime'>;
        readonly organId: FieldRef<"organs", 'String'>;
        readonly donorId: FieldRef<"organs", 'String'>;
        readonly recipientId: FieldRef<"organs", 'String'>;
        readonly latitude: FieldRef<"organs", 'Float'>;
        readonly longitude: FieldRef<"organs", 'Float'>;
        readonly organType: FieldRef<"organs", 'OrganType'>;
        readonly bloodType: FieldRef<"organs", 'BloodType'>;
        readonly organSize: FieldRef<"organs", 'Int'>;
    }

    export interface waitlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waitlist'], meta: { name: 'waitlist' } };
        /**
         * Fields of the waitlist model
         */
        readonly fields: waitlistFieldRefs;
        /**
         * Find zero or one Waitlist that matches the filter.
         * @param {waitlistFindUniqueArgs} args - Arguments to find a Waitlist
         * @example
         * // Get one Waitlist
         * const waitlist = await prisma.waitlist.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends waitlistFindUniqueArgs>(args: SelectSubset<T, waitlistFindUniqueArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find one Waitlist that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {waitlistFindUniqueOrThrowArgs} args - Arguments to find a Waitlist
         * @example
         * // Get one Waitlist
         * const waitlist = await prisma.waitlist.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends waitlistFindUniqueOrThrowArgs>(args: SelectSubset<T, waitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Waitlist that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistFindFirstArgs} args - Arguments to find a Waitlist
         * @example
         * // Get one Waitlist
         * const waitlist = await prisma.waitlist.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends waitlistFindFirstArgs>(args?: SelectSubset<T, waitlistFindFirstArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
        /**
         * Find the first Waitlist that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistFindFirstOrThrowArgs} args - Arguments to find a Waitlist
         * @example
         * // Get one Waitlist
         * const waitlist = await prisma.waitlist.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends waitlistFindFirstOrThrowArgs>(args?: SelectSubset<T, waitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Find zero or more Waitlists that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Waitlists
         * const waitlists = await prisma.waitlist.findMany()
         *
         * // Get first 10 Waitlists
         * const waitlists = await prisma.waitlist.findMany({ take: 10 })
         *
         * // Only select the `createdAt`
         * const waitlistWithCreatedAtOnly = await prisma.waitlist.findMany({ select: { createdAt: true } })
         */
        findMany<T extends waitlistFindManyArgs>(args?: SelectSubset<T, waitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
        /**
         * Create a Waitlist.
         * @param {waitlistCreateArgs} args - Arguments to create a Waitlist.
         * @example
         * // Create one Waitlist
         * const Waitlist = await prisma.waitlist.create({
         *   data: {
         *     // ... data to create a Waitlist
         *   }
         * })
         */
        create<T extends waitlistCreateArgs>(args: SelectSubset<T, waitlistCreateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Create many Waitlists.
         * @param {waitlistCreateManyArgs} args - Arguments to create many Waitlists.
         * @example
         * // Create many Waitlists
         * const waitlist = await prisma.waitlist.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends waitlistCreateManyArgs>(args?: SelectSubset<T, waitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Waitlists and returns the data saved in the database.
         * @param {waitlistCreateManyAndReturnArgs} args - Arguments to create many Waitlists.
         * @example
         * // Create many Waitlists
         * const waitlist = await prisma.waitlist.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Waitlists and only return the `createdAt`
         * const waitlistWithCreatedAtOnly = await prisma.waitlist.createManyAndReturn({
         *   select: { createdAt: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends waitlistCreateManyAndReturnArgs>(args?: SelectSubset<T, waitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
        /**
         * Delete a Waitlist.
         * @param {waitlistDeleteArgs} args - Arguments to delete one Waitlist.
         * @example
         * // Delete one Waitlist
         * const Waitlist = await prisma.waitlist.delete({
         *   where: {
         *     // ... filter to delete one Waitlist
         *   }
         * })
         */
        delete<T extends waitlistDeleteArgs>(args: SelectSubset<T, waitlistDeleteArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Update one Waitlist.
         * @param {waitlistUpdateArgs} args - Arguments to update one Waitlist.
         * @example
         * // Update one Waitlist
         * const waitlist = await prisma.waitlist.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends waitlistUpdateArgs>(args: SelectSubset<T, waitlistUpdateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Delete zero or more Waitlists.
         * @param {waitlistDeleteManyArgs} args - Arguments to filter Waitlists to delete.
         * @example
         * // Delete a few Waitlists
         * const { count } = await prisma.waitlist.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends waitlistDeleteManyArgs>(args?: SelectSubset<T, waitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Waitlists.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Waitlists
         * const waitlist = await prisma.waitlist.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends waitlistUpdateManyArgs>(args: SelectSubset<T, waitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Waitlists and returns the data updated in the database.
         * @param {waitlistUpdateManyAndReturnArgs} args - Arguments to update many Waitlists.
         * @example
         * // Update many Waitlists
         * const waitlist = await prisma.waitlist.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Waitlists and only return the `createdAt`
         * const waitlistWithCreatedAtOnly = await prisma.waitlist.updateManyAndReturn({
         *   select: { createdAt: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        updateManyAndReturn<T extends waitlistUpdateManyAndReturnArgs>(args: SelectSubset<T, waitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
        /**
         * Create or update one Waitlist.
         * @param {waitlistUpsertArgs} args - Arguments to update or create a Waitlist.
         * @example
         * // Update or create a Waitlist
         * const waitlist = await prisma.waitlist.upsert({
         *   create: {
         *     // ... data to create a Waitlist
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Waitlist we want to update
         *   }
         * })
         */
        upsert<T extends waitlistUpsertArgs>(args: SelectSubset<T, waitlistUpsertArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
        /**
         * Count the number of Waitlists.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistCountArgs} args - Arguments to filter Waitlists to count.
         * @example
         * // Count the number of Waitlists
         * const count = await prisma.waitlist.count({
         *   where: {
         *     // ... the filter for the Waitlists we want to count
         *   }
         * })
         */
        count<T extends waitlistCountArgs>(args?: Subset<T, waitlistCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], WaitlistCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Waitlist.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {WaitlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
         */
        aggregate<T extends WaitlistAggregateArgs>(args: Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>;
        /**
         * Group by Waitlist.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {waitlistGroupByArgs} args - Group by arguments.
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
         */
        groupBy<T extends waitlistGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waitlistGroupByArgs['orderBy'] }
        : { orderBy?: waitlistGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
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
        }[OrderFields]>(args: SubsetIntersection<T, waitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for waitlist.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__waitlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        patient<T extends patientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientsDefaultArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the waitlist model
     */
    interface waitlistFieldRefs {
        readonly createdAt: FieldRef<"waitlist", 'DateTime'>;
        readonly updatedAt: FieldRef<"waitlist", 'DateTime'>;
        readonly deactivatedAt: FieldRef<"waitlist", 'DateTime'>;
        readonly waitlistId: FieldRef<"waitlist", 'String'>;
        readonly patientId: FieldRef<"waitlist", 'String'>;
        readonly organType: FieldRef<"waitlist", 'OrganType'>;
        readonly organSize: FieldRef<"waitlist", 'Int'>;
        readonly organSizeThreshold: FieldRef<"waitlist", 'Int'>;
    }

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;
    export type DecimalJsLike = runtime.DecimalJsLike;
    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics;
    export type Metric<T> = runtime.Metric<T>;
    export type MetricHistogram = runtime.MetricHistogram;
    export type MetricHistogramBucket = runtime.MetricHistogramBucket;
    /**
     * Prisma Client JS version: 6.11.1
     * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
     */
    export type PrismaVersion = {
        client: string
    };
    type SelectAndInclude = {
        select: any
        include: any
    };
    type SelectAndOmit = {
        select: any
        omit: any
    };
    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;
    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;
    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };
    export type Enumerable<T> = T | Array<T>;
    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
    }[keyof T];
    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
    };
    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;
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
            : {});
    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } &
        K;
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object ?
        U extends object ?
        (Without<T, U> & U) | (Without<U, T> & T)
        : U : T;
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
        : False;
    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
    /**
     * From ts-toolbelt
     */
    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
        }[K];
    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict];
    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
    export type Union = any;
    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {};
    /** Helper Types for "Merge" */
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;
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
    type NoExpand<T> = T extends unknown ? T : never;
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
        ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | { [P in keyof O as P extends K ? P : never]-?: O[P] } & O
        : never>;
    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" */
    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
    /**
     *   A [[Boolean]]
     */
    export type Boolean = True | False;
    export type True = 1;
    /**
     *   0
     */
    export type False = 0;
    export type Not<B extends Boolean> = {
        0: 1
        1: 0
    }[B];
    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
        ? 1
        : 0;
    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >;
    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0
            1: 1
        }
        1: {
            0: 1
            1: 1
        }
    }[B1][B2];
    export type Keys<U extends Union> = U extends unknown ? keyof U : never;
    type Cast<A, B> = A extends B ? A : B;
    /**
     * Used by group by
     */
    export type GetScalarType<T, O> = O extends object ? {
        [P in keyof T]: P extends keyof O
        ? O[P]
        : never
    } : never;
    type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
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
    }[keyof T];
    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
    type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
    export type ModelName = (typeof ModelName)[keyof typeof ModelName];
    export type Datasources = {
        db?: Datasource
    };
    export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
        globalOmitOptions: {
            omit: GlobalOmitOptions
        }
        meta: {
            modelProps: "patients" | "organs" | "waitlist"
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            patients: {
                payload: Prisma.$patientsPayload<ExtArgs>
                fields: Prisma.patientsFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.patientsFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    findFirst: {
                        args: Prisma.patientsFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    findMany: {
                        args: Prisma.patientsFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
                    }
                    create: {
                        args: Prisma.patientsCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    createMany: {
                        args: Prisma.patientsCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
                    }
                    delete: {
                        args: Prisma.patientsDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    update: {
                        args: Prisma.patientsUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    deleteMany: {
                        args: Prisma.patientsDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.patientsUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
                    }
                    upsert: {
                        args: Prisma.patientsUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$patientsPayload>
                    }
                    aggregate: {
                        args: Prisma.PatientsAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregatePatients>
                    }
                    groupBy: {
                        args: Prisma.patientsGroupByArgs<ExtArgs>
                        result: $Utils.Optional<PatientsGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.patientsCountArgs<ExtArgs>
                        result: $Utils.Optional<PatientsCountAggregateOutputType> | number
                    }
                }
            }
            organs: {
                payload: Prisma.$organsPayload<ExtArgs>
                fields: Prisma.organsFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.organsFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.organsFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    findFirst: {
                        args: Prisma.organsFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.organsFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    findMany: {
                        args: Prisma.organsFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>[]
                    }
                    create: {
                        args: Prisma.organsCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    createMany: {
                        args: Prisma.organsCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.organsCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>[]
                    }
                    delete: {
                        args: Prisma.organsDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    update: {
                        args: Prisma.organsUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    deleteMany: {
                        args: Prisma.organsDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.organsUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.organsUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>[]
                    }
                    upsert: {
                        args: Prisma.organsUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$organsPayload>
                    }
                    aggregate: {
                        args: Prisma.OrgansAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateOrgans>
                    }
                    groupBy: {
                        args: Prisma.organsGroupByArgs<ExtArgs>
                        result: $Utils.Optional<OrgansGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.organsCountArgs<ExtArgs>
                        result: $Utils.Optional<OrgansCountAggregateOutputType> | number
                    }
                }
            }
            waitlist: {
                payload: Prisma.$waitlistPayload<ExtArgs>
                fields: Prisma.waitlistFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.waitlistFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.waitlistFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    findFirst: {
                        args: Prisma.waitlistFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.waitlistFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    findMany: {
                        args: Prisma.waitlistFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
                    }
                    create: {
                        args: Prisma.waitlistCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    createMany: {
                        args: Prisma.waitlistCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.waitlistCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
                    }
                    delete: {
                        args: Prisma.waitlistDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    update: {
                        args: Prisma.waitlistUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    deleteMany: {
                        args: Prisma.waitlistDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.waitlistUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.waitlistUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
                    }
                    upsert: {
                        args: Prisma.waitlistUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
                    }
                    aggregate: {
                        args: Prisma.WaitlistAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateWaitlist>
                    }
                    groupBy: {
                        args: Prisma.waitlistGroupByArgs<ExtArgs>
                        result: $Utils.Optional<WaitlistGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.waitlistCountArgs<ExtArgs>
                        result: $Utils.Optional<WaitlistCountAggregateOutputType> | number
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
    };
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
    export type GlobalOmitConfig = {
        patients?: patientsOmit
        organs?: organsOmit
        waitlist?: waitlistOmit
    };
    export type LogLevel = 'info' | 'query' | 'warn' | 'error';
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    };
    export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never;
    export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
        GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
        : never;
    export type QueryEvent = {
        timestamp: Date
        query: string
        params: string
        duration: number
        target: string
    };
    export type LogEvent = {
        timestamp: Date
        message: string
        target: string
    };
    export type PrismaAction = | 'findUnique'
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
        | 'groupBy';
    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
        model?: ModelName
        action: PrismaAction
        args: any
        dataPath: string[]
        runInTransaction: boolean
    };
    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
        params: MiddlewareParams,
        next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
    ) => $Utils.JsPromise<T>;
    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;
    export type Datasource = {
        url?: string
    };
    /**
     * Count Types
     */
    /**
     * Count Type PatientsCountOutputType
     */
    export type PatientsCountOutputType = {
        organsDonated: number
        organsReceived: number
        transplantNeeds: number
    };
    export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        organsDonated?: boolean | PatientsCountOutputTypeCountOrgansDonatedArgs
        organsReceived?: boolean | PatientsCountOutputTypeCountOrgansReceivedArgs
        transplantNeeds?: boolean | PatientsCountOutputTypeCountTransplantNeedsArgs
    };
    /**
     * PatientsCountOutputType without action
     */
    export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PatientsCountOutputType
         */
        select?: PatientsCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * PatientsCountOutputType without action
     */
    export type PatientsCountOutputTypeCountOrgansDonatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: organsWhereInput
    };
    /**
     * PatientsCountOutputType without action
     */
    export type PatientsCountOutputTypeCountOrgansReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: organsWhereInput
    };
    /**
     * PatientsCountOutputType without action
     */
    export type PatientsCountOutputTypeCountTransplantNeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: waitlistWhereInput
    };
    /**
     * Models
     */
    /**
     * Model patients
     */
    export type AggregatePatients = {
        _count: PatientsCountAggregateOutputType | null
        _avg: PatientsAvgAggregateOutputType | null
        _sum: PatientsSumAggregateOutputType | null
        _min: PatientsMinAggregateOutputType | null
        _max: PatientsMaxAggregateOutputType | null
    };
    export type PatientsAvgAggregateOutputType = {
        latitude: number | null
        longitude: number | null
        age: number | null
    };
    export type PatientsSumAggregateOutputType = {
        latitude: number | null
        longitude: number | null
        age: number | null
    };
    export type PatientsMinAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        patientId: string | null
        latitude: number | null
        longitude: number | null
        firstName: string | null
        lastName: string | null
        age: number | null
        ssn: string | null
        bloodType: $Enums.BloodType | null
    };
    export type PatientsMaxAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        patientId: string | null
        latitude: number | null
        longitude: number | null
        firstName: string | null
        lastName: string | null
        age: number | null
        ssn: string | null
        bloodType: $Enums.BloodType | null
    };
    export type PatientsCountAggregateOutputType = {
        createdAt: number
        updatedAt: number
        deactivatedAt: number
        patientId: number
        latitude: number
        longitude: number
        firstName: number
        lastName: number
        age: number
        ssn: number
        bloodType: number
        _all: number
    };
    export type PatientsAvgAggregateInputType = {
        latitude?: true
        longitude?: true
        age?: true
    };
    export type PatientsSumAggregateInputType = {
        latitude?: true
        longitude?: true
        age?: true
    };
    export type PatientsMinAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        patientId?: true
        latitude?: true
        longitude?: true
        firstName?: true
        lastName?: true
        age?: true
        ssn?: true
        bloodType?: true
    };
    export type PatientsMaxAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        patientId?: true
        latitude?: true
        longitude?: true
        firstName?: true
        lastName?: true
        age?: true
        ssn?: true
        bloodType?: true
    };
    export type PatientsCountAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        patientId?: true
        latitude?: true
        longitude?: true
        firstName?: true
        lastName?: true
        age?: true
        ssn?: true
        bloodType?: true
        _all?: true
    };
    export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which patients to aggregate.
         */
        where?: patientsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of patients to fetch.
         */
        orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: patientsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` patients from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` patients.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned patients
        **/
        _count?: true | PatientsCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: PatientsAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: PatientsSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: PatientsMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: PatientsMaxAggregateInputType
    };
    export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
        : GetScalarType<T[P], AggregatePatients[P]>
    };
    export type patientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: patientsWhereInput
        orderBy?: patientsOrderByWithAggregationInput | patientsOrderByWithAggregationInput[]
        by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
        having?: patientsScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: PatientsCountAggregateInputType | true
        _avg?: PatientsAvgAggregateInputType
        _sum?: PatientsSumAggregateInputType
        _min?: PatientsMinAggregateInputType
        _max?: PatientsMaxAggregateInputType
    };
    export type PatientsGroupByOutputType = {
        createdAt: Date
        updatedAt: Date
        deactivatedAt: Date | null
        patientId: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        _count: PatientsCountAggregateOutputType | null
        _avg: PatientsAvgAggregateOutputType | null
        _sum: PatientsSumAggregateOutputType | null
        _min: PatientsMinAggregateOutputType | null
        _max: PatientsMaxAggregateOutputType | null
    };
    type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<PatientsGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], PatientsGroupByOutputType[P]>
                : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            }
        >
    >;
    export type patientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        patientId?: boolean
        latitude?: boolean
        longitude?: boolean
        firstName?: boolean
        lastName?: boolean
        age?: boolean
        ssn?: boolean
        bloodType?: boolean
        organsDonated?: boolean | patients$organsDonatedArgs<ExtArgs>
        organsReceived?: boolean | patients$organsReceivedArgs<ExtArgs>
        transplantNeeds?: boolean | patients$transplantNeedsArgs<ExtArgs>
        _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["patients"]>;
    export type patientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        patientId?: boolean
        latitude?: boolean
        longitude?: boolean
        firstName?: boolean
        lastName?: boolean
        age?: boolean
        ssn?: boolean
        bloodType?: boolean
    }, ExtArgs["result"]["patients"]>;
    export type patientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        patientId?: boolean
        latitude?: boolean
        longitude?: boolean
        firstName?: boolean
        lastName?: boolean
        age?: boolean
        ssn?: boolean
        bloodType?: boolean
    }, ExtArgs["result"]["patients"]>;
    export type patientsSelectScalar = {
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        patientId?: boolean
        latitude?: boolean
        longitude?: boolean
        firstName?: boolean
        lastName?: boolean
        age?: boolean
        ssn?: boolean
        bloodType?: boolean
    };
    export type patientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "updatedAt" | "deactivatedAt" | "patientId" | "latitude" | "longitude" | "firstName" | "lastName" | "age" | "ssn" | "bloodType", ExtArgs["result"]["patients"]>;
    export type patientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        organsDonated?: boolean | patients$organsDonatedArgs<ExtArgs>
        organsReceived?: boolean | patients$organsReceivedArgs<ExtArgs>
        transplantNeeds?: boolean | patients$transplantNeedsArgs<ExtArgs>
        _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type patientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
    export type patientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
    export type $patientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "patients"
        objects: {
            organsDonated: Prisma.$organsPayload<ExtArgs>[]
            organsReceived: Prisma.$organsPayload<ExtArgs>[]
            transplantNeeds: Prisma.$waitlistPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            createdAt: Date
            updatedAt: Date
            deactivatedAt: Date | null
            patientId: string
            latitude: number
            longitude: number
            firstName: string
            lastName: string
            age: number
            /**
             * @omit
             */
            ssn: string
            bloodType: $Enums.BloodType
        }, ExtArgs["result"]["patients"]>
        composites: {}
    };
    type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = $Result.GetResult<Prisma.$patientsPayload, S>;
    type patientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: PatientsCountAggregateInputType | true
    };
    /**
     * patients findUnique
     */
    export type patientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter, which patients to fetch.
         */
        where: patientsWhereUniqueInput
    };
    /**
     * patients findUniqueOrThrow
     */
    export type patientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter, which patients to fetch.
         */
        where: patientsWhereUniqueInput
    };
    /**
     * patients findFirst
     */
    export type patientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter, which patients to fetch.
         */
        where?: patientsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of patients to fetch.
         */
        orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for patients.
         */
        cursor?: patientsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` patients from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` patients.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of patients.
         */
        distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
    };
    /**
     * patients findFirstOrThrow
     */
    export type patientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter, which patients to fetch.
         */
        where?: patientsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of patients to fetch.
         */
        orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for patients.
         */
        cursor?: patientsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` patients from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` patients.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of patients.
         */
        distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
    };
    /**
     * patients findMany
     */
    export type patientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter, which patients to fetch.
         */
        where?: patientsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of patients to fetch.
         */
        orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing patients.
         */
        cursor?: patientsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` patients from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` patients.
         */
        skip?: number
        distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
    };
    /**
     * patients create
     */
    export type patientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * The data needed to create a patients.
         */
        data: XOR<patientsCreateInput, patientsUncheckedCreateInput>
    };
    /**
     * patients createMany
     */
    export type patientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many patients.
         */
        data: patientsCreateManyInput | patientsCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * patients createManyAndReturn
     */
    export type patientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * The data used to create many patients.
         */
        data: patientsCreateManyInput | patientsCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * patients update
     */
    export type patientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * The data needed to update a patients.
         */
        data: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
        /**
         * Choose, which patients to update.
         */
        where: patientsWhereUniqueInput
    };
    /**
     * patients updateMany
     */
    export type patientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update patients.
         */
        data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
        /**
         * Filter which patients to update
         */
        where?: patientsWhereInput
        /**
         * Limit how many patients to update.
         */
        limit?: number
    };
    /**
     * patients updateManyAndReturn
     */
    export type patientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * The data used to update patients.
         */
        data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
        /**
         * Filter which patients to update
         */
        where?: patientsWhereInput
        /**
         * Limit how many patients to update.
         */
        limit?: number
    };
    /**
     * patients upsert
     */
    export type patientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * The filter to search for the patients to update in case it exists.
         */
        where: patientsWhereUniqueInput
        /**
         * In case the patients found by the `where` argument doesn't exist, create a new patients with this data.
         */
        create: XOR<patientsCreateInput, patientsUncheckedCreateInput>
        /**
         * In case the patients was found with the provided `where` argument, update it with this data.
         */
        update: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
    };
    /**
     * patients delete
     */
    export type patientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        /**
         * Filter which patients to delete.
         */
        where: patientsWhereUniqueInput
    };
    /**
     * patients deleteMany
     */
    export type patientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which patients to delete
         */
        where?: patientsWhereInput
        /**
         * Limit how many patients to delete.
         */
        limit?: number
    };
    /**
     * patients.organsDonated
     */
    export type patients$organsDonatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        where?: organsWhereInput
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        cursor?: organsWhereUniqueInput
        take?: number
        skip?: number
        distinct?: OrgansScalarFieldEnum | OrgansScalarFieldEnum[]
    };
    /**
     * patients.organsReceived
     */
    export type patients$organsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        where?: organsWhereInput
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        cursor?: organsWhereUniqueInput
        take?: number
        skip?: number
        distinct?: OrgansScalarFieldEnum | OrgansScalarFieldEnum[]
    };
    /**
     * patients.transplantNeeds
     */
    export type patients$transplantNeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        where?: waitlistWhereInput
        orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
        cursor?: waitlistWhereUniqueInput
        take?: number
        skip?: number
        distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
    };
    /**
     * patients without action
     */
    export type patientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
    };
    /**
     * Model organs
     */
    export type AggregateOrgans = {
        _count: OrgansCountAggregateOutputType | null
        _avg: OrgansAvgAggregateOutputType | null
        _sum: OrgansSumAggregateOutputType | null
        _min: OrgansMinAggregateOutputType | null
        _max: OrgansMaxAggregateOutputType | null
    };
    export type OrgansAvgAggregateOutputType = {
        latitude: number | null
        longitude: number | null
        organSize: number | null
    };
    export type OrgansSumAggregateOutputType = {
        latitude: number | null
        longitude: number | null
        organSize: number | null
    };
    export type OrgansMinAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        organId: string | null
        donorId: string | null
        recipientId: string | null
        latitude: number | null
        longitude: number | null
        organType: $Enums.OrganType | null
        bloodType: $Enums.BloodType | null
        organSize: number | null
    };
    export type OrgansMaxAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        organId: string | null
        donorId: string | null
        recipientId: string | null
        latitude: number | null
        longitude: number | null
        organType: $Enums.OrganType | null
        bloodType: $Enums.BloodType | null
        organSize: number | null
    };
    export type OrgansCountAggregateOutputType = {
        createdAt: number
        updatedAt: number
        deactivatedAt: number
        organId: number
        donorId: number
        recipientId: number
        latitude: number
        longitude: number
        organType: number
        bloodType: number
        organSize: number
        _all: number
    };
    export type OrgansAvgAggregateInputType = {
        latitude?: true
        longitude?: true
        organSize?: true
    };
    export type OrgansSumAggregateInputType = {
        latitude?: true
        longitude?: true
        organSize?: true
    };
    export type OrgansMinAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        organId?: true
        donorId?: true
        recipientId?: true
        latitude?: true
        longitude?: true
        organType?: true
        bloodType?: true
        organSize?: true
    };
    export type OrgansMaxAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        organId?: true
        donorId?: true
        recipientId?: true
        latitude?: true
        longitude?: true
        organType?: true
        bloodType?: true
        organSize?: true
    };
    export type OrgansCountAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        organId?: true
        donorId?: true
        recipientId?: true
        latitude?: true
        longitude?: true
        organType?: true
        bloodType?: true
        organSize?: true
        _all?: true
    };
    export type OrgansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which organs to aggregate.
         */
        where?: organsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of organs to fetch.
         */
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: organsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` organs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` organs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned organs
        **/
        _count?: true | OrgansCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: OrgansAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: OrgansSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: OrgansMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: OrgansMaxAggregateInputType
    };
    export type GetOrgansAggregateType<T extends OrgansAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgans]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgans[P]>
        : GetScalarType<T[P], AggregateOrgans[P]>
    };
    export type organsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: organsWhereInput
        orderBy?: organsOrderByWithAggregationInput | organsOrderByWithAggregationInput[]
        by: OrgansScalarFieldEnum[] | OrgansScalarFieldEnum
        having?: organsScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: OrgansCountAggregateInputType | true
        _avg?: OrgansAvgAggregateInputType
        _sum?: OrgansSumAggregateInputType
        _min?: OrgansMinAggregateInputType
        _max?: OrgansMaxAggregateInputType
    };
    export type OrgansGroupByOutputType = {
        createdAt: Date
        updatedAt: Date
        deactivatedAt: Date | null
        organId: string
        donorId: string
        recipientId: string | null
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
        _count: OrgansCountAggregateOutputType | null
        _avg: OrgansAvgAggregateOutputType | null
        _sum: OrgansSumAggregateOutputType | null
        _min: OrgansMinAggregateOutputType | null
        _max: OrgansMaxAggregateOutputType | null
    };
    type GetOrgansGroupByPayload<T extends organsGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<OrgansGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof OrgansGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], OrgansGroupByOutputType[P]>
                : GetScalarType<T[P], OrgansGroupByOutputType[P]>
            }
        >
    >;
    export type organsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        organId?: boolean
        donorId?: boolean
        recipientId?: boolean
        latitude?: boolean
        longitude?: boolean
        organType?: boolean
        bloodType?: boolean
        organSize?: boolean
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    }, ExtArgs["result"]["organs"]>;
    export type organsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        organId?: boolean
        donorId?: boolean
        recipientId?: boolean
        latitude?: boolean
        longitude?: boolean
        organType?: boolean
        bloodType?: boolean
        organSize?: boolean
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    }, ExtArgs["result"]["organs"]>;
    export type organsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        organId?: boolean
        donorId?: boolean
        recipientId?: boolean
        latitude?: boolean
        longitude?: boolean
        organType?: boolean
        bloodType?: boolean
        organSize?: boolean
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    }, ExtArgs["result"]["organs"]>;
    export type organsSelectScalar = {
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        organId?: boolean
        donorId?: boolean
        recipientId?: boolean
        latitude?: boolean
        longitude?: boolean
        organType?: boolean
        bloodType?: boolean
        organSize?: boolean
    };
    export type organsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "updatedAt" | "deactivatedAt" | "organId" | "donorId" | "recipientId" | "latitude" | "longitude" | "organType" | "bloodType" | "organSize", ExtArgs["result"]["organs"]>;
    export type organsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    };
    export type organsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    };
    export type organsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        donor?: boolean | patientsDefaultArgs<ExtArgs>
        recipient?: boolean | organs$recipientArgs<ExtArgs>
    };
    export type $organsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "organs"
        objects: {
            donor: Prisma.$patientsPayload<ExtArgs>
            recipient: Prisma.$patientsPayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<{
            createdAt: Date
            updatedAt: Date
            deactivatedAt: Date | null
            organId: string
            donorId: string
            recipientId: string | null
            latitude: number
            longitude: number
            organType: $Enums.OrganType
            bloodType: $Enums.BloodType
            organSize: number
        }, ExtArgs["result"]["organs"]>
        composites: {}
    };
    type organsGetPayload<S extends boolean | null | undefined | organsDefaultArgs> = $Result.GetResult<Prisma.$organsPayload, S>;
    type organsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<organsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: OrgansCountAggregateInputType | true
    };
    /**
     * organs findUnique
     */
    export type organsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter, which organs to fetch.
         */
        where: organsWhereUniqueInput
    };
    /**
     * organs findUniqueOrThrow
     */
    export type organsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter, which organs to fetch.
         */
        where: organsWhereUniqueInput
    };
    /**
     * organs findFirst
     */
    export type organsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter, which organs to fetch.
         */
        where?: organsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of organs to fetch.
         */
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for organs.
         */
        cursor?: organsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` organs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` organs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of organs.
         */
        distinct?: OrgansScalarFieldEnum | OrgansScalarFieldEnum[]
    };
    /**
     * organs findFirstOrThrow
     */
    export type organsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter, which organs to fetch.
         */
        where?: organsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of organs to fetch.
         */
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for organs.
         */
        cursor?: organsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` organs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` organs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of organs.
         */
        distinct?: OrgansScalarFieldEnum | OrgansScalarFieldEnum[]
    };
    /**
     * organs findMany
     */
    export type organsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter, which organs to fetch.
         */
        where?: organsWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of organs to fetch.
         */
        orderBy?: organsOrderByWithRelationInput | organsOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing organs.
         */
        cursor?: organsWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` organs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` organs.
         */
        skip?: number
        distinct?: OrgansScalarFieldEnum | OrgansScalarFieldEnum[]
    };
    /**
     * organs create
     */
    export type organsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * The data needed to create a organs.
         */
        data: XOR<organsCreateInput, organsUncheckedCreateInput>
    };
    /**
     * organs createMany
     */
    export type organsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many organs.
         */
        data: organsCreateManyInput | organsCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * organs createManyAndReturn
     */
    export type organsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * The data used to create many organs.
         */
        data: organsCreateManyInput | organsCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * organs update
     */
    export type organsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * The data needed to update a organs.
         */
        data: XOR<organsUpdateInput, organsUncheckedUpdateInput>
        /**
         * Choose, which organs to update.
         */
        where: organsWhereUniqueInput
    };
    /**
     * organs updateMany
     */
    export type organsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update organs.
         */
        data: XOR<organsUpdateManyMutationInput, organsUncheckedUpdateManyInput>
        /**
         * Filter which organs to update
         */
        where?: organsWhereInput
        /**
         * Limit how many organs to update.
         */
        limit?: number
    };
    /**
     * organs updateManyAndReturn
     */
    export type organsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * The data used to update organs.
         */
        data: XOR<organsUpdateManyMutationInput, organsUncheckedUpdateManyInput>
        /**
         * Filter which organs to update
         */
        where?: organsWhereInput
        /**
         * Limit how many organs to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsIncludeUpdateManyAndReturn<ExtArgs> | null
    };
    /**
     * organs upsert
     */
    export type organsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * The filter to search for the organs to update in case it exists.
         */
        where: organsWhereUniqueInput
        /**
         * In case the organs found by the `where` argument doesn't exist, create a new organs with this data.
         */
        create: XOR<organsCreateInput, organsUncheckedCreateInput>
        /**
         * In case the organs was found with the provided `where` argument, update it with this data.
         */
        update: XOR<organsUpdateInput, organsUncheckedUpdateInput>
    };
    /**
     * organs delete
     */
    export type organsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
        /**
         * Filter which organs to delete.
         */
        where: organsWhereUniqueInput
    };
    /**
     * organs deleteMany
     */
    export type organsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which organs to delete
         */
        where?: organsWhereInput
        /**
         * Limit how many organs to delete.
         */
        limit?: number
    };
    /**
     * organs.recipient
     */
    export type organs$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the patients
         */
        select?: patientsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the patients
         */
        omit?: patientsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: patientsInclude<ExtArgs> | null
        where?: patientsWhereInput
    };
    /**
     * organs without action
     */
    export type organsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the organs
         */
        select?: organsSelect<ExtArgs> | null
        /**
         * Omit specific fields from the organs
         */
        omit?: organsOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: organsInclude<ExtArgs> | null
    };
    /**
     * Model waitlist
     */
    export type AggregateWaitlist = {
        _count: WaitlistCountAggregateOutputType | null
        _avg: WaitlistAvgAggregateOutputType | null
        _sum: WaitlistSumAggregateOutputType | null
        _min: WaitlistMinAggregateOutputType | null
        _max: WaitlistMaxAggregateOutputType | null
    };
    export type WaitlistAvgAggregateOutputType = {
        organSize: number | null
        organSizeThreshold: number | null
    };
    export type WaitlistSumAggregateOutputType = {
        organSize: number | null
        organSizeThreshold: number | null
    };
    export type WaitlistMinAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        waitlistId: string | null
        patientId: string | null
        organType: $Enums.OrganType | null
        organSize: number | null
        organSizeThreshold: number | null
    };
    export type WaitlistMaxAggregateOutputType = {
        createdAt: Date | null
        updatedAt: Date | null
        deactivatedAt: Date | null
        waitlistId: string | null
        patientId: string | null
        organType: $Enums.OrganType | null
        organSize: number | null
        organSizeThreshold: number | null
    };
    export type WaitlistCountAggregateOutputType = {
        createdAt: number
        updatedAt: number
        deactivatedAt: number
        waitlistId: number
        patientId: number
        organType: number
        organSize: number
        organSizeThreshold: number
        _all: number
    };
    export type WaitlistAvgAggregateInputType = {
        organSize?: true
        organSizeThreshold?: true
    };
    export type WaitlistSumAggregateInputType = {
        organSize?: true
        organSizeThreshold?: true
    };
    export type WaitlistMinAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        waitlistId?: true
        patientId?: true
        organType?: true
        organSize?: true
        organSizeThreshold?: true
    };
    export type WaitlistMaxAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        waitlistId?: true
        patientId?: true
        organType?: true
        organSize?: true
        organSizeThreshold?: true
    };
    export type WaitlistCountAggregateInputType = {
        createdAt?: true
        updatedAt?: true
        deactivatedAt?: true
        waitlistId?: true
        patientId?: true
        organType?: true
        organSize?: true
        organSizeThreshold?: true
        _all?: true
    };
    export type WaitlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which waitlist to aggregate.
         */
        where?: waitlistWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of waitlists to fetch.
         */
        orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: waitlistWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` waitlists from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` waitlists.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned waitlists
        **/
        _count?: true | WaitlistCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: WaitlistAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: WaitlistSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: WaitlistMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: WaitlistMaxAggregateInputType
    };
    export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlist[P]>
        : GetScalarType<T[P], AggregateWaitlist[P]>
    };
    export type waitlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: waitlistWhereInput
        orderBy?: waitlistOrderByWithAggregationInput | waitlistOrderByWithAggregationInput[]
        by: WaitlistScalarFieldEnum[] | WaitlistScalarFieldEnum
        having?: waitlistScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: WaitlistCountAggregateInputType | true
        _avg?: WaitlistAvgAggregateInputType
        _sum?: WaitlistSumAggregateInputType
        _min?: WaitlistMinAggregateInputType
        _max?: WaitlistMaxAggregateInputType
    };
    export type WaitlistGroupByOutputType = {
        createdAt: Date
        updatedAt: Date
        deactivatedAt: Date | null
        waitlistId: string
        patientId: string
        organType: $Enums.OrganType
        organSize: number | null
        organSizeThreshold: number | null
        _count: WaitlistCountAggregateOutputType | null
        _avg: WaitlistAvgAggregateOutputType | null
        _sum: WaitlistSumAggregateOutputType | null
        _min: WaitlistMinAggregateOutputType | null
        _max: WaitlistMaxAggregateOutputType | null
    };
    type GetWaitlistGroupByPayload<T extends waitlistGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<WaitlistGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
                : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
            }
        >
    >;
    export type waitlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        waitlistId?: boolean
        patientId?: boolean
        organType?: boolean
        organSize?: boolean
        organSizeThreshold?: boolean
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["waitlist"]>;
    export type waitlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        waitlistId?: boolean
        patientId?: boolean
        organType?: boolean
        organSize?: boolean
        organSizeThreshold?: boolean
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["waitlist"]>;
    export type waitlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        waitlistId?: boolean
        patientId?: boolean
        organType?: boolean
        organSize?: boolean
        organSizeThreshold?: boolean
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["waitlist"]>;
    export type waitlistSelectScalar = {
        createdAt?: boolean
        updatedAt?: boolean
        deactivatedAt?: boolean
        waitlistId?: boolean
        patientId?: boolean
        organType?: boolean
        organSize?: boolean
        organSizeThreshold?: boolean
    };
    export type waitlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "updatedAt" | "deactivatedAt" | "waitlistId" | "patientId" | "organType" | "organSize" | "organSizeThreshold", ExtArgs["result"]["waitlist"]>;
    export type waitlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    };
    export type waitlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    };
    export type waitlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        patient?: boolean | patientsDefaultArgs<ExtArgs>
    };
    export type $waitlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "waitlist"
        objects: {
            patient: Prisma.$patientsPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            createdAt: Date
            updatedAt: Date
            deactivatedAt: Date | null
            waitlistId: string
            patientId: string
            organType: $Enums.OrganType
            organSize: number | null
            organSizeThreshold: number | null
        }, ExtArgs["result"]["waitlist"]>
        composites: {}
    };
    type waitlistGetPayload<S extends boolean | null | undefined | waitlistDefaultArgs> = $Result.GetResult<Prisma.$waitlistPayload, S>;
    type waitlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<waitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: WaitlistCountAggregateInputType | true
    };
    /**
     * waitlist findUnique
     */
    export type waitlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter, which waitlist to fetch.
         */
        where: waitlistWhereUniqueInput
    };
    /**
     * waitlist findUniqueOrThrow
     */
    export type waitlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter, which waitlist to fetch.
         */
        where: waitlistWhereUniqueInput
    };
    /**
     * waitlist findFirst
     */
    export type waitlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter, which waitlist to fetch.
         */
        where?: waitlistWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of waitlists to fetch.
         */
        orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for waitlists.
         */
        cursor?: waitlistWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` waitlists from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` waitlists.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of waitlists.
         */
        distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
    };
    /**
     * waitlist findFirstOrThrow
     */
    export type waitlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter, which waitlist to fetch.
         */
        where?: waitlistWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of waitlists to fetch.
         */
        orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for waitlists.
         */
        cursor?: waitlistWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` waitlists from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` waitlists.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of waitlists.
         */
        distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
    };
    /**
     * waitlist findMany
     */
    export type waitlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter, which waitlists to fetch.
         */
        where?: waitlistWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of waitlists to fetch.
         */
        orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing waitlists.
         */
        cursor?: waitlistWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` waitlists from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` waitlists.
         */
        skip?: number
        distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
    };
    /**
     * waitlist create
     */
    export type waitlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * The data needed to create a waitlist.
         */
        data: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
    };
    /**
     * waitlist createMany
     */
    export type waitlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many waitlists.
         */
        data: waitlistCreateManyInput | waitlistCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * waitlist createManyAndReturn
     */
    export type waitlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * The data used to create many waitlists.
         */
        data: waitlistCreateManyInput | waitlistCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * waitlist update
     */
    export type waitlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * The data needed to update a waitlist.
         */
        data: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
        /**
         * Choose, which waitlist to update.
         */
        where: waitlistWhereUniqueInput
    };
    /**
     * waitlist updateMany
     */
    export type waitlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update waitlists.
         */
        data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
        /**
         * Filter which waitlists to update
         */
        where?: waitlistWhereInput
        /**
         * Limit how many waitlists to update.
         */
        limit?: number
    };
    /**
     * waitlist updateManyAndReturn
     */
    export type waitlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * The data used to update waitlists.
         */
        data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
        /**
         * Filter which waitlists to update
         */
        where?: waitlistWhereInput
        /**
         * Limit how many waitlists to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistIncludeUpdateManyAndReturn<ExtArgs> | null
    };
    /**
     * waitlist upsert
     */
    export type waitlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * The filter to search for the waitlist to update in case it exists.
         */
        where: waitlistWhereUniqueInput
        /**
         * In case the waitlist found by the `where` argument doesn't exist, create a new waitlist with this data.
         */
        create: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
        /**
         * In case the waitlist was found with the provided `where` argument, update it with this data.
         */
        update: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
    };
    /**
     * waitlist delete
     */
    export type waitlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
        /**
         * Filter which waitlist to delete.
         */
        where: waitlistWhereUniqueInput
    };
    /**
     * waitlist deleteMany
     */
    export type waitlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which waitlists to delete
         */
        where?: waitlistWhereInput
        /**
         * Limit how many waitlists to delete.
         */
        limit?: number
    };
    /**
     * waitlist without action
     */
    export type waitlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the waitlist
         */
        select?: waitlistSelect<ExtArgs> | null
        /**
         * Omit specific fields from the waitlist
         */
        omit?: waitlistOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: waitlistInclude<ExtArgs> | null
    };
    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
    export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum];
    export type OrgansScalarFieldEnum = (typeof OrgansScalarFieldEnum)[keyof typeof OrgansScalarFieldEnum];
    export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum];
    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
    /**
     * Field references
     */
    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
    /**
     * Reference to a field of type 'BloodType'
     */
    export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>;
    /**
     * Reference to a field of type 'BloodType[]'
     */
    export type ListEnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType[]'>;
    /**
     * Reference to a field of type 'OrganType'
     */
    export type EnumOrganTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganType'>;
    /**
     * Reference to a field of type 'OrganType[]'
     */
    export type ListEnumOrganTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganType[]'>;
    /**
     * Deep Input Types
     */
    export type patientsWhereInput = {
        AND?: patientsWhereInput | patientsWhereInput[]
        OR?: patientsWhereInput[]
        NOT?: patientsWhereInput | patientsWhereInput[]
        createdAt?: DateTimeFilter<"patients"> | Date | string
        updatedAt?: DateTimeFilter<"patients"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"patients"> | Date | string | null
        patientId?: StringFilter<"patients"> | string
        latitude?: FloatFilter<"patients"> | number
        longitude?: FloatFilter<"patients"> | number
        firstName?: StringFilter<"patients"> | string
        lastName?: StringFilter<"patients"> | string
        age?: IntFilter<"patients"> | number
        ssn?: StringFilter<"patients"> | string
        bloodType?: EnumBloodTypeFilter<"patients"> | $Enums.BloodType
        organsDonated?: OrgansListRelationFilter
        organsReceived?: OrgansListRelationFilter
        transplantNeeds?: WaitlistListRelationFilter
    };
    export type patientsOrderByWithRelationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        patientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        age?: SortOrder
        ssn?: SortOrder
        bloodType?: SortOrder
        organsDonated?: organsOrderByRelationAggregateInput
        organsReceived?: organsOrderByRelationAggregateInput
        transplantNeeds?: waitlistOrderByRelationAggregateInput
    };
    export type patientsWhereUniqueInput = Prisma.AtLeast<{
        patientId?: string
        ssn?: string
        AND?: patientsWhereInput | patientsWhereInput[]
        OR?: patientsWhereInput[]
        NOT?: patientsWhereInput | patientsWhereInput[]
        createdAt?: DateTimeFilter<"patients"> | Date | string
        updatedAt?: DateTimeFilter<"patients"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"patients"> | Date | string | null
        latitude?: FloatFilter<"patients"> | number
        longitude?: FloatFilter<"patients"> | number
        firstName?: StringFilter<"patients"> | string
        lastName?: StringFilter<"patients"> | string
        age?: IntFilter<"patients"> | number
        bloodType?: EnumBloodTypeFilter<"patients"> | $Enums.BloodType
        organsDonated?: OrgansListRelationFilter
        organsReceived?: OrgansListRelationFilter
        transplantNeeds?: WaitlistListRelationFilter
    }, "patientId" | "ssn">;
    export type patientsOrderByWithAggregationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        patientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        age?: SortOrder
        ssn?: SortOrder
        bloodType?: SortOrder
        _count?: patientsCountOrderByAggregateInput
        _avg?: patientsAvgOrderByAggregateInput
        _max?: patientsMaxOrderByAggregateInput
        _min?: patientsMinOrderByAggregateInput
        _sum?: patientsSumOrderByAggregateInput
    };
    export type patientsScalarWhereWithAggregatesInput = {
        AND?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
        OR?: patientsScalarWhereWithAggregatesInput[]
        NOT?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
        createdAt?: DateTimeWithAggregatesFilter<"patients"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"patients"> | Date | string
        deactivatedAt?: DateTimeNullableWithAggregatesFilter<"patients"> | Date | string | null
        patientId?: StringWithAggregatesFilter<"patients"> | string
        latitude?: FloatWithAggregatesFilter<"patients"> | number
        longitude?: FloatWithAggregatesFilter<"patients"> | number
        firstName?: StringWithAggregatesFilter<"patients"> | string
        lastName?: StringWithAggregatesFilter<"patients"> | string
        age?: IntWithAggregatesFilter<"patients"> | number
        ssn?: StringWithAggregatesFilter<"patients"> | string
        bloodType?: EnumBloodTypeWithAggregatesFilter<"patients"> | $Enums.BloodType
    };
    export type organsWhereInput = {
        AND?: organsWhereInput | organsWhereInput[]
        OR?: organsWhereInput[]
        NOT?: organsWhereInput | organsWhereInput[]
        createdAt?: DateTimeFilter<"organs"> | Date | string
        updatedAt?: DateTimeFilter<"organs"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"organs"> | Date | string | null
        organId?: StringFilter<"organs"> | string
        donorId?: StringFilter<"organs"> | string
        recipientId?: StringNullableFilter<"organs"> | string | null
        latitude?: FloatFilter<"organs"> | number
        longitude?: FloatFilter<"organs"> | number
        organType?: EnumOrganTypeFilter<"organs"> | $Enums.OrganType
        bloodType?: EnumBloodTypeFilter<"organs"> | $Enums.BloodType
        organSize?: IntFilter<"organs"> | number
        donor?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
        recipient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
    };
    export type organsOrderByWithRelationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        organId?: SortOrder
        donorId?: SortOrder
        recipientId?: SortOrderInput | SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        organType?: SortOrder
        bloodType?: SortOrder
        organSize?: SortOrder
        donor?: patientsOrderByWithRelationInput
        recipient?: patientsOrderByWithRelationInput
    };
    export type organsWhereUniqueInput = Prisma.AtLeast<{
        organId?: string
        AND?: organsWhereInput | organsWhereInput[]
        OR?: organsWhereInput[]
        NOT?: organsWhereInput | organsWhereInput[]
        createdAt?: DateTimeFilter<"organs"> | Date | string
        updatedAt?: DateTimeFilter<"organs"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"organs"> | Date | string | null
        donorId?: StringFilter<"organs"> | string
        recipientId?: StringNullableFilter<"organs"> | string | null
        latitude?: FloatFilter<"organs"> | number
        longitude?: FloatFilter<"organs"> | number
        organType?: EnumOrganTypeFilter<"organs"> | $Enums.OrganType
        bloodType?: EnumBloodTypeFilter<"organs"> | $Enums.BloodType
        organSize?: IntFilter<"organs"> | number
        donor?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
        recipient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
    }, "organId">;
    export type organsOrderByWithAggregationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        organId?: SortOrder
        donorId?: SortOrder
        recipientId?: SortOrderInput | SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        organType?: SortOrder
        bloodType?: SortOrder
        organSize?: SortOrder
        _count?: organsCountOrderByAggregateInput
        _avg?: organsAvgOrderByAggregateInput
        _max?: organsMaxOrderByAggregateInput
        _min?: organsMinOrderByAggregateInput
        _sum?: organsSumOrderByAggregateInput
    };
    export type organsScalarWhereWithAggregatesInput = {
        AND?: organsScalarWhereWithAggregatesInput | organsScalarWhereWithAggregatesInput[]
        OR?: organsScalarWhereWithAggregatesInput[]
        NOT?: organsScalarWhereWithAggregatesInput | organsScalarWhereWithAggregatesInput[]
        createdAt?: DateTimeWithAggregatesFilter<"organs"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"organs"> | Date | string
        deactivatedAt?: DateTimeNullableWithAggregatesFilter<"organs"> | Date | string | null
        organId?: StringWithAggregatesFilter<"organs"> | string
        donorId?: StringWithAggregatesFilter<"organs"> | string
        recipientId?: StringNullableWithAggregatesFilter<"organs"> | string | null
        latitude?: FloatWithAggregatesFilter<"organs"> | number
        longitude?: FloatWithAggregatesFilter<"organs"> | number
        organType?: EnumOrganTypeWithAggregatesFilter<"organs"> | $Enums.OrganType
        bloodType?: EnumBloodTypeWithAggregatesFilter<"organs"> | $Enums.BloodType
        organSize?: IntWithAggregatesFilter<"organs"> | number
    };
    export type waitlistWhereInput = {
        AND?: waitlistWhereInput | waitlistWhereInput[]
        OR?: waitlistWhereInput[]
        NOT?: waitlistWhereInput | waitlistWhereInput[]
        createdAt?: DateTimeFilter<"waitlist"> | Date | string
        updatedAt?: DateTimeFilter<"waitlist"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"waitlist"> | Date | string | null
        waitlistId?: StringFilter<"waitlist"> | string
        patientId?: StringFilter<"waitlist"> | string
        organType?: EnumOrganTypeFilter<"waitlist"> | $Enums.OrganType
        organSize?: IntNullableFilter<"waitlist"> | number | null
        organSizeThreshold?: IntNullableFilter<"waitlist"> | number | null
        patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    };
    export type waitlistOrderByWithRelationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        waitlistId?: SortOrder
        patientId?: SortOrder
        organType?: SortOrder
        organSize?: SortOrderInput | SortOrder
        organSizeThreshold?: SortOrderInput | SortOrder
        patient?: patientsOrderByWithRelationInput
    };
    export type waitlistWhereUniqueInput = Prisma.AtLeast<{
        waitlistId?: string
        AND?: waitlistWhereInput | waitlistWhereInput[]
        OR?: waitlistWhereInput[]
        NOT?: waitlistWhereInput | waitlistWhereInput[]
        createdAt?: DateTimeFilter<"waitlist"> | Date | string
        updatedAt?: DateTimeFilter<"waitlist"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"waitlist"> | Date | string | null
        patientId?: StringFilter<"waitlist"> | string
        organType?: EnumOrganTypeFilter<"waitlist"> | $Enums.OrganType
        organSize?: IntNullableFilter<"waitlist"> | number | null
        organSizeThreshold?: IntNullableFilter<"waitlist"> | number | null
        patient?: XOR<PatientsScalarRelationFilter, patientsWhereInput>
    }, "waitlistId">;
    export type waitlistOrderByWithAggregationInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrderInput | SortOrder
        waitlistId?: SortOrder
        patientId?: SortOrder
        organType?: SortOrder
        organSize?: SortOrderInput | SortOrder
        organSizeThreshold?: SortOrderInput | SortOrder
        _count?: waitlistCountOrderByAggregateInput
        _avg?: waitlistAvgOrderByAggregateInput
        _max?: waitlistMaxOrderByAggregateInput
        _min?: waitlistMinOrderByAggregateInput
        _sum?: waitlistSumOrderByAggregateInput
    };
    export type waitlistScalarWhereWithAggregatesInput = {
        AND?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
        OR?: waitlistScalarWhereWithAggregatesInput[]
        NOT?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
        createdAt?: DateTimeWithAggregatesFilter<"waitlist"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"waitlist"> | Date | string
        deactivatedAt?: DateTimeNullableWithAggregatesFilter<"waitlist"> | Date | string | null
        waitlistId?: StringWithAggregatesFilter<"waitlist"> | string
        patientId?: StringWithAggregatesFilter<"waitlist"> | string
        organType?: EnumOrganTypeWithAggregatesFilter<"waitlist"> | $Enums.OrganType
        organSize?: IntNullableWithAggregatesFilter<"waitlist"> | number | null
        organSizeThreshold?: IntNullableWithAggregatesFilter<"waitlist"> | number | null
    };
    export type patientsCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsCreateNestedManyWithoutDonorInput
        organsReceived?: organsCreateNestedManyWithoutRecipientInput
        transplantNeeds?: waitlistCreateNestedManyWithoutPatientInput
    };
    export type patientsUncheckedCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsUncheckedCreateNestedManyWithoutDonorInput
        organsReceived?: organsUncheckedCreateNestedManyWithoutRecipientInput
        transplantNeeds?: waitlistUncheckedCreateNestedManyWithoutPatientInput
    };
    export type patientsUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUpdateManyWithoutDonorNestedInput
        organsReceived?: organsUpdateManyWithoutRecipientNestedInput
        transplantNeeds?: waitlistUpdateManyWithoutPatientNestedInput
    };
    export type patientsUncheckedUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUncheckedUpdateManyWithoutDonorNestedInput
        organsReceived?: organsUncheckedUpdateManyWithoutRecipientNestedInput
        transplantNeeds?: waitlistUncheckedUpdateManyWithoutPatientNestedInput
    };
    export type patientsCreateManyInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
    };
    export type patientsUpdateManyMutationInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    };
    export type patientsUncheckedUpdateManyInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    };
    export type organsCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
        donor: patientsCreateNestedOneWithoutOrgansDonatedInput
        recipient?: patientsCreateNestedOneWithoutOrgansReceivedInput
    };
    export type organsUncheckedCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        donorId: string
        recipientId?: string | null
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type organsUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
        donor?: patientsUpdateOneRequiredWithoutOrgansDonatedNestedInput
        recipient?: patientsUpdateOneWithoutOrgansReceivedNestedInput
    };
    export type organsUncheckedUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        donorId?: StringFieldUpdateOperationsInput | string
        recipientId?: NullableStringFieldUpdateOperationsInput | string | null
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type organsCreateManyInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        donorId: string
        recipientId?: string | null
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type organsUpdateManyMutationInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type organsUncheckedUpdateManyInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        donorId?: StringFieldUpdateOperationsInput | string
        recipientId?: NullableStringFieldUpdateOperationsInput | string | null
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type waitlistCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
        patient: patientsCreateNestedOneWithoutTransplantNeedsInput
    };
    export type waitlistUncheckedCreateInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        patientId: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
    };
    export type waitlistUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
        patient?: patientsUpdateOneRequiredWithoutTransplantNeedsNestedInput
    };
    export type waitlistUncheckedUpdateInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        patientId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    export type waitlistCreateManyInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        patientId: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
    };
    export type waitlistUpdateManyMutationInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    export type waitlistUncheckedUpdateManyInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        patientId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    };
    export type DateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    };
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
    };
    export type FloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    };
    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    };
    export type EnumBloodTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
        in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
    };
    export type OrgansListRelationFilter = {
        every?: organsWhereInput
        some?: organsWhereInput
        none?: organsWhereInput
    };
    export type WaitlistListRelationFilter = {
        every?: waitlistWhereInput
        some?: waitlistWhereInput
        none?: waitlistWhereInput
    };
    export type SortOrderInput = {
        sort: SortOrder
        nulls?: NullsOrder
    };
    export type organsOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type waitlistOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type patientsCountOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        patientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        age?: SortOrder
        ssn?: SortOrder
        bloodType?: SortOrder
    };
    export type patientsAvgOrderByAggregateInput = {
        latitude?: SortOrder
        longitude?: SortOrder
        age?: SortOrder
    };
    export type patientsMaxOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        patientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        age?: SortOrder
        ssn?: SortOrder
        bloodType?: SortOrder
    };
    export type patientsMinOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        patientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        age?: SortOrder
        ssn?: SortOrder
        bloodType?: SortOrder
    };
    export type patientsSumOrderByAggregateInput = {
        latitude?: SortOrder
        longitude?: SortOrder
        age?: SortOrder
    };
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
    };
    export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedDateTimeNullableFilter<$PrismaModel>
        _max?: NestedDateTimeNullableFilter<$PrismaModel>
    };
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
    };
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
    };
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
    };
    export type EnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
        in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumBloodTypeFilter<$PrismaModel>
        _max?: NestedEnumBloodTypeFilter<$PrismaModel>
    };
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
    };
    export type EnumOrganTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.OrganType | EnumOrganTypeFieldRefInput<$PrismaModel>
        in?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumOrganTypeFilter<$PrismaModel> | $Enums.OrganType
    };
    export type PatientsScalarRelationFilter = {
        is?: patientsWhereInput
        isNot?: patientsWhereInput
    };
    export type PatientsNullableScalarRelationFilter = {
        is?: patientsWhereInput | null
        isNot?: patientsWhereInput | null
    };
    export type organsCountOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        organId?: SortOrder
        donorId?: SortOrder
        recipientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        organType?: SortOrder
        bloodType?: SortOrder
        organSize?: SortOrder
    };
    export type organsAvgOrderByAggregateInput = {
        latitude?: SortOrder
        longitude?: SortOrder
        organSize?: SortOrder
    };
    export type organsMaxOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        organId?: SortOrder
        donorId?: SortOrder
        recipientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        organType?: SortOrder
        bloodType?: SortOrder
        organSize?: SortOrder
    };
    export type organsMinOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        organId?: SortOrder
        donorId?: SortOrder
        recipientId?: SortOrder
        latitude?: SortOrder
        longitude?: SortOrder
        organType?: SortOrder
        bloodType?: SortOrder
        organSize?: SortOrder
    };
    export type organsSumOrderByAggregateInput = {
        latitude?: SortOrder
        longitude?: SortOrder
        organSize?: SortOrder
    };
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
    };
    export type EnumOrganTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.OrganType | EnumOrganTypeFieldRefInput<$PrismaModel>
        in?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumOrganTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumOrganTypeFilter<$PrismaModel>
        _max?: NestedEnumOrganTypeFilter<$PrismaModel>
    };
    export type IntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    };
    export type waitlistCountOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        waitlistId?: SortOrder
        patientId?: SortOrder
        organType?: SortOrder
        organSize?: SortOrder
        organSizeThreshold?: SortOrder
    };
    export type waitlistAvgOrderByAggregateInput = {
        organSize?: SortOrder
        organSizeThreshold?: SortOrder
    };
    export type waitlistMaxOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        waitlistId?: SortOrder
        patientId?: SortOrder
        organType?: SortOrder
        organSize?: SortOrder
        organSizeThreshold?: SortOrder
    };
    export type waitlistMinOrderByAggregateInput = {
        createdAt?: SortOrder
        updatedAt?: SortOrder
        deactivatedAt?: SortOrder
        waitlistId?: SortOrder
        patientId?: SortOrder
        organType?: SortOrder
        organSize?: SortOrder
        organSizeThreshold?: SortOrder
    };
    export type waitlistSumOrderByAggregateInput = {
        organSize?: SortOrder
        organSizeThreshold?: SortOrder
    };
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
    };
    export type organsCreateNestedManyWithoutDonorInput = {
        create?: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput> | organsCreateWithoutDonorInput[] | organsUncheckedCreateWithoutDonorInput[]
        connectOrCreate?: organsCreateOrConnectWithoutDonorInput | organsCreateOrConnectWithoutDonorInput[]
        createMany?: organsCreateManyDonorInputEnvelope
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
    };
    export type organsCreateNestedManyWithoutRecipientInput = {
        create?: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput> | organsCreateWithoutRecipientInput[] | organsUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: organsCreateOrConnectWithoutRecipientInput | organsCreateOrConnectWithoutRecipientInput[]
        createMany?: organsCreateManyRecipientInputEnvelope
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
    };
    export type waitlistCreateNestedManyWithoutPatientInput = {
        create?: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput> | waitlistCreateWithoutPatientInput[] | waitlistUncheckedCreateWithoutPatientInput[]
        connectOrCreate?: waitlistCreateOrConnectWithoutPatientInput | waitlistCreateOrConnectWithoutPatientInput[]
        createMany?: waitlistCreateManyPatientInputEnvelope
        connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    };
    export type organsUncheckedCreateNestedManyWithoutDonorInput = {
        create?: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput> | organsCreateWithoutDonorInput[] | organsUncheckedCreateWithoutDonorInput[]
        connectOrCreate?: organsCreateOrConnectWithoutDonorInput | organsCreateOrConnectWithoutDonorInput[]
        createMany?: organsCreateManyDonorInputEnvelope
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
    };
    export type organsUncheckedCreateNestedManyWithoutRecipientInput = {
        create?: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput> | organsCreateWithoutRecipientInput[] | organsUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: organsCreateOrConnectWithoutRecipientInput | organsCreateOrConnectWithoutRecipientInput[]
        createMany?: organsCreateManyRecipientInputEnvelope
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
    };
    export type waitlistUncheckedCreateNestedManyWithoutPatientInput = {
        create?: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput> | waitlistCreateWithoutPatientInput[] | waitlistUncheckedCreateWithoutPatientInput[]
        connectOrCreate?: waitlistCreateOrConnectWithoutPatientInput | waitlistCreateOrConnectWithoutPatientInput[]
        createMany?: waitlistCreateManyPatientInputEnvelope
        connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
    };
    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string
    };
    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null
    };
    export type StringFieldUpdateOperationsInput = {
        set?: string
    };
    export type FloatFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    };
    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    };
    export type EnumBloodTypeFieldUpdateOperationsInput = {
        set?: $Enums.BloodType
    };
    export type organsUpdateManyWithoutDonorNestedInput = {
        create?: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput> | organsCreateWithoutDonorInput[] | organsUncheckedCreateWithoutDonorInput[]
        connectOrCreate?: organsCreateOrConnectWithoutDonorInput | organsCreateOrConnectWithoutDonorInput[]
        upsert?: organsUpsertWithWhereUniqueWithoutDonorInput | organsUpsertWithWhereUniqueWithoutDonorInput[]
        createMany?: organsCreateManyDonorInputEnvelope
        set?: organsWhereUniqueInput | organsWhereUniqueInput[]
        disconnect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        delete?: organsWhereUniqueInput | organsWhereUniqueInput[]
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        update?: organsUpdateWithWhereUniqueWithoutDonorInput | organsUpdateWithWhereUniqueWithoutDonorInput[]
        updateMany?: organsUpdateManyWithWhereWithoutDonorInput | organsUpdateManyWithWhereWithoutDonorInput[]
        deleteMany?: organsScalarWhereInput | organsScalarWhereInput[]
    };
    export type organsUpdateManyWithoutRecipientNestedInput = {
        create?: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput> | organsCreateWithoutRecipientInput[] | organsUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: organsCreateOrConnectWithoutRecipientInput | organsCreateOrConnectWithoutRecipientInput[]
        upsert?: organsUpsertWithWhereUniqueWithoutRecipientInput | organsUpsertWithWhereUniqueWithoutRecipientInput[]
        createMany?: organsCreateManyRecipientInputEnvelope
        set?: organsWhereUniqueInput | organsWhereUniqueInput[]
        disconnect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        delete?: organsWhereUniqueInput | organsWhereUniqueInput[]
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        update?: organsUpdateWithWhereUniqueWithoutRecipientInput | organsUpdateWithWhereUniqueWithoutRecipientInput[]
        updateMany?: organsUpdateManyWithWhereWithoutRecipientInput | organsUpdateManyWithWhereWithoutRecipientInput[]
        deleteMany?: organsScalarWhereInput | organsScalarWhereInput[]
    };
    export type waitlistUpdateManyWithoutPatientNestedInput = {
        create?: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput> | waitlistCreateWithoutPatientInput[] | waitlistUncheckedCreateWithoutPatientInput[]
        connectOrCreate?: waitlistCreateOrConnectWithoutPatientInput | waitlistCreateOrConnectWithoutPatientInput[]
        upsert?: waitlistUpsertWithWhereUniqueWithoutPatientInput | waitlistUpsertWithWhereUniqueWithoutPatientInput[]
        createMany?: waitlistCreateManyPatientInputEnvelope
        set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        update?: waitlistUpdateWithWhereUniqueWithoutPatientInput | waitlistUpdateWithWhereUniqueWithoutPatientInput[]
        updateMany?: waitlistUpdateManyWithWhereWithoutPatientInput | waitlistUpdateManyWithWhereWithoutPatientInput[]
        deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
    };
    export type organsUncheckedUpdateManyWithoutDonorNestedInput = {
        create?: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput> | organsCreateWithoutDonorInput[] | organsUncheckedCreateWithoutDonorInput[]
        connectOrCreate?: organsCreateOrConnectWithoutDonorInput | organsCreateOrConnectWithoutDonorInput[]
        upsert?: organsUpsertWithWhereUniqueWithoutDonorInput | organsUpsertWithWhereUniqueWithoutDonorInput[]
        createMany?: organsCreateManyDonorInputEnvelope
        set?: organsWhereUniqueInput | organsWhereUniqueInput[]
        disconnect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        delete?: organsWhereUniqueInput | organsWhereUniqueInput[]
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        update?: organsUpdateWithWhereUniqueWithoutDonorInput | organsUpdateWithWhereUniqueWithoutDonorInput[]
        updateMany?: organsUpdateManyWithWhereWithoutDonorInput | organsUpdateManyWithWhereWithoutDonorInput[]
        deleteMany?: organsScalarWhereInput | organsScalarWhereInput[]
    };
    export type organsUncheckedUpdateManyWithoutRecipientNestedInput = {
        create?: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput> | organsCreateWithoutRecipientInput[] | organsUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: organsCreateOrConnectWithoutRecipientInput | organsCreateOrConnectWithoutRecipientInput[]
        upsert?: organsUpsertWithWhereUniqueWithoutRecipientInput | organsUpsertWithWhereUniqueWithoutRecipientInput[]
        createMany?: organsCreateManyRecipientInputEnvelope
        set?: organsWhereUniqueInput | organsWhereUniqueInput[]
        disconnect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        delete?: organsWhereUniqueInput | organsWhereUniqueInput[]
        connect?: organsWhereUniqueInput | organsWhereUniqueInput[]
        update?: organsUpdateWithWhereUniqueWithoutRecipientInput | organsUpdateWithWhereUniqueWithoutRecipientInput[]
        updateMany?: organsUpdateManyWithWhereWithoutRecipientInput | organsUpdateManyWithWhereWithoutRecipientInput[]
        deleteMany?: organsScalarWhereInput | organsScalarWhereInput[]
    };
    export type waitlistUncheckedUpdateManyWithoutPatientNestedInput = {
        create?: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput> | waitlistCreateWithoutPatientInput[] | waitlistUncheckedCreateWithoutPatientInput[]
        connectOrCreate?: waitlistCreateOrConnectWithoutPatientInput | waitlistCreateOrConnectWithoutPatientInput[]
        upsert?: waitlistUpsertWithWhereUniqueWithoutPatientInput | waitlistUpsertWithWhereUniqueWithoutPatientInput[]
        createMany?: waitlistCreateManyPatientInputEnvelope
        set?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        disconnect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        delete?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        connect?: waitlistWhereUniqueInput | waitlistWhereUniqueInput[]
        update?: waitlistUpdateWithWhereUniqueWithoutPatientInput | waitlistUpdateWithWhereUniqueWithoutPatientInput[]
        updateMany?: waitlistUpdateManyWithWhereWithoutPatientInput | waitlistUpdateManyWithWhereWithoutPatientInput[]
        deleteMany?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
    };
    export type patientsCreateNestedOneWithoutOrgansDonatedInput = {
        create?: XOR<patientsCreateWithoutOrgansDonatedInput, patientsUncheckedCreateWithoutOrgansDonatedInput>
        connectOrCreate?: patientsCreateOrConnectWithoutOrgansDonatedInput
        connect?: patientsWhereUniqueInput
    };
    export type patientsCreateNestedOneWithoutOrgansReceivedInput = {
        create?: XOR<patientsCreateWithoutOrgansReceivedInput, patientsUncheckedCreateWithoutOrgansReceivedInput>
        connectOrCreate?: patientsCreateOrConnectWithoutOrgansReceivedInput
        connect?: patientsWhereUniqueInput
    };
    export type EnumOrganTypeFieldUpdateOperationsInput = {
        set?: $Enums.OrganType
    };
    export type patientsUpdateOneRequiredWithoutOrgansDonatedNestedInput = {
        create?: XOR<patientsCreateWithoutOrgansDonatedInput, patientsUncheckedCreateWithoutOrgansDonatedInput>
        connectOrCreate?: patientsCreateOrConnectWithoutOrgansDonatedInput
        upsert?: patientsUpsertWithoutOrgansDonatedInput
        connect?: patientsWhereUniqueInput
        update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutOrgansDonatedInput, patientsUpdateWithoutOrgansDonatedInput>, patientsUncheckedUpdateWithoutOrgansDonatedInput>
    };
    export type patientsUpdateOneWithoutOrgansReceivedNestedInput = {
        create?: XOR<patientsCreateWithoutOrgansReceivedInput, patientsUncheckedCreateWithoutOrgansReceivedInput>
        connectOrCreate?: patientsCreateOrConnectWithoutOrgansReceivedInput
        upsert?: patientsUpsertWithoutOrgansReceivedInput
        disconnect?: patientsWhereInput | boolean
        delete?: patientsWhereInput | boolean
        connect?: patientsWhereUniqueInput
        update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutOrgansReceivedInput, patientsUpdateWithoutOrgansReceivedInput>, patientsUncheckedUpdateWithoutOrgansReceivedInput>
    };
    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null
    };
    export type patientsCreateNestedOneWithoutTransplantNeedsInput = {
        create?: XOR<patientsCreateWithoutTransplantNeedsInput, patientsUncheckedCreateWithoutTransplantNeedsInput>
        connectOrCreate?: patientsCreateOrConnectWithoutTransplantNeedsInput
        connect?: patientsWhereUniqueInput
    };
    export type NullableIntFieldUpdateOperationsInput = {
        set?: number | null
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    };
    export type patientsUpdateOneRequiredWithoutTransplantNeedsNestedInput = {
        create?: XOR<patientsCreateWithoutTransplantNeedsInput, patientsUncheckedCreateWithoutTransplantNeedsInput>
        connectOrCreate?: patientsCreateOrConnectWithoutTransplantNeedsInput
        upsert?: patientsUpsertWithoutTransplantNeedsInput
        connect?: patientsWhereUniqueInput
        update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutTransplantNeedsInput, patientsUpdateWithoutTransplantNeedsInput>, patientsUncheckedUpdateWithoutTransplantNeedsInput>
    };
    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    };
    export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    };
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
    };
    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    };
    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    };
    export type NestedEnumBloodTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
        in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
    };
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
    };
    export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedDateTimeNullableFilter<$PrismaModel>
        _max?: NestedDateTimeNullableFilter<$PrismaModel>
    };
    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    };
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
    };
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
    };
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
    };
    export type NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
        in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumBloodTypeFilter<$PrismaModel>
        _max?: NestedEnumBloodTypeFilter<$PrismaModel>
    };
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
    };
    export type NestedEnumOrganTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.OrganType | EnumOrganTypeFieldRefInput<$PrismaModel>
        in?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumOrganTypeFilter<$PrismaModel> | $Enums.OrganType
    };
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
    };
    export type NestedEnumOrganTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.OrganType | EnumOrganTypeFieldRefInput<$PrismaModel>
        in?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.OrganType[] | ListEnumOrganTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumOrganTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumOrganTypeFilter<$PrismaModel>
        _max?: NestedEnumOrganTypeFilter<$PrismaModel>
    };
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
    };
    export type NestedFloatNullableFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null
        in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    };
    export type organsCreateWithoutDonorInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
        recipient?: patientsCreateNestedOneWithoutOrgansReceivedInput
    };
    export type organsUncheckedCreateWithoutDonorInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        recipientId?: string | null
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type organsCreateOrConnectWithoutDonorInput = {
        where: organsWhereUniqueInput
        create: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput>
    };
    export type organsCreateManyDonorInputEnvelope = {
        data: organsCreateManyDonorInput | organsCreateManyDonorInput[]
        skipDuplicates?: boolean
    };
    export type organsCreateWithoutRecipientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
        donor: patientsCreateNestedOneWithoutOrgansDonatedInput
    };
    export type organsUncheckedCreateWithoutRecipientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        donorId: string
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type organsCreateOrConnectWithoutRecipientInput = {
        where: organsWhereUniqueInput
        create: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput>
    };
    export type organsCreateManyRecipientInputEnvelope = {
        data: organsCreateManyRecipientInput | organsCreateManyRecipientInput[]
        skipDuplicates?: boolean
    };
    export type waitlistCreateWithoutPatientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
    };
    export type waitlistUncheckedCreateWithoutPatientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
    };
    export type waitlistCreateOrConnectWithoutPatientInput = {
        where: waitlistWhereUniqueInput
        create: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput>
    };
    export type waitlistCreateManyPatientInputEnvelope = {
        data: waitlistCreateManyPatientInput | waitlistCreateManyPatientInput[]
        skipDuplicates?: boolean
    };
    export type organsUpsertWithWhereUniqueWithoutDonorInput = {
        where: organsWhereUniqueInput
        update: XOR<organsUpdateWithoutDonorInput, organsUncheckedUpdateWithoutDonorInput>
        create: XOR<organsCreateWithoutDonorInput, organsUncheckedCreateWithoutDonorInput>
    };
    export type organsUpdateWithWhereUniqueWithoutDonorInput = {
        where: organsWhereUniqueInput
        data: XOR<organsUpdateWithoutDonorInput, organsUncheckedUpdateWithoutDonorInput>
    };
    export type organsUpdateManyWithWhereWithoutDonorInput = {
        where: organsScalarWhereInput
        data: XOR<organsUpdateManyMutationInput, organsUncheckedUpdateManyWithoutDonorInput>
    };
    export type organsScalarWhereInput = {
        AND?: organsScalarWhereInput | organsScalarWhereInput[]
        OR?: organsScalarWhereInput[]
        NOT?: organsScalarWhereInput | organsScalarWhereInput[]
        createdAt?: DateTimeFilter<"organs"> | Date | string
        updatedAt?: DateTimeFilter<"organs"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"organs"> | Date | string | null
        organId?: StringFilter<"organs"> | string
        donorId?: StringFilter<"organs"> | string
        recipientId?: StringNullableFilter<"organs"> | string | null
        latitude?: FloatFilter<"organs"> | number
        longitude?: FloatFilter<"organs"> | number
        organType?: EnumOrganTypeFilter<"organs"> | $Enums.OrganType
        bloodType?: EnumBloodTypeFilter<"organs"> | $Enums.BloodType
        organSize?: IntFilter<"organs"> | number
    };
    export type organsUpsertWithWhereUniqueWithoutRecipientInput = {
        where: organsWhereUniqueInput
        update: XOR<organsUpdateWithoutRecipientInput, organsUncheckedUpdateWithoutRecipientInput>
        create: XOR<organsCreateWithoutRecipientInput, organsUncheckedCreateWithoutRecipientInput>
    };
    export type organsUpdateWithWhereUniqueWithoutRecipientInput = {
        where: organsWhereUniqueInput
        data: XOR<organsUpdateWithoutRecipientInput, organsUncheckedUpdateWithoutRecipientInput>
    };
    export type organsUpdateManyWithWhereWithoutRecipientInput = {
        where: organsScalarWhereInput
        data: XOR<organsUpdateManyMutationInput, organsUncheckedUpdateManyWithoutRecipientInput>
    };
    export type waitlistUpsertWithWhereUniqueWithoutPatientInput = {
        where: waitlistWhereUniqueInput
        update: XOR<waitlistUpdateWithoutPatientInput, waitlistUncheckedUpdateWithoutPatientInput>
        create: XOR<waitlistCreateWithoutPatientInput, waitlistUncheckedCreateWithoutPatientInput>
    };
    export type waitlistUpdateWithWhereUniqueWithoutPatientInput = {
        where: waitlistWhereUniqueInput
        data: XOR<waitlistUpdateWithoutPatientInput, waitlistUncheckedUpdateWithoutPatientInput>
    };
    export type waitlistUpdateManyWithWhereWithoutPatientInput = {
        where: waitlistScalarWhereInput
        data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyWithoutPatientInput>
    };
    export type waitlistScalarWhereInput = {
        AND?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
        OR?: waitlistScalarWhereInput[]
        NOT?: waitlistScalarWhereInput | waitlistScalarWhereInput[]
        createdAt?: DateTimeFilter<"waitlist"> | Date | string
        updatedAt?: DateTimeFilter<"waitlist"> | Date | string
        deactivatedAt?: DateTimeNullableFilter<"waitlist"> | Date | string | null
        waitlistId?: StringFilter<"waitlist"> | string
        patientId?: StringFilter<"waitlist"> | string
        organType?: EnumOrganTypeFilter<"waitlist"> | $Enums.OrganType
        organSize?: IntNullableFilter<"waitlist"> | number | null
        organSizeThreshold?: IntNullableFilter<"waitlist"> | number | null
    };
    export type patientsCreateWithoutOrgansDonatedInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsReceived?: organsCreateNestedManyWithoutRecipientInput
        transplantNeeds?: waitlistCreateNestedManyWithoutPatientInput
    };
    export type patientsUncheckedCreateWithoutOrgansDonatedInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsReceived?: organsUncheckedCreateNestedManyWithoutRecipientInput
        transplantNeeds?: waitlistUncheckedCreateNestedManyWithoutPatientInput
    };
    export type patientsCreateOrConnectWithoutOrgansDonatedInput = {
        where: patientsWhereUniqueInput
        create: XOR<patientsCreateWithoutOrgansDonatedInput, patientsUncheckedCreateWithoutOrgansDonatedInput>
    };
    export type patientsCreateWithoutOrgansReceivedInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsCreateNestedManyWithoutDonorInput
        transplantNeeds?: waitlistCreateNestedManyWithoutPatientInput
    };
    export type patientsUncheckedCreateWithoutOrgansReceivedInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsUncheckedCreateNestedManyWithoutDonorInput
        transplantNeeds?: waitlistUncheckedCreateNestedManyWithoutPatientInput
    };
    export type patientsCreateOrConnectWithoutOrgansReceivedInput = {
        where: patientsWhereUniqueInput
        create: XOR<patientsCreateWithoutOrgansReceivedInput, patientsUncheckedCreateWithoutOrgansReceivedInput>
    };
    export type patientsUpsertWithoutOrgansDonatedInput = {
        update: XOR<patientsUpdateWithoutOrgansDonatedInput, patientsUncheckedUpdateWithoutOrgansDonatedInput>
        create: XOR<patientsCreateWithoutOrgansDonatedInput, patientsUncheckedCreateWithoutOrgansDonatedInput>
        where?: patientsWhereInput
    };
    export type patientsUpdateToOneWithWhereWithoutOrgansDonatedInput = {
        where?: patientsWhereInput
        data: XOR<patientsUpdateWithoutOrgansDonatedInput, patientsUncheckedUpdateWithoutOrgansDonatedInput>
    };
    export type patientsUpdateWithoutOrgansDonatedInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsReceived?: organsUpdateManyWithoutRecipientNestedInput
        transplantNeeds?: waitlistUpdateManyWithoutPatientNestedInput
    };
    export type patientsUncheckedUpdateWithoutOrgansDonatedInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsReceived?: organsUncheckedUpdateManyWithoutRecipientNestedInput
        transplantNeeds?: waitlistUncheckedUpdateManyWithoutPatientNestedInput
    };
    export type patientsUpsertWithoutOrgansReceivedInput = {
        update: XOR<patientsUpdateWithoutOrgansReceivedInput, patientsUncheckedUpdateWithoutOrgansReceivedInput>
        create: XOR<patientsCreateWithoutOrgansReceivedInput, patientsUncheckedCreateWithoutOrgansReceivedInput>
        where?: patientsWhereInput
    };
    export type patientsUpdateToOneWithWhereWithoutOrgansReceivedInput = {
        where?: patientsWhereInput
        data: XOR<patientsUpdateWithoutOrgansReceivedInput, patientsUncheckedUpdateWithoutOrgansReceivedInput>
    };
    export type patientsUpdateWithoutOrgansReceivedInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUpdateManyWithoutDonorNestedInput
        transplantNeeds?: waitlistUpdateManyWithoutPatientNestedInput
    };
    export type patientsUncheckedUpdateWithoutOrgansReceivedInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUncheckedUpdateManyWithoutDonorNestedInput
        transplantNeeds?: waitlistUncheckedUpdateManyWithoutPatientNestedInput
    };
    export type patientsCreateWithoutTransplantNeedsInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsCreateNestedManyWithoutDonorInput
        organsReceived?: organsCreateNestedManyWithoutRecipientInput
    };
    export type patientsUncheckedCreateWithoutTransplantNeedsInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        patientId?: string
        latitude: number
        longitude: number
        firstName: string
        lastName: string
        age: number
        ssn: string
        bloodType: $Enums.BloodType
        organsDonated?: organsUncheckedCreateNestedManyWithoutDonorInput
        organsReceived?: organsUncheckedCreateNestedManyWithoutRecipientInput
    };
    export type patientsCreateOrConnectWithoutTransplantNeedsInput = {
        where: patientsWhereUniqueInput
        create: XOR<patientsCreateWithoutTransplantNeedsInput, patientsUncheckedCreateWithoutTransplantNeedsInput>
    };
    export type patientsUpsertWithoutTransplantNeedsInput = {
        update: XOR<patientsUpdateWithoutTransplantNeedsInput, patientsUncheckedUpdateWithoutTransplantNeedsInput>
        create: XOR<patientsCreateWithoutTransplantNeedsInput, patientsUncheckedCreateWithoutTransplantNeedsInput>
        where?: patientsWhereInput
    };
    export type patientsUpdateToOneWithWhereWithoutTransplantNeedsInput = {
        where?: patientsWhereInput
        data: XOR<patientsUpdateWithoutTransplantNeedsInput, patientsUncheckedUpdateWithoutTransplantNeedsInput>
    };
    export type patientsUpdateWithoutTransplantNeedsInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUpdateManyWithoutDonorNestedInput
        organsReceived?: organsUpdateManyWithoutRecipientNestedInput
    };
    export type patientsUncheckedUpdateWithoutTransplantNeedsInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        patientId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        age?: IntFieldUpdateOperationsInput | number
        ssn?: StringFieldUpdateOperationsInput | string
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organsDonated?: organsUncheckedUpdateManyWithoutDonorNestedInput
        organsReceived?: organsUncheckedUpdateManyWithoutRecipientNestedInput
    };
    export type organsCreateManyDonorInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        recipientId?: string | null
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type organsCreateManyRecipientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        organId?: string
        donorId: string
        latitude: number
        longitude: number
        organType: $Enums.OrganType
        bloodType: $Enums.BloodType
        organSize: number
    };
    export type waitlistCreateManyPatientInput = {
        createdAt?: Date | string
        updatedAt?: Date | string
        deactivatedAt?: Date | string | null
        waitlistId?: string
        organType: $Enums.OrganType
        organSize?: number | null
        organSizeThreshold?: number | null
    };
    export type organsUpdateWithoutDonorInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
        recipient?: patientsUpdateOneWithoutOrgansReceivedNestedInput
    };
    export type organsUncheckedUpdateWithoutDonorInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        recipientId?: NullableStringFieldUpdateOperationsInput | string | null
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type organsUncheckedUpdateManyWithoutDonorInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        recipientId?: NullableStringFieldUpdateOperationsInput | string | null
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type organsUpdateWithoutRecipientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
        donor?: patientsUpdateOneRequiredWithoutOrgansDonatedNestedInput
    };
    export type organsUncheckedUpdateWithoutRecipientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        donorId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type organsUncheckedUpdateManyWithoutRecipientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        organId?: StringFieldUpdateOperationsInput | string
        donorId?: StringFieldUpdateOperationsInput | string
        latitude?: FloatFieldUpdateOperationsInput | number
        longitude?: FloatFieldUpdateOperationsInput | number
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
        organSize?: IntFieldUpdateOperationsInput | number
    };
    export type waitlistUpdateWithoutPatientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    export type waitlistUncheckedUpdateWithoutPatientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    export type waitlistUncheckedUpdateManyWithoutPatientInput = {
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        waitlistId?: StringFieldUpdateOperationsInput | string
        organType?: EnumOrganTypeFieldUpdateOperationsInput | $Enums.OrganType
        organSize?: NullableIntFieldUpdateOperationsInput | number | null
        organSizeThreshold?: NullableIntFieldUpdateOperationsInput | number | null
    };
    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */
    export type BatchPayload = {
        count: number
    };
}

export type user = {
    id: string;
    role?: string | null;
    permissions?: string[] | null;
};
