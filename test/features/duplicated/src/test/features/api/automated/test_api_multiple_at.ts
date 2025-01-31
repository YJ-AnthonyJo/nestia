import typia from "typia";

import api from "../../../../api";
import type { IBbsArticle } from "../../../../api/structures/IBbsArticle";

export const test_api_multiple_at = async (
    connection: api.IConnection
): Promise<void> => {
    const output = await api.functional.multiple.at(
        connection,
    );
    typia.assert(output);
};