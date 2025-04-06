const colorSchemes = {
    standard: {
      bg: '#8FD2FC',
      primary: '#023876',
      accent: '#8FD2FC',
      text: '#FFFFFF'
    },
    gazprom: {
      bg: '#FFFFFF',
      primary: '#0489C6',
      accent: '#005B9A',
      text: '#333333'
    },
    rosneft: {
      bg: '#FFFFFF',
      primary: '#00A0E3',
      accent: '#003D4F',
      text: '#000000'
    },
    rosseti: {
      bg: '#F2F2F2',
      primary: '#FF0000',
      accent: '#F2F2F2',
      text: '#333333'
    }
  };
  
  function applyColorScheme(scheme) {
    const colors = colorSchemes[scheme];
    
    // Перебираем все элементы с data-color-type (и SVG, и div)
    document.querySelectorAll('[data-color-type]').forEach(element => {
      const colorType = element.getAttribute('data-color-type');
      
      // Если это SVG-элемент (меняем fill)
      if (element instanceof SVGElement) {
        if (colors[colorType]) {
          element.style.fill = colors[colorType];
        }
      }
      // Если это обычный HTML-элемент (меняем background)
      else {
        if (colors[colorType]) {
          element.style.background = colors[colorType];
        }
      }
    });
  }
  
  // Обработчик изменения селектора
  document.getElementById('campaign-selector').addEventListener('change', function() {
    const selectedScheme = this.value;
    applyColorScheme(selectedScheme);
    
    // Сохраняем выбор в localStorage (опционально)
    localStorage.setItem('selectedCampaign', selectedScheme);
  });
  
  // При загрузке страницы восстанавливаем выбор
  document.addEventListener('DOMContentLoaded', function() {
    const savedScheme = localStorage.getItem('selectedCampaign') || 'standard';
    const selector = document.getElementById('campaign-selector');
    
    if (selector) {
      selector.value = savedScheme;
      applyColorScheme(savedScheme);
    }
  });