export const changeName = (category: string) => {
  if (category === 'recommand_spelling') {
    return '맞춤법 검사';
  } else if (category === 'recommand_selfintro') {
    return '자소서 항목';
  } else if (category === 'recommand_successful') {
    return '합격 자소서';
  } else if (category === 'recommand_consulting') {
    return '컨설팅';
  } else {
    return null;
  }
};
