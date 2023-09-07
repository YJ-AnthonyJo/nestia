/**
 * @packageDocumentation
 * @module api.functional.plain
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @controller [object Object]
 * @path POST /plain
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function send(
    connection: IConnection,
    body: send.Input,
): Promise<send.Output> {
    return PlainFetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "text/plain",
            },
        },
        {
            ...send.METADATA,
            path: send.path(),
        } as const,
        body,
    );
}
export namespace send {
    export type Input = Primitive<string>;
    export type Output = Primitive<string>;

    export const METADATA = {
        method: "POST",
        path: "/plain",
        request: {
            type: "text/plain",
            encrypted: false
        },
        response: {
            type: "text/plain",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/plain`;
    }
}