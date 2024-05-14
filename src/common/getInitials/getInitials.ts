export const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  const firstLetters = nameParts.map((namePart) => namePart.charAt(0));
  return firstLetters.join('');
};
