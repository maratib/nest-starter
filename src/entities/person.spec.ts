import { Person } from '@/entities/person';

describe('PersonTs', () => {
  it('should be defined', () => {
    expect(new Person()).toBeDefined();
  });
});
