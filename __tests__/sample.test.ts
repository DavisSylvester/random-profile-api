import jest from 'jest';
import { add } from "../src/index";

describe("sample test", () => {

    it('test 1', () => {
        const a = 1;
        const b = 4;
         
        const answer = 5;

        const result = add(a,b);

        expect(result).toBe(answer)
    });

    it('test 2', () => {
        const a = 1;
        const b = 4;

        const answer = 9;

        const result = add(a, b);

        expect(result).not.toBe(answer)
    });
});