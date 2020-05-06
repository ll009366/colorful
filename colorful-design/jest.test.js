//
test('test common matcher', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
})

test('test to be true of false', () => {
    expect(2).toBeTruthy();
    expect(0).toBeFalsy();
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)//4 大于3
    expect(2).toBeLessThan(3);//2 是否小于3
})

test('test obj', () => {
    expect({ name: 'zhe' }).toEqual({ name: 'zhe'})
})

//toBe 是 完全相同，toEqual是值相同
