import { dCrEl, dQSr } from "./dom-helpers";

export function defineNewTitle(newTitle) {
  dQSr('title').innerHTML = newTitle ;
}

export function defineMetaTagsPage(ogTags, cardTags) {
  const header = dQSr('head');
  ogTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('property', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  });
  cardTags.forEach(data => {
    const meta = dCrEl('meta');
    meta.setAttribute('name', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  })
}

    /*[
      { value: "og:title", content: ""},
      { value: "og:type", content: ""},
      { value: "og:url", content: ""},
      { value: "og:image", content: ""},
      { value: "og:description", content: ""}
    ],
      //card
    [
      {value: "twitter:image", content: ""},
      { value: "description", content: ""}
      
    ]*/