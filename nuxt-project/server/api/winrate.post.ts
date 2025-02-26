import { useMyServerFunc } from "./serverFuncStore";
import { svBetTbState } from "./utils/betTableState";
const { blabla } = useMyServerFunc()
export default defineEventHandler(async (event) => {
    const res = await readBody(event);
    try {
        let a = blabla()
        return [a, JSON.stringify(svBetTbState.cards)]
    } catch (error) {
        console.error(error);
        return { error: error };
    }
});