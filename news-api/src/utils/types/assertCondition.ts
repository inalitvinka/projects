export function assertCondition(condition: boolean): asserts condition {
    if (!condition) {
        throw new Error('Not expected type');
    }
}
