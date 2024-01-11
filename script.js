document.addEventListener('DOMContentLoaded', function() {
  // Показать попап при загрузке страницы
  showPopup();

  // Обработчик события для кнопки закрытия попапа
  document.getElementById('closePopup').addEventListener('click', function () {
    hidePopup();
  });
});

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}