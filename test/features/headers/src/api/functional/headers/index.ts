/**
 * @packageDocumentation
 * @module api.functional.headers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../structures/IBbsArticle";
import type { IHeaders } from "../../structures/IHeaders";
import { NestiaSimulator } from "../../utils/NestiaSimulator";

/**
 * Store a new article.
 * 
 * @param section Target section code
 * @returns Store article
 * @author Samchon
 * 
 * @controller [object Object]
 * @path PATCH /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function emplace(
    connection: IConnection<emplace.Headers>,
    section: string,
): Promise<emplace.Output> {
    return !!connection.simulate
        ? emplace.simulate(
              connection,
              section,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...emplace.METADATA,
                  path: emplace.path(section),
              } as const,
          );
}
export namespace emplace {
    export type Headers = Resolved<IHeaders>;
    export type Output = Primitive<IHeaders>;

    export const METADATA = {
        method: "PATCH",
        path: "/headers/:section",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IHeaders> =>
        typia.random<Primitive<IHeaders>>(g);
    export const simulate = async (
        connection: IConnection<emplace.Headers>,
        section: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller [object Object]
 * @path POST /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection<store.Headers>,
    section: string,
    input: store.Input,
): Promise<store.Output> {
    return !!connection.simulate
        ? store.simulate(
              connection,
              section,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...store.METADATA,
                  path: store.path(section),
              } as const,
              input,
          );
}
export namespace store {
    export type Headers = Resolved<IHeaders>;
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "POST",
        path: "/headers/:section",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IBbsArticle> =>
        typia.random<Primitive<IBbsArticle>>(g);
    export const simulate = async (
        connection: IConnection<store.Headers>,
        section: string,
        input: store.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Update an article.
 * 
 * @param section Target section code
 * @param id Target article id
 * @param input Content to update
 * @author Samchon
 * 
 * @controller [object Object]
 * @path PUT /headers/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<void> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              section,
              id,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...update.METADATA,
                  path: update.path(section, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IStore>;

    export const METADATA = {
        method: "PUT",
        path: "/headers/:section/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: string & Format<"uuid">): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        section: string,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section, id),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.param("id")(() => typia.assert(id));
        assert.body(() => typia.assert(input));
    }
}