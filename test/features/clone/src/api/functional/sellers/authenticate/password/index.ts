/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate.password
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";
import typia from "typia";

import type { ISeller } from "../../../../structures/ISeller";
import { NestiaSimulator } from "../../../../utils/NestiaSimulator";

/**
 * Change password.
 * 
 * @param input Old and new passwords
 * @return Empty object
 * 
 * @controller [object Object]
 * @path PATCH /sellers/authenticate/password/change
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function change(
    connection: IConnection,
    input: change.Input,
): Promise<void> {
    return !!connection.simulate
        ? change.simulate(
              connection,
              input,
          )
        : EncryptedFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "text/plain",
                  },
              },
              {
                  ...change.METADATA,
                  path: change.path(),
              } as const,
              input,
          );
}
export namespace change {
    export type Input = Primitive<ISeller.IChangePassword>;

    export const METADATA = {
        method: "PATCH",
        path: "/sellers/authenticate/password/change",
        request: {
            type: "text/plain",
            encrypted: true
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/sellers/authenticate/password/change`;
    }
    export const simulate = async (
        connection: IConnection,
        input: change.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        assert.body(() => typia.assert(input));
    }
}