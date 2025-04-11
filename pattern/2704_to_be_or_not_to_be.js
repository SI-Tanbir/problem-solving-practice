function expect(val) {
    const toBe = (val2) => {
        if (val === val2) {
            return { value: true };
        } else {
            throw new Error("Not Equal");
        }
    };

    const notToBe = (val2) => {
        if (val !== val2) {
            return { value: true };
        } else {
            throw new Error("Equal");
        }
    };

    return { toBe, notToBe };
}
