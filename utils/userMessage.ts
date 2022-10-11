export function showUserMessage(eventTarget: any) {
  eventTarget.closest('.card').classList.add('active');

  setTimeout(() => {
    eventTarget.closest('.card').classList.remove('active');
  }, 1500);
}
