import Character from '../character';
import Team from '../index';

test('add character twice', () => {
  const team = new Team();
  const member = new Character('Name');

  team.add(member);
  try {
    team.add(member);
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe('This character is already in the team');
  }
});

test('add two different characters', () => {
  const team = new Team();

  team.add(new Character('Name'));
  team.add(new Character('Name'));

  expect(team.members.size).toBe(2);
});

test('addAll', () => {
  const team = new Team();

  team.addAll(new Character('Name'), new Character('Name'));

  expect(team.members.size).toBe(2);
});

test('toArray', () => {
  const team = new Team();
  const member1 = new Character('Name 1');
  const member2 = new Character('Name 2');
  team.add(member1);
  team.add(member2);

  const result = team.toArray();
  const expected = [member1, member2];

  expect(result).toMatchObject(expected);
});
