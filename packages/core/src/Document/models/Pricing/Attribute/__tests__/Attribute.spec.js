import { Attribute } from '../Attribute';

test('ok', () => {
  const attr = new Attribute({name: 'xxx'});

  expect(attr.name).toBe('xxx');
})
