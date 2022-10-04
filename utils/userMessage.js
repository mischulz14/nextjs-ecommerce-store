export function showUserMessage(eventTarget) {
  eventTarget.closest('.card').classList.add('active');

  setTimeout(() => {
    eventTarget.closest('.card').classList.remove('active');
  }, 1500);
}
