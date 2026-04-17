const PATTERN = /[-_]/

const hasText = (text: string) => {
  return text && text !== '' ? true : false;
}

const capitilize = (text: string) => {
  if (!hasText(text)) {
    return '';
  }

  return text.replace(/^./, (c) => c.toLocaleUpperCase())
}

const formatTitle = (title: string) => {
  if (!hasText(title)) {
    return '';
  }

  const [ s1, s2 ] = title.split(PATTERN);  

  return `${capitilize(s1)} ${capitilize(s2)}`
}

export default formatTitle;