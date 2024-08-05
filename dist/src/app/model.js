import { createEffect, sample } from "effector";
import { createBrowserHistory } from "history";
import { appStarted } from "@/shared/config/system";
import { router } from "@/shared/config/routing";
var createBrowserHistoryFx = createEffect(function () { return createBrowserHistory(); });
sample({
    clock: appStarted,
    target: createBrowserHistoryFx,
});
sample({
    clock: createBrowserHistoryFx.doneData,
    target: router.setHistory,
});
