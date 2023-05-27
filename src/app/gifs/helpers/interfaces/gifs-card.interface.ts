export interface Place {
  id: string;
  image: string;
  title: string;
  description: string;
  button: Button;
}

interface Button {
  text: string;
  link: string;
}
