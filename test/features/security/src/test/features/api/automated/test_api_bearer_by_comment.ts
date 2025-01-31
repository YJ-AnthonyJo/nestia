import typia from "typia";

import api from "../../../../api";
import type { IToken } from "../../../../api/structures/IToken";

export const test_api_bearer_by_comment = async (
    connection: api.IConnection
): Promise<void> => {
    const output = await api.functional.bearer_by_comment(
        connection,
    );
    typia.assert(output);
};