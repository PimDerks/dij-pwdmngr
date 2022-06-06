import { addPassword, editPassword, removePassword } from "./UserContext";
let passwords;

beforeEach(() => {
  passwords = [
    {
      id: 1,
      name: "Lorem",
      password: "Ipsum",
    },
  ];
});

it("adds a password to a pre-existing array", () => {
  expect(passwords.length).toBe(1);
  passwords = addPassword(passwords, {
    name: "Dolor Sit",
    password: "Amet",
  });
  expect(passwords.length).toBe(2);
});

it("remove a password from a pre-existing array", () => {
  expect(passwords.length).toBe(1);
  passwords = removePassword(passwords, {
    id: 1,
    name: "Lorem",
    password: "Ipsum",
  });
  expect(passwords.length).toBe(0);
});

it("edits a password in a pre-existing array", () => {
  expect(passwords.length).toBe(1);
  passwords = editPassword(passwords, {
    id: 1,
    name: "Lorem2",
    password: "Ipsum2",
  });
  expect(passwords[0].name).toBe("Lorem2");
  expect(passwords.length).toBe(1);
});
