let checklistItems = [
  { id: 1, text: '필요한 항목을 전부 작성하였나요?', checked: false },
  { id: 2, text: '졸업예정자와 졸업을 명확하게 분리하였나요?', checked: false },
  { id: 3, text: '기본 인적 사항을 명확하게 확인하였나요?', checked: false },
  { id: 4, text: '지원기업 및 직무명을 확인하였나요?', checked: false },
  { id: 5, text: '기간을 제대로 입력하였나요?', checked: false },
  { id: 6, text: '글자수를 정확하게 확인했나요?', checked: false },
  { id: 7, text: '맞춤법 및 오탈자를 확인했나요?', checked: false },
  { id: 8, text: '첨부 파일이 있는 경우 파일명을 확인했나요?', checked: false },
];

export const getChecklistKeyboard = () => {
  return {
    reply_markup: {
      inline_keyboard: checklistItems.map((item) => [
        {
          text: `${item.checked ? `✅` : item.text}`,
          callback_data: `toggle_${item.id}`,
        },
      ]),
    },
  };
};

export const toggleChecklistItem = (itemId: number) => {
  checklistItems = checklistItems.map((item) =>
    item.id === itemId ? { ...item, checked: !item.checked } : item
  );
};

export const areAllItemsChecked = () => {
  return checklistItems.every((item) => item.checked);
}

export const resetCheckListItems = () => {
  checklistItems = checklistItems.map((item) => ({ ...item, checked: false}));
}