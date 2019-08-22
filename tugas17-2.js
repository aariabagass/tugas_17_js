var ascii = () => {
  code = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  console.log(code.charCodeAt(0) + "-" + code.charCodeAt(1) + "-" + code.charCodeAt(2) + "-" + code.charCodeAt(3) + "-" + code.charCodeAt(4) + "-" + code.charCodeAt(5));
  return code;
}
ascii()