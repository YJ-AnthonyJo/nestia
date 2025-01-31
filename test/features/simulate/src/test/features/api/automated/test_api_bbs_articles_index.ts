import type { Primitive, Resolved } from "@nestia/fetcher";
import typia from "typia";

import api from "../../../../api";
import type { IBbsArticle } from "../../../../api/structures/IBbsArticle";
import type { IPage } from "../../../../api/structures/IPage";

export const test_api_bbs_articles_index = async (
    connection: api.IConnection
): Promise<void> => {
    const output = await api.functional.bbs.articles.index(
        connection,
        typia.random<Resolved<null | string>>(),
        typia.random<Primitive<IPage.IRequest>>(),
    );
    typia.assert(output);
};