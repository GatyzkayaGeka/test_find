function getProjectName() {
  // Ищем элемент с классом "product-parameter__value"
  const projectElement = document.querySelector('.product-parameter__value');
  // Проверяем, найден ли элемент
  if (projectElement) {
    const projectLink = projectElement.querySelector('a');
    // Проверяем, найден ли элемент
    if (projectLink) {
      // Извлекаем текст из элемента (название проекта)
      const projectName = projectLink.innerText.trim();
      return projectName;
    }
  }
  // Если не удалось найти информацию, возвращаем null
  return null;
}

getProjectName();