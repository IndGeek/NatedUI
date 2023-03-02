// synced with first day

const natUI = document.querySelector('.nat-ui');

const handleClass = (element, cls) => {
    const [prefix, value] = cls.split('-');
    switch (prefix) {
      case 'pd':
        element.style.setProperty('padding', `${value}px !important`);
        break;
      case 'm':
        element.style.setProperty('margin', `${value}px !important`);
        break;
      case 'bg':
        element.style.setProperty('background-color', value, 'important');
        break;
      case 'text':
        element.style.setProperty('color', value, 'important');
        break;
      case 'maxw':
        element.style.setProperty('max-width', `${value}px !important`);
        break;
      case 'minw':
        element.style.setProperty('min-width', `${value}px !important`);
        break;
      case 'border':
        if (value.startsWith('color-')) {
          element.style.setProperty('border-color', value.split('-')[1], 'important');
        } else {
          element.style.setProperty('border', value, `${value}px solid !important`);
        }
        break;
      case 'mx':
        element.style.setProperty('margin-left', `${value}px !important`);
        element.style.setProperty('margin-right', `${value}px !important`);
        break;
      case 'my':
        element.style.setProperty('margin-top', `${value}px !important`);
        element.style.setProperty('margin-bottom', `${value}px !important`);
        break;
      case 'px':
        element.style.setProperty('padding-left', `${value}px !important`);
        element.style.setProperty('padding-right', `${value}px !important`);
        break;
      case 'py':
        element.style.setProperty('padding-top', `${value}px !important`);;
        element.style.setProperty('padding-bottom', `${value}px !important`);
        break;
      case 'rounded':
        element.style.setProperty('border-radius', `${value}px !important`);
        break;
      case 'font':
        if (value === 'light') {
          element.style.setProperty('font-weight', 100, 'important');
        } else if (value === 'normal') {
          element.style.setProperty('font-weight', 400, 'important');
        } else if (value === 'medium') {
          element.style.setProperty('font-weight', 500, 'important');
        } else if (value === 'semibold') {
          element.style.setProperty('font-weight', 600, 'important');
        } else if (value === 'bold') {
          element.style.setProperty('font-weight', 700, 'important');
        } else {
          element.style.setProperty('font-weight', `${value}px !important`);
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
