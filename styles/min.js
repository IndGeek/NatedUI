const natUI = document.querySelector('.nat-ui');

const handleClass = (element, cls) => {
    const [prefix, value] = cls.split('-');
    switch (prefix) {
      case 'pd':
        element.style.padding = `${value}px`;
        break;
      case 'm':
        element.style.margin = `${value}px`;
        break;
      case 'bg':
        element.style.backgroundColor = value;
        break;
      case 'text':
        element.style.color = value;
        break;
      case 'maxw':
        element.style.maxWidth = `${value}px`;
        break;
      case 'minw':
        element.style.minWidth = `${value}px`;
        break;
      case 'border':
        if (value.startsWith('color-')) {
          element.style.borderColor = value.split('-')[1];
        } else {
          element.style.border = `${value}px solid`;
        }
        break;
      case 'mx':
        element.style.marginLeft = `${value}px`;
        element.style.marginRight = `${value}px`;
        break;
      case 'my':
        element.style.marginTop = `${value}px`;
        element.style.marginBottom = `${value}px`;
        break;
      case 'px':
        element.style.paddingLeft = `${value}px`;
        element.style.paddingRight = `${value}px`;
        break;
      case 'py':
        element.style.paddingTop = `${value}px`;
        element.style.paddingBottom = `${value}px`;
        break;
      case 'rounded':
        element.style.borderRadius = `${value}px`;
        break;
      case 'font':
        if (value === 'light') {
          element.style.fontWeight = 100;
        } else if (value === 'normal') {
          element.style.fontWeight = 400;
        } else if (value === 'medium') {
          element.style.fontWeight = 500;
        } else if (value === 'semibold') {
          element.style.fontWeight = 600;
        } else if (value === 'bold') {
          element.style.fontWeight = 700;
        } else {
          element.style.fontSize = `${value}px`;
        }
        break;
    }
  };
  

  const handleElement = (element) => {
    const classes = element.className.split(' ');
    for (const cls of classes) {
      switch (true) {
        case cls.startsWith('pd-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('m-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('bg-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('text-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('maxw-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('minw-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('border-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('mx-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('my-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('px-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('py-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('rounded-'):
          handleClass(element, cls);
          break;
        case cls.startsWith('font-'):
          handleFontClass(element, cls);
          break;
      }
    }
  };
  
  const handleFontClass = (element, cls) => {
    const value = cls.split('-')[1];
    switch (value) {
      case 'light':
        element.style.fontWeight = '100';
        break;
      case 'medium':
        element.style.fontWeight = '500';
        break;
      case 'normal':
        element.style.fontWeight = '400';
        break;
      case 'semibold':
        element.style.fontWeight = '600';
        break;
      case 'bold':
        element.style.fontWeight = '700';
        break;
      default:
        const fontSize = parseInt(value);
        if (!isNaN(fontSize)) {
          element.style.fontSize = `${fontSize}px`;
        }
        break;
    }
  }
  
  const handleElements = () => {
    const elements = natUI.querySelectorAll('*');
    for (const element of elements) {
      handleElement(element);
    }
  };

handleElements();
