import { createRouteHandler } from "uploadthing/next";

import { OurFileRouter, ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({ router: ourFileRouter });
