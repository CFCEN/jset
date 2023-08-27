import {describe, expect, test} from "@jest/globals";
import {sum} from "../calculate/sum";

describe('sum module', () => {
    test('sum',  () => {
        expect(sum(1,2)).toBe(3)
    });
});

describe('sum2 module', () => {
    test('sum2',  () => {
        expect(sum(1,2)).toBe(3)
    });
});