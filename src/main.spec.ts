import { byPass } from './main';

describe('Main', () => {
    
    describe('byPass', () => {

        const case1 = 'heelo there';
        const case2 = 'are you going to stay up allnight?'

        it('should bypass strings', () => {
            const result = byPass(case1);
            expect(result).toBe('heelo there');
        });

        it('should bypass strings', () => {
            const result = byPass(case2);
            expect(result).not.toBe('Yes, I will stay up allnight');
        });

    })
});